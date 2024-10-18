import styled from "styled-components";
import img3 from "../assets/levis.jpg";
import img1 from "../assets/nike.jpg";
import img5 from "../assets/puma.jpg";
import img4 from "../assets/USPA.jpg";
import img2 from "../assets/image 18.png";

const Container = styled.div`
  padding: 5% 10%;
  margin: 3% 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align:center;
  background: linear-gradient(500deg, #3c4242 50%, #002f4b 80%);
  border-radius: 10px;
  @media (max-width: 700px) {
    padding: 5% 0%;
    // margin: 3% 0%;
  }
`;
const Headh1 = styled.h1`
  padding-bottom: 1%;
  color: white;
  @media(max-width:400px){
  font-size:1.5rem;
  }
`;
const ParaText = styled.p`
  padding-bottom: 2%;
  color: white;
  @media(max-width:400px){
  font-size:.9rem;
  }
`;
const SpanTag = styled.span`
  color: yellow;
`;
const BrandImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 800px) {
  justify-content: center;
    flex-wrap: wrap;
    width: 80%;
  }
`;
const BrandImg = styled.img`
  background: #fff;
  width: 110vw;
  height: 5vh;
  margin: 0 3%;
  padding: 1%;
  border-radius: 5px;
  @media (max-width: 800px) {
    margin: 1%;
    width:20vw;
  }
  @media (max-width: 500px) {
    width: 20vw;
  }
  @media(max-width:400px){
    width: 18vw;
  height: 7vh;
  }
`;
function BrandDeal() {
  return (
    <Container>
      <Headh1>Top Brands Deals</Headh1>
      <ParaText>
        {" "}
        Up To <SpanTag>60%</SpanTag> off on brands{" "}
      </ParaText>
      <BrandImgDiv>
        <BrandImg src={img1} />
        <BrandImg src={img2} />
        <BrandImg src={img3} />
        <BrandImg src={img4} />
        <BrandImg src={img5} />
      </BrandImgDiv>
    </Container>
  );
}

export default BrandDeal;
