import styled from 'styled-components';
import { useContext, useState } from 'react';
import { LoginContext } from '../Contexts/LoginContext';
import check from '../assets/check.svg'
import axios from 'axios';
import { useEffect } from 'react';

export default function HabitosDeHoje() {

    const { login, habitosdeHoje, setHabitosdeHoje, porcentagem, setPorcentagem } = useContext(LoginContext);
    const token = login.token;


    const [habitosMarcados, setHabitosMarcados] = useState([]);



    useEffect(() => {
        const habitosMarcados = habitosdeHoje.reduce(
            (contador, habito) => (habito.done ? contador + 1 : contador),
            0
        );
        setHabitosMarcados(habitosMarcados);
    }, [habitosdeHoje]);



    useEffect(() => {
        const progresso = (habitosMarcados / habitosdeHoje.length) * 100;
        const roundedProgresso = Math.round(progresso);
      
        const timer = setTimeout(() => {
          setPorcentagem(roundedProgresso);
        }, 0); // Atraso de 0 milissegundos
      
        return () => clearTimeout(timer); // Limpa o timer quando o efeito é desmontado
      }, [habitosMarcados, habitosdeHoje.length]);
      


    function marcarHabito(id, marcado) {

        const habitId = id;

        const body = {};

        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        };

        if (marcado === false) {


            const promise = axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`,
                body,
                config
            );


            promise.then(response => {
                const updatedHabitos = habitosdeHoje.map(habito => {
                    if (habito.id === habitId) {
                        return {
                            ...habito,
                            done: true
                        };
                    }
                    return habito;
                });
                setHabitosdeHoje(updatedHabitos);
                console.log("Hábito marcado com sucesso!", marcado);
            });


            promise.catch(error => {
                console.error("Ocorreu um erro ao marcar o hábito:", error);
            });



        } else {


            const promise = axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`,
                body,
                config
            );


            promise.then(response => {
                const updatedHabitos = habitosdeHoje.map(habito => {
                    if (habito.id === habitId) {
                        return {
                            ...habito,
                            done: false
                        };
                    }
                    return habito;
                });
                setHabitosdeHoje(updatedHabitos);
                console.log("Hábito desmarcado com sucesso!", marcado);
            });



            promise.catch(error => {
                console.error("Ocorreu um erro ao desmarcar o hábito:", error);
            });
        }
    }



    return (

        <ListContainer>

            {habitosdeHoje.map((habito) => (

                <HabitoContainer data-test="today-habit-container" key={habito.id}>

                    <Titulo>

                        <h1 data-test="today-habit-name">{habito.name}</h1>

                        <p>Sequência atual: <Span1 data-test="today-habit-sequence" isSelect={habito.done === true} isIgualeMaiorQueZero={habito.currentSequence === habito.highestSequence && habito.currentSequence > 0}> {habito.currentSequence} dias </Span1> </p>
                        <p data-test="today-habit-record">Seu recorde: <Span2 isSelect={habito.done === true} isIgualeMaiorQueZero={habito.currentSequence === habito.highestSequence && habito.currentSequence > 0}>{habito.highestSequence} dias</Span2></p>

                    </Titulo>

                    <Check data-test="today-habit-check-btn" done={habito.done} onClick={() => marcarHabito(habito.id, habito.done)} >

                        <Image src={check}></Image>

                    </Check>


                </HabitoContainer>

            )
            )}

        </ListContainer>

    )
}

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width:100%;
    height: auto;
    margin-bottom:100px;
    background-color:#F2F2F2;
    margin-top:28px;
`
const HabitoContainer = styled.div`
    height: 94px;
    width: calc(100vw - 45px);
    border-radius: 5px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: 10px;
    padding-right:15px;

`
const Titulo = styled.div`
    height: 64px;
    width: auto;
    border-radius: 5px;
    margin-top:13px;
    margin-bottom:8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15px;

    h1{
    height: 25px;
    width: 300px;
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color:#666666;
    }

    p{
    width: auto;
    height:32px;
    font-family: Lexend Deca;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;
    margin-top: 7px;
    }
`
const Span1 = styled.span`
    color: ${({ isSelect, isIgualeMaiorQueZero }) => (isSelect || isIgualeMaiorQueZero ? '#8FC549' : '#666666')};
`
const Span2 = styled.span`
    color: ${({ isIgualeMaiorQueZero }) => (isIgualeMaiorQueZero ? '#8FC549' : '#666666')};
`
const Check = styled.button`
    height: 69px;
    width: 69px;
    border-radius: 5px;
    border: 1px solid ${({ done }) => (done ? '#8FC549' : '#E7E7E7')};
    background-color: ${({ done }) => (done ? '#8FC549' : '#EBEBEB')};
    display: flex;
    justify-content:center;
    align-items: center;
`
const Image = styled.img`
    height: 28px;
    width: 35.09px;
`