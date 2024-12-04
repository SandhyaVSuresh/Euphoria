import styled from "styled-components";
import wishlist from "../assets/heart.svg";
import redWishlist from "../assets/red-heart-icon.svg";
import { useState } from "react";
import data from "./productData.json";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Container = styled.div`
  padding: 3% 5%;
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
  width: 6px;
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
  // align-items:center;
  width:100%;
  margin:auto;
  justify-content: space-around;
  gap: 2rem;
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;
const NewCardDiv = styled.div`
  position: relative;
  padding-top: 3%;
  width: 250px;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 35%;
    height: 40%;
    padding-top: 10px;
    margin:0 1.5rem;
  }
  @media (max-width: 450px) {
    width: 100%;
    height: fit-content;
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
  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;
const NewCardTextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width:768px){
  display:flex;
  flex-wrap:wrap;
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


function SimilarProducts({ currentProductId }) {
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

  const similarProducts = data.filter(
    (item) =>
      item.id !== currentProductId &&
      !item.isFeedback &&
      item.heading.toLowerCase() !== "feedback"
  );

  const getRandomItems = (items, count) => {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomSimilarProducts = getRandomItems(similarProducts, 4);

  return (
    <Container>
      <NewHeadDiv>
        <SideLineDiv></SideLineDiv>
        <NewTitleH2>Similar Products</NewTitleH2>
      </NewHeadDiv>
      <NewBodyDiv>
        <NewCardsDiv>
          
            {randomSimilarProducts.map((item, index) => (
              <NewCardDiv
                key={item.id}
                onClick={() => handleCardClick(item.id)}
              >
                <CardImg src={getImage(item.img)} alt={item.title} />
                <HeartImg
                  src={clickedItems[index] ? redWishlist : wishlist}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleHeart(index);
                  }}
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

SimilarProducts.propTypes = {
  currentProductId: PropTypes.number,
};
export default SimilarProducts;
