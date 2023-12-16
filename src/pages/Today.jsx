import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useContext, useState } from "react";
import { UserDataContext } from "../context/UserDataContext";
import { ProgressBarContext } from "../context/ProgressBarContext";
import axios from "axios";
import 'dayjs/locale/pt-br';
import dayjs from "dayjs";


export default function Today() {
  const { setProgressBar } = useContext(ProgressBarContext);
  const { token } = useContext(UserDataContext);
  const [task, setTask] = useState([]);
  const [completed, setCompleted] = useState(0);
  let n = 0;
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }

  useEffect(() => {
    const URLGetTask = `${import.meta.env.VITE_API_URL}/habits/today`;
    const promise = axios.get(URLGetTask, config);
    promise.then(resp => {
      setTask(resp.data)
    });
  }, [completed]);

  task.map(dado => {
    if (dado.done === true) {
      n++;
    }
  });

  if (task.length === 0) {
    setProgressBar(0);
  } else {
    setProgressBar((n / task.length) * 100);
  }

  return (
    <Size>
      <Header />
      <div>
        <Head>
          <h1 data-test="today" >{dayjs().locale('pt-br').format('dddd, DD/MM')}</h1>
          {n === 0 ? <p data-test="today-counter" >Nenhum hábito concluído ainda</p> : <p><Completed data-test="today-counter">{((n / task.length) * 100).toFixed(0) + "% dos hábitos concluídos"}</Completed></p>}
        </Head>
        {task.map(dado =>
          <Task data-test="today-habit-container" >
            <div>
              <h1 data-test="today-habit-name" >{dado.name}</h1>
              {dado.currentSequence > 0 ? <p><Completed data-test="today-habit-sequence" >Sequência atual: {dado.currentSequence} dias</Completed></p> : <p data-test="today-habit-sequence" >Sequência atual: {dado.currentSequence} dias</p>}
              {dado.highestSequence !== 0 && dado.highestSequence === dado.currentSequence ? <p><Completed data-test="today-habit-record" >Seu recorde: {dado.highestSequence} dias</Completed></p> : <p data-test="today-habit-record" >Seu recorde: {dado.highestSequence} dias</p>}
            </div>
            {dado.done === true ? <Completed data-test="today-habit-check-btn" onClick={() => {
              const URLPostUnCheck = `${import.meta.env.VITE_API_URL}/habits/${dado.id}/uncheck`;
              const body = {};
              const promise = axios.post(URLPostUnCheck, body, config)
              promise.then(() => setCompleted(completed - 1)).catch(error => alert(error.response.data.message))
            }}><ion-icon name="checkbox"></ion-icon></Completed> :
              <ToDo data-test="today-habit-check-btn" onClick={() => {
                const URLPostCheck = `${import.meta.env.VITE_API_URL}/habits/${dado.id}/check`;
                const body = {};
                const promise = axios.post(URLPostCheck, body, config)
                promise.then(() => setCompleted(completed + 1)).catch(error => alert(error.response.data.message))
              }}><ion-icon name="checkbox"></ion-icon></ToDo>}
          </Task>)}
        {task.length === 0 && <Text>Você não tem nenhum hábito hoje.</Text>}
      </div>
      <Footer />
    </Size>
  );
}

const Size = styled.div`
  width:375px;
`;
const Head = styled.div`
  margin: 28px 0px 28px 17px;
  h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    text-transform: capitalize;

    color: #126BA5;
  }
  p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #BABABA;
  }
`;
const Text = styled.p`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:17px;
  margin-right:17px;
  margin-top:20px;

  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #666666;
`;
const Task = styled.div`
  display: flex;
  justify-content:space-around;
  align-items:center;

  width: 340px;
  height: 94px;

  background: #FFFFFF;
  border-radius: 5px;

  margin:auto;
  margin-bottom:10px;
  div{
    h1{
      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;

      color: #666666;
    }
    p{
      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;

      color: #666666;
    }
  }
  ion-icon{
    width: 69px;
    height: 69px;

    border-radius: 5px;
  }
`;
const Completed = styled.div`
  color:#8FC549;

`;
const ToDo = styled.div`
  color:#EBEBEB;
`;