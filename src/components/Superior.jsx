import styled from "styled-components"
import { useLogin } from "../context"

export default function Superior(){
    const {usuario}=useLogin();

    return(
        <ContainerSup data-test="header" >
            <span>Trackit</span>
            <img src={usuario.image} alt="foto-usuario" data-test="avatar"/>
        </ContainerSup>
    )
}

const ContainerSup=styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #126ba5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    z-index: 1;
    img{
        width: 51px;
        height: 51px;
        border-radius: 100px;
    }
    span{
        font-size: 39px;
        font-weight: 400;
        color: white;
        font-family: 'Playball', cursive;
    }
`