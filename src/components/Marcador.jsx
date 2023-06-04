import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { useLogin } from "../context"

export default function Marcador(props) {
    const [marcado, setMarcado] = useState(props.info.done)
    const { usuario, qntHabFeito, setQntHabFeito, hoje, setHoje } = useLogin()
    const [seqAt, setSeqAt] = useState(hoje[props.numero].currentSequence)
    const [seqRec, setSeqRec] = useState(hoje[props.numero].highestSequence)
    


    const config = {
        headers: {
            "Authorization": `Bearer ${usuario.token}`
        }
    }

    function check() {
        const body = {

        }
        if (marcado) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.info.id}/uncheck`, body, config)
                .then((res) => {
                    console.log("deu bom,desabilitou", res)

                    axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
                        .then((res) => {
                            setHoje(res.data)
                            setSeqAt(res.data[props.numero].currentSequence);
                            setSeqRec(res.data[props.numero].highestSequence);
                            console.log("seqAt1", res.data[props.numero].currentSequence)
                            console.log("seqRec1", res.data[props.numero].highestSequence)

                        })
                        .catch((err) => console.log(err.response.data.message))
                })
                .catch((err) => console.log("deu ruim"))
            setMarcado(false)
            setQntHabFeito(qntHabFeito - 1)


        } else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.info.id}/check`, {}, config)
                .then((res) => {
                    console.log("deu bom,habilitou", res)
                    axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
                        .then((res) => {
                            setHoje(res.data)
                            setSeqAt(res.data[props.numero].currentSequence);
                            setSeqRec(res.data[props.numero].highestSequence);
                            console.log("seqAt2", res.data[props.numero].currentSequence)
                            console.log("seqRec2", res.data[props.numero].highestSequence)
                           
                        })
                        .catch((err) => console.log(err.response.data.message))

                })
                .catch((err) => console.log("deu ruim"))
            setMarcado(true)
            setQntHabFeito(qntHabFeito + 1)
            
        }




    }

    console.log("estado hab", props.info)

    return (
        <ConteudoMarcador data-test="today-habit-container">
            <Texto>
                <p data-test="today-habit-name">{props.info.name}</p>
                <SpanZinho data-test="today-habit-sequence">Sequência atual: <SpanHoje marcado={marcado}>{seqAt} dias</SpanHoje></SpanZinho>
                <SpanZinho data-test="today-habit-record">Seu recorde: <SpanHoje2 sequenciaAt={seqAt} rec={seqRec}>{seqRec} dias</SpanHoje2> </SpanZinho>
            </Texto>
            <BotaoHoje marcado={marcado} data-test="today-habit-check-btn" onClick={() => check()}>✓</BotaoHoje>
        </ConteudoMarcador>
    )
}

const ConteudoMarcador = styled.div`
    background-color: white;
    width: 340px;
    height: 94px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 13px;
    margin-bottom: 10px;
`

const Texto = styled.div`
    display: flex;
    flex-direction: column;
    p{
        font-size: 20px;
        color: #666666;
        margin-bottom: 7px;
    }
`
const BotaoHoje = styled.button`
    width: 69px;
    height: 69px;
    border: none;
    border-radius: 5px;
    font-size: 50px;
    color: white;
    background-color: ${props => (props.marcado ? "#8fc549" : "#ebebeb")};
`

const SpanHoje = styled.span`
    font-size: 13px;
    color: ${props => (props.marcado ? "#8fc549" : "#666666")};
`
const SpanHoje2 = styled.span`
    font-size: 13px;
    color: ${props => (props.sequenciaAt === props.rec && props.sequenciaAt > 0 ? "#8fc549" : "#666666")};
`

const SpanZinho = styled.span`
    font-size: 13px;
    color: #666666;
`