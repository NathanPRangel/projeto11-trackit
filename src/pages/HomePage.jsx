import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import { ThreeDots } from "react-loader-spinner";
import { useState, useContext } from "react";
import { UserDataContext } from "../context/UserDataContext";

export default function HomePage() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setUserData, setToken } = useContext(UserDataContext);
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    const newLogin = { ...login };
    newLogin[event.target.name] = event.target.value;
    setLogin(newLogin);
  }

  return (
    <Size>
      <LogoText>
        <img src={Logo} alt="" />
      </LogoText>
      <Form onSubmit={event => {
        event.preventDefault();
        const URLPostLogin = `${import.meta.env.VITE_API_URL}/auth/login`;
        let post = login;
        const promise = axios.post(URLPostLogin, post);
        setLoading(true)

        promise.then(resposta => {
          setLoading(false)
          localStorage.setItem("token", resposta.data.token);
          localStorage.setItem("userData", JSON.stringify(resposta.data));
          setToken(resposta.data.token);
          setUserData(resposta.data);
          navigate("/hoje");
        });

        promise.catch(erro => {
          setLoading(false);
          alert(erro.response.data.message);
        })


      }}>
        {loading === true ? <input disabled data-test="email-input" required onChange={handleChange} value={login.email} name="email" placeholder="E-mail" type="email" /> : <input data-test="email-input" required onChange={handleChange} value={login.email} name="email" placeholder="E-mail" type="email" />}
        {loading === true ? <input disabled data-test="password-input" required onChange={handleChange} value={login.password} name="password" placeholder="Senha" type="password" /> : <input data-test="password-input" required onChange={handleChange} value={login.password} name="password" placeholder="Senha" type="password" />}

        {loading === false ? <button data-test="login-btn">Entrar</button> : <button disabled><ThreeDots data-test="signup-btn"
          height="80"
          width="80"
          radius="9"
          color="#FFF"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        /></button>}

      </Form>
      <Link to={"/cadastro"}>
        <SignUp data-test="signup-link"><p>Não tem uma conta? Cadastre-se!</p></SignUp>
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

    cursor: pointer;

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

  }
`;
const SignUp = styled.div`
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
