import styled from 'styled-components';

export default function TituloComPlus(props) {

    const {titulo, onClick, display, margin} = props;

    return (
        <Corpo display={display} margin={margin}>

            <h1 data-test="today">{titulo}</h1>

            <button data-test="habit-create-btn" onClick={onClick}>+</button>

        </Corpo>
    )
}

const Corpo = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    text-align: center;
    margin-top:98px;
    padding-left:17px;
    padding-right:17px;
    background-color:#F2F2F2;
    margin-bottom: ${props => props.margin};
    
    h1{
        color:#126BA5;
        height: 29px;
        width: auto;
        font-family: Lexend Deca;
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
    }

    button {
        height: 35px;
        width: 40px;
        border-radius: 4.64px;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-family: Lexend Deca;
        font-size: 27px;
        font-weight: 400;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: center;
        cursor: pointer;
        border: none;
        display: ${props => props.display};
    }

`