import styled from "styled-components";
import wishlist from "../assets/heart.svg";
import redWishlist from "../assets/red-heart-icon.svg";
import { useState } from "react";
import data from "./productData.json";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 3% 7%;
  margin-bottom: 50px;
`;
const NewHeadDiv = styled.div`
  padding-bottom: 2%;
  display: flex;
  align-items: center;
`;
const SideLineDiv = styled.div`
  border-radius: 5px;
  background: rgba(138, 51, 253, 1);
  width: 5px;
  height: 35px;
`;
const NewTitleH2 = styled.h2`
  padding-left: 10px;
  color: rgba(60, 66, 66, 1);
`;
const NewBodyDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NewCardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  margin-bottom: 20px;
  @media (max-width: 400px) {
    gap: 10px;
    margin-bottom: 0px;
  }
`;
const NewCardDiv = styled.div`
  position: relative;
  padding-top: 3%;
  width: 250px;
  margin-bottom: 30px;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 45%;
    padding-top: 10px;
  }
  @media (max-width: 400px) {
    width: 45%;
    height: auto;
    padding-top: 10px;
  }
`;
const CardImg = styled.img`
  width: 100%;
  height: 90%;
  @media (max-width: 400px) {
    width: 100%;
    height: 80%;
  }
`;
const HeartImg = styled.img`
  background: #fff;
  padding: 2% 2%;
  border-radius: 50%;
  position: absolute;
  top: 45px;
  right: 10px;
  width: 19px;
  height: 20px;
  cursor: pointer;
  @media (max-width: 700px) {
    top: 20px;
  }
  @media (max-width: 400px) {
    top: 15px;
    width: 13px;
    height: 13px;
  }
`;
const CardTitleH3 = styled.h3`
  padding-top: 3%;
  color: rgba(60, 66, 66, 1);
  font-weight: 500;
  font-size: 1rem;
  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;
const NewCardTextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 465px) {
    text-align: center;
    flex-direction: column;
    justify-content: center;
  }
`;
const CardLink = styled.p`
  color: #7f7f7f;
  font-size: 0.9rem;
  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;
const TextDiv = styled.div``;
const Pricep = styled.p`
  background: #f6f6f6;
  padding: 10px 10px;
  font-weight: 550;
  color: #3c4242;
  border-radius: 8px;
  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`;

function Limelight() {
  const limelight = data.filter((item) => item.heading === "In The Limelight");
  const navigate = useNavigate();
  const getImage = (imgName) => {
    return new URL(`../assets/${imgName}`, import.meta.url).href;
  };
  const [clickedItems, setClickedItems] = useState({});
  const handleCardClick = (id) => {
    navigate(`/Product/${id}`);
  };
  const toggleHeart = (index) => {
    setClickedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Container>
      <NewHeadDiv>
        <SideLineDiv></SideLineDiv>
        <NewTitleH2>In The Limelight</NewTitleH2>
      </NewHeadDiv>
      <NewBodyDiv>
        <NewCardsDiv>
          {limelight.map((item, index) => (
            <NewCardDiv key={item.id} onClick={() => handleCardClick(item.id)}>
              <CardImg src={getImage(item.img)} alt={item.title} />
              <HeartImg
                src={clickedItems[index] ? redWishlist : wishlist}
                onClick={() => toggleHeart(index)}
                alt="wishlist icon"
              />
              <NewCardTextDiv>
                <TextDiv>
                  <CardTitleH3>{item.title}</CardTitleH3>
                  <CardLink>{item.brand}</CardLink>
                </TextDiv>
                <Pricep>{item.price}</Pricep>
              </NewCardTextDiv>
            </NewCardDiv>
          ))}
        </NewCardsDiv>
      </NewBodyDiv>
    </Container>
  );
}

export default Limelight;
