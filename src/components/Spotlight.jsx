import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Bg1 from "../assets/bg-1.jpg";
import Bg2 from "../assets/bg-2.jpg";
import Bg3 from "../assets/bg-3.jpg";

const SlideContainer = styled.div`
  width: 100%;
  height: 500px;
`;

const SlideEffect = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  // justify-content: center;
  background-size: cover;
  background-position: center;
`;

const SlideText = styled.div`
  line-height:4rem;
  padding-left:5%;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 5px;
`;

const Slideh5 = styled.h5`
  color: white;
 `;

const Slideh1 = styled.h1`
  color: white;
 `;

const Slidep = styled.p`
font-weight: 500;
`;

const Slidebutton = styled.button`
background-color: #fff;
border-radius:5px;
font-size:.9rem;
font-weight:600;
padding:3% 5%;
border:none;
width:50%;
`;

function Spotlight() {
  const images = [Bg1, Bg2, Bg3];
  return (
    <Slide>
      <SlideContainer>
        <SlideEffect style={{ backgroundImage: `url(${images[0]})` }}>
          <SlideText>
            <Slideh5>T-shirt / Tops</Slideh5>
            <Slideh1>Summer <br />Value Pack</Slideh1>
            <Slidep>cool / colorful / comfy</Slidep>
            <Slidebutton>Shop Now</Slidebutton>
          </SlideText>
        </SlideEffect>
      </SlideContainer>
      <SlideContainer>
        <SlideEffect style={{ backgroundImage: `url(${images[1]})` }}>
        <SlideText>
            <Slideh5>T-shirt / Tops</Slideh5>
            <Slideh1>Summer <br />Value Pack</Slideh1>
            <Slidep>cool / colorful / comfy</Slidep>
            <Slidebutton>Shop Now</Slidebutton>
          </SlideText>
        </SlideEffect>
      </SlideContainer>
      <SlideContainer>
        <SlideEffect style={{ backgroundImage: `url(${images[2]})` }}>
        <SlideText>
            <Slideh5>T-shirt / Tops</Slideh5>
            <Slideh1>Summer <br />Value Pack</Slideh1>
            <Slidep>cool / colorful / comfy</Slidep>
            <Slidebutton>Shop Now</Slidebutton>
          </SlideText>
        </SlideEffect>
      </SlideContainer>
    </Slide>
  );
}

export default Spotlight;
