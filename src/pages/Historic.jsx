import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Historic() {
  return (
    <Size>
      <Header />
      <Head>
        <h1>Histórico</h1>
      </Head>
      <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
      <Footer />
    </Size>
  );
}

const Size = styled.div`
  width:375px;
`;
const Head = styled.div`
  margin-top:28px;
  margin-right:22px;
  margin-bottom:17px;
  margin-left:15px;

  h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;

    color: #126BA5;
  }
`;
const Text = styled.p`
  margin-right:22px;
  margin-left:15px;

  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;

  color: #666666;
`;