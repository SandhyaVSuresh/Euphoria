import styled from "styled-components";
import {Link} from "react-router-dom"
import arrowRight from "../assets/ExploreArrow.png";
import img1 from "../assets/img-5.jpg";
import img2 from "../assets/img-6.jpg";
import img3 from "../assets/img-7.jpg";
import img4 from "../assets/img-8.jpg";
import img5 from "../assets/img-9.jpg";
import img6 from "../assets/img-1.jpg";
import img7 from "../assets/img-10.jpg";
import img8 from "../assets/img-11.jpg";

const Container = styled.div`
  padding: 3% 7%;
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
display:flex;
flex-wrap:wrap;
justify-content:space-around;
// padding-top:5%;
`;
const NewCardDiv = styled.div`
padding-top:3%;
`;
const CardImg = styled.img`
  width: 250px;
  height: 340px;
`;
const CardTitleH3 = styled.h3`
  padding-top: 3%;
  color: rgba(60, 66, 66, 1);
  font-weight: 500;
  font-size: 1rem;
`;
const NewCardLinkDiv = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`;
const CardLink = styled(Link)`
color: #7F7F7F;
font-size:.9rem;
text-decoration:none;
`;
const ArrowRightImg = styled.img`
  cursor: pointer;
  width:9%;
  height:4%;
`;

const items = [
  {src:img1, title:"Shirts"},
  {src:img2, title:"Printed T-Shirt"},
  {src:img3, title:"Plain T-Shirt"},
  {src:img4, title:"Polo T-Shirt"},
  {src:img5, title:"Hoodies & Sweatshirt"},
  {src:img6, title:"jeans"},
  {src:img7, title:"Activewear"},
  {src:img8, title:"Boxers"},
]

function CategoriesForMen() {
  return (
    <Container>
      <NewHeadDiv>
        <SideLineDiv></SideLineDiv>
        <NewTitleH2>Categories For Men</NewTitleH2>
      </NewHeadDiv>
      <NewBodyDiv>
        <NewCardsDiv>
          {items.map((item,index)=>(
            <NewCardDiv key={index}>
              <CardImg src={item.src} />
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
  );
}

export default CategoriesForMen;
