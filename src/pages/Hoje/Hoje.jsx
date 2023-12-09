import Cabeçalho from "../../components/Cabeçalho"
import TituloComPlus from "../../components/TituloComPlus"
import FooterComponent from "../../components/FooterComponent"
import HabitosDeHoje from "../../components/HabitosDeHoje";
import { useContext } from 'react';
import { LoginContext } from "../../Contexts/LoginContext";
import { useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import MensagemHabitosHoje from "../../components/MensagemHabitosHoje";

export default function Hoje() {

    const { login, habitosdeHoje, setHabitosdeHoje, porcentagem } = useContext(LoginContext);
    const token = login.token;

    dayjs.locale('pt-br');
    const diadesemana = dayjs().format('dddd').replace('-feira', '');
    const primeiroCaracter = diadesemana.charAt(0).toUpperCase();
    const restante = diadesemana.slice(1);
    const diaSemanaFormatado = primeiroCaracter + restante;
    const data = dayjs().format('DD/MM');

    useEffect(() => {

        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        }

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

        const promise = axios.get(url, config);

        promise.then((resposta) => {

            console.log(resposta.data, "lista");
            setHabitosdeHoje(resposta.data);

        })

        promise.catch((erro) => {

            console.log(erro.response.data);

        })

    }, []);

    return (
        <>

            <Cabeçalho />

            <TituloComPlus titulo={diaSemanaFormatado + ", " + data} display={"none"} margin={"0px"} />

            <MensagemHabitosHoje />

            <HabitosDeHoje />

            <FooterComponent />

        </>

    )
}