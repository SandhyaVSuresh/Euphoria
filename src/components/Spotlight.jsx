import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Bg1 from "../assets/bg-1.jpg";
import Bg2 from "../assets/img1.png";
import Bg3 from "../assets/img2.jpeg";

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
  line-height: 4rem;
  padding-left: 5%;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 5px;
`;

const Slideh5 = styled.h5`
  color: white;
  @media (max-width: 800px) {
    background: rgba(178, 178, 178, 0.5);
    padding-left:10px;
    margin-bottom:10px;
    border-radius:30px;
    padding-right:10px;
  }
    @media (max-width: 400px) {
  font-size: 1rem;
}
`;

const Slideh1 = styled.h1`
  color: white;
  @media (max-width: 800px) {
    background: rgba(178, 178, 178, 0.5);
    padding-left:10px;
    padding-right:10px;
    border-radius:30px;
    margin-bottom:10px;
  } 
    @media (max-width: 400px) {
  font-size: 2.5rem;
}
`;

const Slidep = styled.p`
  font-weight: 500;
  @media (max-width: 800px) {
    background: rgba(178, 178, 178, 0.5);
    padding-left:10px;
    margin-bottom:10px;
    padding-right:10px;
    border-radius:30px;
  }
     @media (max-width: 400px) {
  font-size: 1rem;
}
`;

const Slidebutton = styled.button`
  background-color: #fff;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 3% 5%;
  border: none;
  width: 50%;
  @media (max-width: 400px) {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 3% 4%;
  width: 40%;
  }
`;

function Spotlight() {
  const images = [Bg1, Bg2, Bg3];
  return (
    <Slide>
      <SlideContainer>
        <SlideEffect style={{ backgroundImage: `url(${images[0]})` }}>
          <SlideText>
            <Slideh5>T-shirt / Tops</Slideh5>
            <Slideh1>
              Summer <br />
              Value Pack
            </Slideh1>
            <Slidep>cool / colorful / comfy</Slidep>
            <Slidebutton>Shop Now</Slidebutton>
          </SlideText>
        </SlideEffect>
      </SlideContainer>
      <SlideContainer>
        <SlideEffect style={{ backgroundImage: `url(${images[1]})` }}>
          <SlideText>
            <Slideh5>T-shirt / Tops</Slideh5>
            <Slideh1>
              Summer <br />
              Value Pack
            </Slideh1>
            <Slidep>cool / colorful / comfy</Slidep>
            <Slidebutton>Shop Now</Slidebutton>
          </SlideText>
        </SlideEffect>
      </SlideContainer>
      <SlideContainer>
        <SlideEffect style={{ backgroundImage: `url(${images[2]})` }}>
          <SlideText>
            <Slideh5>T-shirt / Tops</Slideh5>
            <Slideh1>
              Summer <br />
              Value Pack
            </Slideh1>
            <Slidep>cool / colorful / comfy</Slidep>
            <Slidebutton>Shop Now</Slidebutton>
          </SlideText>
        </SlideEffect>
      </SlideContainer>
    </Slide>
  );
}

export default Spotlight;
