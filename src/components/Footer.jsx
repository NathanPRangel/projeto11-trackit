import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { ProgressBarContext } from "../context/ProgressBarContext";



export default function Footer() {

  const { progressBar } = useContext(ProgressBarContext);

  return (
    <>
      <Shadow />
      <Foot data-test="menu">
        <Link data-test="habit-link" to={"/habitos"}>
          <p>Hábitos</p>
        </Link>
        <Link data-test="today-link" to="/hoje">
          <CircularProgressbar
            className="circularProgessBar"
            value={progressBar}
            text={"Hoje"}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "#FFF",
              pathColor: "#FFF",
              trailColor: "transparent"
            })}
          />
        </Link>
        <Link data-test="history-link" to={"/historico"}>
          <p>Histórico</p>
        </Link>
      </Foot >
    </>
  );
}

const Shadow = styled.div`
  width: 375px;
  height: 70px;
`;

const Foot = styled.div`
  position:fixed;
  bottom:0px;
  left:0px;

  width: 375px;
  height: 70px;

  background-color: #FFFFFF;

  display:flex;
  justify-content:space-around;
  align-items:center;

  .circularProgessBar {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    margin-bottom:40px;
    width: 91px;
  }

  p{
    width: 68px;
    height: 22px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #52B6FF;
  }

`;