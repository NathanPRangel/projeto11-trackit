import axios from "axios"
import { useEffect, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/logo.png"

export default function Cadastro() {
    const [email, setEmail] = useState([]);
    const [senha, setSenha] = useState([]);
    const [nome, setNome] = useState([]);
    const [foto, setFoto] = useState([]);
    const [trancar, setTrancar] = useState(false);

    useEffect(()=>{
    setTrancar(false);
    },[])
    
    const navigate=useNavigate();

    function cadastrar(e) {
        e.preventDefault();
        setTrancar(true);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        {
            email: email,
            name: nome,
            image: foto,
            password: senha
         })
        .then(res=>navigate("/"))
        .catch(err=>{
            alert(err.response.data.message)
            setTrancar(false);
        })
    }

    return (
        <CadastroContainer>
            <img src={logo} alt="logo" />
            <form onSubmit={cadastrar}>
                <input disabled={trancar? true:false} type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                <input disabled={trancar? true:false} type="password" placeholder="senha" onChange={(e)=>setSenha(e.target.value)}/>
                <input disabled={trancar? true:false} type="text" placeholder="nome" onChange={(e)=>setNome(e.target.value)}/>
                <input  disabled={trancar? true:false} placeholder="foto" onChange={(e)=>setFoto(e.target.value)}/>
                <button disabled={trancar? true:false} type="submit">{trancar? <ThreeDots
                height="15"
                width="340"
                color="white"
            />:"Cadastrar"}</button>
            </form>
            <StyledLink to="/">
                <p>Já tem uma conta? Faça login!</p>
            </StyledLink>
        </CadastroContainer>
    )
}

const CadastroContainer = styled.div`
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
