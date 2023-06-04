import styled from "styled-components"
import { useLogin } from "../context"

export default function Days(props) {
    const { dias, setDias } = useLogin()

    function selecionar(data) {
        console.log("clicou")
        if (dias.includes(data)) {
            console.log("inclui")
            setDias(dias.filter((d)=>d!==data))
            return true
        } else {
            console.log("nao inclui")
            setDias([...dias, data])
            return false
        }

    }

    return (
        <Week>
            <Botao onClick={() => selecionar(0)} funcao={0} dias={dias} data-test="habit-day" disabled={(props.carregando ? true : false)}>D</Botao>
            <Botao onClick={() => selecionar(1)} funcao={1} dias={dias} data-test="habit-day" disabled={(props.carregando ? true : false)}>S</Botao>
            <Botao onClick={() => selecionar(2)} funcao={2} dias={dias} data-test="habit-day" disabled={(props.carregando ? true : false)}>T</Botao>
            <Botao onClick={() => selecionar(3)} funcao={3} dias={dias} data-test="habit-day" disabled={(props.carregando ? true : false)}>Q</Botao>
            <Botao onClick={() => selecionar(4)} funcao={4} dias={dias} data-test="habit-day" disabled={(props.carregando ? true : false)}>Q</Botao>
            <Botao onClick={() => selecionar(5)} funcao={5} dias={dias} data-test="habit-day" disabled={(props.carregando ? true : false)}>S</Botao>
            <Botao onClick={() => selecionar(6)} funcao={6} dias={dias} data-test="habit-day" disabled={(props.carregando ? true : false)}>S</Botao>
        </Week>
    )
}

const Week = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;

`

const Botao=styled.button`

    width: 30px;
    height: 30px;
    border: 1px solid #d4d4d4;
    margin-right: 4px;
    border-radius: 5px;
    font-size: 20px;
    color: ${props=>((props.dias.includes(props.funcao))? "white": "#dbdbdb")};
    background-color: ${props=>((props.dias.includes(props.funcao))? "#cfcfcf": "white")};
  
`