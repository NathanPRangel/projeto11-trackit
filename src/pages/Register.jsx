import styled from "styled-components";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import React, { useState } from 'react';


export default function Register() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState({
    email: "",
    name: "",
    image: "",
    password: ""
  });


  function handleChange(event) {
    const newRegister = { ...register };
    newRegister[event.target.name] = event.target.value;
    setRegister(newRegister);

  }

  return (
    <Size>
      <LogoText>
        <img src={Logo} alt="" />
      </LogoText>
      <Form onSubmit={event => {
        event.preventDefault();
        setLoading(true);

        let post = register;

        const URLPostRegister = `${import.meta.env.VITE_API_URL}/auth/sign-up`

        const promise = axios.post(URLPostRegister, post);

        promise.then(() => {
          setLoading(false);
          navigate("/")
        });

        promise.catch(erro => {
          setLoading(false);
          setRegister({
            email: "",
            name: "",
            image: "",
            password: ""
          });
          alert(erro.response.data.message);
        })

      }}>
        {loading === true ? <input disabled data-test="email-input" required onChange={handleChange} value={register.email} name="email" placeholder="E-mail" type="email" /> : <input data-test="email-input" required onChange={handleChange} value={register.email} name="email" placeholder="E-mail" type="email" />}
        {loading === true ? <input disabled data-test="password-input" required onChange={handleChange} value={register.password} name="password" placeholder="Senha" type="password" /> : <input data-test="password-input" required onChange={handleChange} value={register.password} name="password" placeholder="Senha" type="password" />}
        {loading === true ? <input disabled data-test="user-name-input" required onChange={handleChange} value={register.name} name="name" placeholder="Nome" type="text" /> : <input data-test="user-name-input" required onChange={handleChange} value={register.name} name="name" placeholder="Nome" type="text" />}
        {loading === true ? <input disabled data-test="user-image-input" required onChange={handleChange} value={register.image} name="image" placeholder="Foto" type="url" /> : <input data-test="user-image-input" required onChange={handleChange} value={register.image} name="image" placeholder="Foto" type="url" />}

        {loading === false ? <button data-test="signup-btn">Cadastrar</button> :
          <button data-test="signup-btn" disabled>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#FFF"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </button>}
      </Form>
      <Link to={"/"}>
        <LogIn data-test="login-link"><p>Já tem uma conta? Faça o login!</p></LogIn>
      </Link>
    </Size>
  );
}

const Size = styled.div`
  width:375px;
  height:667px;
  background-color:#FFF;
`;
const LogoText = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  img{
      margin-top:60px;
  }
  p{
    width: 180px;
    height: 86px;

    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 69px;
    line-height: 86px;

    text-align: center;

    color: #126BA5;
  }
`;
const Form = styled.form`  
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  margin-top:33px;

  input{
    cursor: pointer;

    box-sizing:border-box;

    width: 303px;
    height: 45px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    margin-bottom:6px;

    color: #000;
  }
  button{
    appearance:none;
    border-width: none;
    border-style: none;
    border-color: none;
    border-image: none;
    display:flex;
    justify-content:center;
    align-items:center;


    width: 303px;
    height: 45px;

    background: #52B6FF;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #FFFFFF;
    cursor: pointer;

  }
`;
const LogIn = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;

  margin-top:25px;

  cursor: pointer;

  p{
    width: 232px;
    height: 17px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    color: #52B6FF;
  }
`