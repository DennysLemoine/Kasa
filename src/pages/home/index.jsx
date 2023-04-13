import '../../styles/App.css';
import styled from "styled-components";
import homeImg from "../../assets/Paysage01.png"
import fonts from "../../utils/styles/fonts";
import Card from "../../components/card";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 223px;
  border-radius: 25px;
  background-image: url(${homeImg});
  background-size: cover;
  background-position: center 50%;
  background-blend-mode: darken;
  background-color: rgba(0, 0, 0, 0.2);
`

const StyledImg = styled.img`
  border-radius: 25px;
  object-fit: cover;
  background-blend-mode: darken;
  background-color: rgba(0, 0, 0, 0.5);
`

const StyledH1 = styled.h1`
  color: white;
  font-family: ${fonts.primary.name};
  font-weight: 400;
  font-size: 3rem;
`

const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  margin-top: 45px;
  width: 100%;
  height: 830px;
  border-radius: 25px;
  background-color: #f6f6f6;
`

function Home() {
    return (
        <div>
            <StyledDiv>
                <StyledH1>Chez vous, partout et ailleurs</StyledH1>
            </StyledDiv>
            <ContainerCards>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </ContainerCards>
        </div>
    )
}

export default Home;
