import axios from "axios";
import React, { useEffect, useState } from "react"
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/logo.png"
import {  useLogin } from "../context";

export default function Home() {

    const [loginEmail,setLoginEmail]=useState([]);
    const [loginSenha,setLoginSenha]=useState([]);
    const [trancarLogin, setTrancarLogin] = useState(false);
    const navigate=useNavigate()
    const {usuario,setUsuario}=useLogin()

    useEffect(()=>{
    setTrancarLogin(false);
    },[])
    // console.log(usuario)
    function login(e){  
        e.preventDefault();
        setTrancarLogin(true);

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{
            email: loginEmail,
            password: loginSenha
        })
        .then(res=>{
            //console.log(res.data);
            setUsuario(res.data);
            navigate("/hoje");
        })
        .catch(err=>{
            alert(err.response.data.message);
            setTrancarLogin(false);
        })
    }
    
    return (
        <HomeContainer>
            <img src={logo} alt="logo" />
            <form onSubmit={login}>
                <input data-test="email-input" disabled={trancarLogin? true:false} type="email" placeholder="email" onChange={(e)=>setLoginEmail(e.target.value)}/>
                <input data-test="password-input" disabled={trancarLogin? true:false} type="password" placeholder="senha" onChange={(e)=>setLoginSenha(e.target.value)}/>
                <button data-test="login-btn" disabled={trancarLogin? true:false} type="submit">{trancarLogin? <ThreeDots
                height="15"
                width="340"
                color="white"
            />:"Entrar"}</button>
            </form>
            <StyledLink to="/cadastro" data-test="signup-link" >
                <p>Não tem uma conta? Cadastre-se!</p>
            </StyledLink>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 32px;
padding-top: 68px;
img{
    height: 178px;
    width: 180px;
}
form{
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 25px;
    input{
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #d4d4d4;
        font-size: 20px;
        font-weight: 400;
    }
    button{
        width: 303px;
        height: 45px;
        background-color: #52b6ff;
        border-radius: 5px;
        border: none;
        color: white;
        font-size: 21px;
        font-weight: 400;
    }
}
p{
    color: #52b6ff;
    font-size: 14px;
    font-weight: 400;
}
`
const StyledLink = styled(Link)`
    text-decoration-color: #52b6ff;
`