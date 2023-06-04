import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Inferior from "../components/Inferior";
import Marcador from "../components/Marcador";
import Superior from "../components/Superior";
import { useLogin } from "../context";

export default function Hoje(){
    const { usuario,qntHab,qntHabFeito,setQntHab, setQntHabFeito,hoje,setHoje} = useLogin()
    const weekday=dayjs().locale('pt=br').day();

    function findWeekday(){
        switch(weekday){
            case 1:
                return "Segunda"
            case 2:
                return "Terça"
            case 3:
                return "Quarta"
            case 4:
                return "Quinta"
            case 5:
                return "Sexta"
            case 6:
                return "Sabado"
            case 0:
                return "Domingo"
           
        }
    }

    const config = {
        headers: {
            "Authorization": `Bearer ${usuario.token}`
        }
    }

    useEffect(()=>{
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config)
        .then((res)=>{
            console.log("hoje",res.data)
            setHoje(res.data)
            setQntHab(res.data.length)   
            const teste=(res.data.filter((h)=>h.done===true))
            console.log("teste",teste.length)
            setQntHabFeito(teste.length);
        })
        .catch((err)=>console.log(err.response.data.message))
       
    },[])
    console.log("hab feitos",qntHabFeito)
    return(
        <>
        <Superior/>
        <ConteudoHoje>
            <P data-test="today">{findWeekday()}, {dayjs().format('DD/MM')}</P>
            <Span data-test="today-counter" qnt={qntHabFeito}>{((qntHabFeito!==0)?`${Math.ceil(qntHabFeito/qntHab*100)}% dos hábitos concluídos`:"Nenhum hábito concluido ainda")}</Span>
            {hoje.map((h,i)=><Marcador key={hoje[i].id} info={hoje[i]} hoje={hoje} numero={i} setHoje={setHoje}/> )}

        </ConteudoHoje>
        <Inferior/>
        </>
    )
}

const ConteudoHoje=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f2f2;
    padding: 70px 18px;
    height: 100%;
`
const Span=styled.span`
    color: ${props=>(props.qnt!==0?"#8fc549":"#bababa")};
    font-size: 18px;
    width: 100%;
    margin-bottom: 28px;
`

const P=styled.p`
    margin-top: 28px;
    color: #126ba5;
    font-size: 23px;
    width: 100%;
`

