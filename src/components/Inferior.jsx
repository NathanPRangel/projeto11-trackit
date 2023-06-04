import { CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import 'react-circular-progressbar/dist/styles.css';
import { useLogin } from "../context";

export default function Inferior() {
    const navigate = useNavigate();
    const { qntHab,qntHabFeito} = useLogin()
    console.log("hab feitos: ",qntHabFeito)
    console.log("num hab: ",qntHab)

    return (
        <ContainerInf data-test="menu" >
            <Botao onClick={() => navigate("/habitos")} data-test="habit-link" >Hábitos</Botao>
            <Circulo  onClick={() => navigate("/hoje")} data-test="today-link">
                <CircularProgressbar value={ (qntHab!==0?((qntHabFeito/qntHab)*100):0)} text="Hoje" background backgroundPadding={6} styles={{
                    path:{
                        stroke: `rgba(255,255,255, 1)`,
                        strokeLinecap:`round`
                    },
                    background:{
                        fill:`#52b6ff`
                    },
                    text:{
                        fontSize:`18px`,
                        fill:`white`
                    },
                    trail:{
                        stroke:`#52b6ff`
                    }   
                }} 
                />
            </Circulo>
            <Botao onClick={() => navigate("/historico")} data-test="history-link" >Histórico</Botao>
        </ContainerInf>
    )
}

const ContainerInf = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
`

const Circulo = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 50px;
`

const Botao = styled.button`
    font-size: 18px;
    font-weight: 400;
    color: #52b6ff;
    border: none;
    background: none;
`