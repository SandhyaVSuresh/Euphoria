import styled from "styled-components";
import { Link } from "react-router-dom";
import arrowRight from "../assets/ExploreArrow.png";
import data from "./productData.json";
import { useNavigate } from "react-router-dom";
import Navbar from "./include/Navbar";
import Footer from "./include/Footer";

const Container = styled.div`
  padding: 3% 7%;
  margin-bottom: 3rem;
  @media (max-width: 400px) {
    margin-top: 2rem;
  }
`;
const NewHeadDiv = styled.div`
  padding-bottom: 20px;
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
  justify-content: center;
`;

const NewCardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
  @media (max-width: 400px) {
    gap: 10px;
  }
`;
const NewCardDiv = styled.div`
  padding-top: 3%;
  width: 250px;
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
  height: 80%;
  @media (max-width: 400px) {
    width: 100%;
    height: 80%;
  }
`;

const CardTitleH3 = styled.h3`
  padding-top: 3%;
  color: rgba(60, 66, 66, 1);
  font-weight: 500;
  font-size: 1rem;
  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;
const NewCardLinkDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardLink = styled(Link)`
  color: #7f7f7f;
  font-size: 0.9rem;
  text-decoration: none;
  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`;
const ArrowRightImg = styled.img`
  cursor: pointer;
  width: 9%;
  height: 4%;
`;

function Womens() {
  const categoriesForWomen = data.filter((item) => item.gender === "Women");
  const navigate = useNavigate();
  const getImage = (imgName) => {
    return new URL(`../assets/${imgName}`, import.meta.url).href;
  };
  const handleCardClick = (id) => {
    navigate(`/Product/${id}`);
  };
  return (
    <>
      <Navbar />
      <Container>
        <NewHeadDiv>
          <SideLineDiv></SideLineDiv>
          <NewTitleH2>Categories For Women</NewTitleH2>
        </NewHeadDiv>
        <NewBodyDiv>
          <NewCardsDiv>
            {categoriesForWomen.map((item) => (
              <NewCardDiv
                key={item.id}
                onClick={() => handleCardClick(item.id)}
              >
                <CardImg src={getImage(item.img)} />
                <CardTitleH3>{item.title}</CardTitleH3>
                <NewCardLinkDiv>
                  <CardLink to="/">Explore Now</CardLink>
                  <ArrowRightImg src={arrowRight} />
                </NewCardLinkDiv>
              </NewCardDiv>
            ))}
          </NewCardsDiv>
        </NewBodyDiv>
      </Container>
      <Footer />
    </>
  );
}

export default Womens;
