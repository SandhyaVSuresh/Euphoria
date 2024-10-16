import styled from "styled-components";
import bg4 from "../assets/bg-4.jpg";
import bg5 from "../assets/bg-5.jpg";

const Container = styled.div`
  padding: 3% 7%;
  display: flex;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${bg4});
  border-bottom-left-radius: 10px;
  width: 90%;
  height: 101vh;
  overflow: hidden;
  color: #fff;
  padding: 0 5%;
  @media (max-width: 600px) {
    height: 70vh;
  }
  @media (max-width: 400px) {
    height: 60vh;
  }
`;
// const LeftImg =styled.img`
// width:100%;
// height:90%;
// // position: relative;
// z-index:-1;
// `;
const HeadH2 = styled.h2`
  font-size: 2rem;
  padding-bottom: 1.5rem;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 400px) {
    font-size: 0.9rem;
    padding-bottom: 1rem;
  }
`;
const ParaP = styled.p`
  font-weight: 200;
  padding-bottom: 1.5rem;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media (max-width: 400px) {
    font-size: 0.5rem;
    padding-bottom: 1rem;
  }
`;
const ShopButton = styled.button`
  width: fit-content;
  padding: 2% 8%;
  color: #000;
  background: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
    @media (max-width: 600px) {
    font-size: .7rem;
  }
  @media (max-width: 400px) {
    font-weight: 600;
    font-size: 0.5rem;
    padding: 2% 4%;
  }
`;
const RightContainer = styled.div`
  width: 100%;
  height: 101vh;
  overflow: hidden;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (max-width: 600px) {
    height: 70vh;
  }
  @media (max-width: 400px) {
    height: 60vh;
  }
`;
const RightImg = styled.img`
  width: 100%;
  height: 101vh;
  @media (max-width: 600px) {
    height: 70vh;
  }
  @media (max-width: 400px) {
    height: 60vh;
  }
`;
function FasionBetter() {
  return (
    <Container>
      <LeftContainer>
        {/* <LeftImg src={bg4} /> */}
        <HeadH2>WE MADE YOUR EVERYDAY FASHION BETTER!</HeadH2>
        <ParaP>
          In our journey to improve everyday fashion, euphoria presents EVERYDAY
          wear range - Comfortable & Affordable fashion 24/7
        </ParaP>
        <ShopButton>Shop Now</ShopButton>
      </LeftContainer>
      <RightContainer>
        <RightImg src={bg5} />
      </RightContainer>
    </Container>
  );
}

export default FasionBetter;
