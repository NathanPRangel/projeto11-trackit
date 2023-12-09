import styled from "styled-components"
import Cabeçalho from "../../components/Cabeçalho";
import FooterComponent from "../../components/FooterComponent";
import CadastrarNovoHabito from "../../components/CadastrarNovoHabito";
import NaoHaHabitos from "../../components/NaoHaHabito";
import TituloComPlus from "../../components/TituloComPlus";
import RenderizaHabitos from "../../components/RenderizaHabitos";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from 'react';
import { LoginContext } from "../../Contexts/LoginContext";


export default function Habitos(props) {

    const { tela1, setTela1, tela2, setTela2 } = props

    const { login, listadeHabitos, setListadeHabitos } = useContext(LoginContext);
    const token = login.token;

    useEffect(() => {

        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        }

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

        const promise = axios.get(url, config);

        promise.then((resposta) => {

            setListadeHabitos(resposta.data);
            console.log(resposta.data, "lista");
            setTela1(true);

        })

        promise.catch((erro) => {

            console.log(erro.response.data);

        })

    }, []);

    return (
        <>

            <Cabeçalho />

            <TituloComPlus titulo={"Meus hábitos"} display={"block"} margin={"28px"} onClick={() => {
                setTela1(false);
                setTela2(true);
            }} />


            <ContainerHabitos>

                {tela1 && listadeHabitos.length === 0 && (

                    <NaoHaHabitos />

                )}

                {tela1 && listadeHabitos.length > 0 && (

                    <RenderizaHabitos />

                )}

                {tela2 && (
                    <>
                        <CadastrarNovoHabito setTela1={setTela1} tela2={tela2} setTela2={setTela2} />
                        {listadeHabitos.length === 0 && (
                            <NaoHaHabitos />
                        )}
                         {listadeHabitos.length > 0 && (
                            <RenderizaHabitos />
                        )}
                        
                    </>
                )}


            </ContainerHabitos>

            <FooterComponent />

        </>

    )
}

const ContainerHabitos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width:100%;
    height: auto;
    background-color:#F2F2F2;
`