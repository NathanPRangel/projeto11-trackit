import styled from "styled-components";
import Inferior from "../components/Inferior";
import Superior from "../components/Superior";

export default function Historico() {
    return (
        <>
            <Superior />
            <ConteudoHist>
            <span>Histórico</span>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui</p>
            </ConteudoHist>
            <Inferior />
        </>
    )
}

const ConteudoHist = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f2f2;
    padding: 70px 0;
    height: 100%;
    p{
        font-size: 18px;
        line-height: 23px;
        color: #666666;
        width: 340px;
    }
    span{
        margin-top: 26px;
        font-size: 23px;
        color: #126ba5;
        width: 340px;
        margin-bottom: 17px;
    }

`