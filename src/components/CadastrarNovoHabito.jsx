import styled from 'styled-components';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from "react-loader-spinner";
import { useEffect } from "react";
import { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';
import axios from 'axios';

export default function CadastrarNovoHabito(props) {

    const { login, listadeHabitos, setListadeHabitos } = useContext(LoginContext);
    const token = login.token;

    const navigate = useNavigate();

    const { tela1, setTela1, tela2, setTela2 } = props

    const dias = ["D", "S", "T", "Q", "Q", "S", "S"];

    const [diasSelecionados, setDiasSelecionados] = useState([]);
    const [enviar, setEnviar] = useState(false);
    const [criarhabito, setCriarHabito] = useState('');

    useEffect(() => {
        if (enviar) {
            const timer = setTimeout(() => {
                navigate("/habitos");
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [enviar, navigate]);


    function enviarInfos(e) {
        e.preventDefault();

        const body = {
            name: criarhabito,
            days: diasSelecionados
        }
        console.log(body);

        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        }
        console.log(config);

        const linkURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

        const promise = axios.post(linkURL, body, config);

        setEnviar(true);

        promise.then(resposta => {
            setTela2(false);
            setTela1(true);
            console.log(resposta.data);
            setListadeHabitos([...listadeHabitos, resposta.data]);

        });

        promise.catch(erro => {
            setEnviar(false);
            console.log(erro.response.data);
            alert(erro.response.data.message);
        });

    }


    function selecionarDia(index) {

        let podeadd = true;

        diasSelecionados.forEach(indice => {
            if (indice === index) {
                podeadd = false;
            }
        });

        if (podeadd === true) {

            setDiasSelecionados([...diasSelecionados, index]);

            console.log([...diasSelecionados, index])

        } else {
            let indicenovosdias = [];
            let indicediasatuais = [...diasSelecionados];

            indicediasatuais.forEach(indice => {
                if (indice != index) {

                    indicenovosdias.push(indice);
                }
            })

            setDiasSelecionados(indicenovosdias);

        }

    }

    return (

        <form onSubmit={enviarInfos}>

            <ContainerAddHabitos data-test="habit-create-container">

                <input data-test="habit-name-input" disabled={enviar} type="text" placeholder="nome do hábito" id="habito" value={criarhabito} onChange={(e) => setCriarHabito(e.target.value)} />

                <ContainerDias>

                    {dias.map((dia, index) => (

                        <CadaDia type="button" data-test="habit-day" disabled={enviar}

                            key={index}

                            id={index}

                            array={diasSelecionados}

                            onClick={() => selecionarDia(index)}

                        >{dia}</CadaDia>
                    )
                    )}

                </ContainerDias>

                <ContainerButtons>

                    <Button1 data-test="habit-create-cancel-btn" disabled={enviar} onClick={() => {
                        setTela1(true);
                        setTela2(false);
                    }}>Cancelar</Button1>

                    <Button2 type='submit' data-test="habit-create-save-btn" disabled={enviar}>
                        {enviar ? (
                            <ThreeDots color="#FFFFFF" height={20} width={20} />
                        ) : (
                            "Salvar"
                        )}
                    </Button2>

                </ContainerButtons>

            </ContainerAddHabitos>
        </form>
    )
}

const ContainerAddHabitos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: calc(100vw - 34px);
    height: 180px;
    border-radius:5px;
    background-color:#FFFFFF;
    margin-bottom:29px;
    margin-left: 17px;

    input {
        width: calc(100vw - 72px);
        height:45px;
        border-radius:5px;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        border: 1px solid #D4D4D4;
        margin-top:18px;
        padding-left: 11px;
        color: ${({ disabled }) => (disabled ? '#B3B3B3' : '#666666')};
    }
    input::placeholder {
    color: #DBDBDB;
    }
`
const ContainerDias = styled.div`
    width: calc(100vw - 72px);
    height: 38px;
    margin-bottom:29px;
    display:flex;
    justify-content: flex-start;
    align-items:flex-end;
`
const ContainerButtons = styled.div`
    width: calc(100vw - 68px);
    height: 35px;
    display:flex;
    justify-content: flex-end;
    align-items:center;
`
const Button1 = styled.button`
    height: 20px;
    width: 69px;
    font-family: Lexend Deca;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color:#52B6FF;
    margin-right: 23px;
    border: none;
    background-color: #FFFFFF;
    cursor: pointer;
    opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
`

const Button2 = styled.button`
    height: 35px;
    width: 84px;
    border-radius: 4.64px;
    background-color:#52B6FF;
    color: #FFFFFF;
    text-align: center;
    font-family: Lexend Deca;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    border:none;
    display:flex;
    justify-content:center;
    align-items: center;
    cursor:pointer;
    opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
`

const CadaDia = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 5px;
    margin-right:4px;

    background-color: ${({ array, id }) =>
        array.includes(id) ? '#CFCFCF' : '#FFFFFF'};

    color: ${({ array, id }) =>
        array.includes(id) ? '#FFFFFF' : '#D4D4D4'};

    border: 1px solid #D4D4D4;
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    cursor: pointer;
`
