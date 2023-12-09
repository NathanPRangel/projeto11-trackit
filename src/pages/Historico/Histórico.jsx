import Cabeçalho from "../../components/Cabeçalho"
import TituloComPlus from "../../components/TituloComPlus"
import FooterComponent from "../../components/FooterComponent"
import styled from 'styled-components';

export default function Historico() {

    return (
        <>

            <Cabeçalho />

            <TituloComPlus titulo={"Histórico"} display={"none"} margin={"28px"} />

            <Container>

                <Historicoregistro>Em breve você poderá ver o histórico dos seus hábitos aqui!</Historicoregistro>

            </Container>

            <FooterComponent />

        </>

    )
}

const Container = styled.div`
    width: 100%;
    height:74px;
    display:flex;
    justify-content: center;
    align-items: center;
`
const Historicoregistro = styled.div`
    width: calc(100vw - 32px);
    height:74px;
    color:#666666;
    background-color:#F2F2F2;
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

`