import { useState } from "react";
import styled from "styled-components";

export default function Week(props) {

  const [select, setSelect] = useState(false)
  const { habitDay, setHabitDay, days, number, day, loading } = props;


  return (
    <>
      {loading === false
        ?
        select === false ?
          <Weekdays data-test="habit-day" key={number} onClick={() => {
            setSelect(true);
            setHabitDay([...habitDay, days])
          }}>{day}</Weekdays>
          :
          <WeekdaysSelect data-test="habit-day" key={number} onClick={() => {
            setSelect(false);
            setHabitDay(habitDay.filter(a => a != days))
          }}>{day}</WeekdaysSelect>
        :
        select === false ?
          <Weekdays disabled data-test="habit-day" key={number} onClick={() => {
            setSelect(true);
            setHabitDay([...habitDay, days])
          }}>{day}</Weekdays>
          :
          <WeekdaysSelect disabled data-test="habit-day" key={number} onClick={() => {
            setSelect(false);
            setHabitDay(habitDay.filter(a => a != days))
          }}>{day}</WeekdaysSelect>}

    </>
  );
}

const WeekdaysSelect = styled.button`
  cursor: pointer;

  display:flex;
  justify-content:center;
  align-items:center;

  width: 30px;
  height: 30px;

  margin-right:4px;

  background: #CFCFCF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;

  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  color: #FFF;
`;
const Weekdays = styled.button`
  cursor: pointer;

  display:flex;
  justify-content:center;
  align-items:center;

  width: 30px;
  height: 30px;

  margin-right:4px;

  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;

  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  color: #DBDBDB;
`;