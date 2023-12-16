import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from 'react';
import { UserDataContext } from "../context/UserDataContext";


export default function Header() {
  const { userData } = useContext(UserDataContext);

  function clearLocalStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
  }

  return (
    <>
      <Shadow />
      <Head data-test="header">
        <Link to={"/"}>
          <p onClick={clearLocalStorage}>TrackIt</p>
        </Link>
        <img data-test="avatar" src={userData.image} alt="Foto do usuario" />
      </Head>
    </>
  )
}


const Shadow = styled.div`
  width: 375px;
  height: 70px;
`;

const Head = styled.div`
  z-index:1;
  display:flex;
  justify-content:space-between;
  align-items:center;

  position:fixed;
  left:0px;
  top:0px;

  width: 375px;
  height: 70px;

  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  p{
    width: 97px;
    height: 49px;

    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;

    margin-left:15px;

    color: #FFFFFF;
  }
  img{
    width: 51px;
    height: 51px;

    border-radius: 98px;
    
    margin-right:15px;
  }
`