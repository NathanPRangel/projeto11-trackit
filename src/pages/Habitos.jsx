import axios from "axios";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import Days from "../components/Days";
import Inferior from "../components/Inferior";
import Superior from "../components/Superior";
import Task from "../components/Task";
import { useLogin } from "../context";

export default function Habitos() {
    const { usuario, dias, setDias, hab, setHab,qntHab,setQntHab } = useLogin()
    const [abrir, setAbrir] = useState(false)
    const [nomeHab, setNomeHab] = useState("")
    const [carregando, setCarregando] = useState(false)

    console.log("token?", usuario)
    console.log("dias", dias)

    const config = {
        headers: {
            "Authorization": `Bearer ${usuario.token}`
        }
    }

    function addHab(e) {
        e.preventDefault();
        const body = {
            name: nomeHab,
            days: dias
        }
        setQntHab(qntHab+1)
        setCarregando(true)
        if (dias.length === 0) {
            setAbrir(false)
            setCarregando(false)
            return
        }
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
            .then(res => {
                setAbrir(false)
                setDias([])
                setCarregando(false)
                axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
                    .then((res) => {
                        setHab(res.data)
                        console.log("HAB", res.data)
                    })
                    .catch((err) => err.response.data.message)
            })
            .catch(err => alert(err.response.data.message))

        setNomeHab("")
    }



    useEffect(() => {

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
            .then((res) => {
                setHab(res.data)
                console.log("HAB", res.data)
            })
            .catch((err) => err.response.data.message)
    }, [])

    return (
        <>
            <Superior />
            <Conteudo>
                <Hab>
                    <p>Meus hábitos</p>
                    <Botao onClick={() => setAbrir(true)} data-test="habit-create-btn">+</Botao>
                </Hab>
                <NewHab abrir={abrir} data-test="habit-create-container" >
                    <input type="text" value={nomeHab} onChange={(e) => setNomeHab(e.target.value)} data-test="habit-name-input" disabled={(carregando ? true : false)} />
                    <Days carregando={carregando} />
                    <Botoes>
                        <Botao2 onClick={() => setAbrir(false)} data-test="habit-create-cancel-btn" disabled={(carregando ? true : false)}>Cancelar</Botao2>
                        <Salvar type="submit" onClick={addHab} data-test="habit-create-save-btn" disabled={(carregando ? true : false)}>{carregando ? <ThreeDots
                            height="11"
                            width="84"
                            color="white"
                        /> : "Salvar"}</Salvar>
                    </Botoes>
                </NewHab>
                {(hab.length === 0) ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : ""}
                {hab.map((h, i) => <Task key={hab[i].id} hab={hab[i]} />)}
            </Conteudo>
            <Inferior />
        </>
    )
}

const Conteudo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #f2f2f2;
padding: 70px 0;
padding-bottom: 110px;
overflow-y: scroll;
height: 100%;
    p{
        font-size: 18px;
        line-height: 23px;
        color: #666666;
        width: 340px;
    }

`
const Hab = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 22px;
margin-bottom: 28px;
width: 340px;
p{
color: #126ba5;
font-size: 23px;
}
`
const Botao = styled.button`  
    background-color: #52b6ff;
    border-radius: 5px;
    width: 35px;
    height: 35px;
    border: none;
    color: white;
    font-size: 27px;
`

const NewHab = styled.div`
    width: 340px;
    height: 180px;
    background-color: white;
    padding: 18px;
    margin-bottom: 29px;
    display:${(props) => (!props.abrir ? "none" : "")};
    input{
        border: 1px solid #d4d4d4;
        width: 303px;
        height: 45px;
        border-radius: 5px;
    }
`
const Botoes = styled.div`
    margin-top: 29px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 23px;
`
const Salvar = styled.button`
    border: none;
    border-radius: 5px;
    width: 84px;
    height: 35px;
    background-color: #52b6ff;
    color: white;
    font-size: 16px;
`
const Botao2 = styled.button`
color: #52b6ff;
font-size: 16px;
background: none;
border: none;
`