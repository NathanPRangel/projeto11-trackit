import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

export default function FooterComponent() {

    const { porcentagem } = useContext(LoginContext);

    return (
        <Footer data-test="menu">

            <FooterConteiner>

                <NavFooter>

                    <Link data-test="habit-link" to="/habitos">

                        <h1>Hábitos</h1>

                    </Link>

                    <Link data-test="today-link" to='/hoje'>

                        <div>
                            <CircularProgressbar
                                value={porcentagem}
                                text={`Hoje`}
                                strokeWidth={10}
                                styles={{
                                    path: {
                                        stroke: '#FFFFFF',
                                        strokeLinecap: 'round',
                                    },
                                    trail: {
                                        stroke: '#52B6FF',
                                        width: '6px'

                                    },
                                    text: {
                                        fill: '#FFFFFF',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        fontFamily: 'Lexend Deca',
                                        textAnchor: 'middle',
                                    },
                                }}
                            />

                        </div>

                    </Link>

                    <Link data-test="history-link" to="/historico">

                        <h1>Histórico</h1>

                    </Link>

                </NavFooter>

            </FooterConteiner>

        </Footer>
    )
}

const Footer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    height: 70px;
    background-color: #FFFFFF;
    width:100%;
    box-shadow: 0px 4px 4px 0px #00000026;
    position: fixed;
    bottom:0;

`
const FooterConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const NavFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: calc(100vw - 72px);

    h1 {
        height: 22px;
        width: 68px;
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        color:#52B6FF;
    }
    div {
        width:79px;
        height:76px;
        border-radius:100%;
        background-color:#52B6FF;
        margin-bottom:50px;
        padding:12px;
    }
    a {
        text-decoration: none;
    }
`