import styled from 'styled-components';
import { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

export default function MensagemHabitosHoje() {

    const { habitosdeHoje, porcentagem } = useContext(LoginContext);

    return (
        <HabitosConcluidos data-test="today-counter" concluido={porcentagem > 0}>

            {habitosdeHoje.length === 0 || porcentagem === 0
                ? "Nenhum hábito concluído ainda"
                : `${porcentagem}% dos hábitos concluídos`}

        </HabitosConcluidos>
    )
}

const HabitosConcluidos = styled.div`
    width: calc(100vw - 34px);
    height: 22px;
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: ${({ concluido }) => (concluido ? '#8FC549' : '#BABABA')};
    margin-left: 18px;
`