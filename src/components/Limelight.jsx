import styled from "styled-components";
import img1 from "../assets/img-16.jpg";
import img2 from "../assets/img-17.jpg";
import img3 from "../assets/img-18.jpg";
import img4 from "../assets/img-19.jpg";
import wishlist from "../assets/heart.svg";
import redWishlist from "../assets/red-heart-icon.svg";
import { useState } from "react";

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
  @media (max-width: 400px) {
    gap: 10px;
  }
`;
const NewCardDiv = styled.div`
  position: relative;
  padding-top: 3%;
  width: 250px;
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
   @media(max-width:700px){
  top: 20px;
  }
  @media(max-width:400px){
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
  @media(max-width:400px){
  font-size: .7rem;
  }
`;
const NewCardTextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardLink = styled.p`
  color: #7f7f7f;
  font-size: 0.9rem;@media(max-width:400px){
  font-size: .7rem;
  }
`;
const TextDiv = styled.div``;
const Pricep = styled.p`
  background: #f6f6f6;
  padding: 10px 10px;
  font-weight: 550;
  color: #3c4242;
  border-radius: 8px;@media(max-width:400px){
  font-size: .6rem;
  }
`;

const items = [
  { src: img1, title: "Black Sweetshirt", price: "$100", brand: "Hhanvi's Brand" },
  { src: img2, title: "Line Pattern", price: "$150", brand: "AS's Brand" },
  { src: img3, title: "Black Shorts", price: "$550", brand: "MM's Brand" },
  { src: img4, title: "Lavender Hoodie", price: "$375", brand: "Nike's Brand" },
];

function Limelight() {
  // State to track the clicked status for each item
  const [clickedItems, setClickedItems] = useState({});

  // Toggle heart click per item
  const toggleHeart = (index) => {
    setClickedItems((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the specific item clicked state
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
          {items.map((item, index) => (
            <NewCardDiv key={index}>
              <CardImg src={item.src} alt={item.title} />
              <HeartImg
                src={clickedItems[index] ? redWishlist : wishlist} // Change heart image based on clicked state
                onClick={() => toggleHeart(index)} // Pass index to toggle the correct heart
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
