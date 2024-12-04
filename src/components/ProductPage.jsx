import styled from "styled-components";
import productData from "./productData.json";
import CommentIcon from "../assets/Icon.svg";
import IconCart from "../assets/IconCart.svg";
import CreditCard from "../assets/creditCard.svg";
import FreeShipping from "../assets/FreeShipping.svg";
import Truck from "../assets/truckIcon.svg";
import SizeFit from "../assets/SizeFit.svg";
import RightArrow from "../assets/arrow-right.svg";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./include/Navbar";
import Footer from "./include/Footer";
import SimilarProducts from "./SimilarProducts";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
  font-family: Arial, sans-serif;
`;

const Breadcrumb = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 10rem;
  height: auto;
  margin:auto @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 9rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ImageSection = styled.div`
  display: flex;
  gap: 1rem;
  background-color: #f6f6f6;
  padding-left: 5rem;
  width: 80%;
  @media (max-width: 900px) {
    padding-left: 1rem;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 768px) {
    padding-left: 0;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    padding-top: 10px;
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    order: 1;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 768px) {
    order: 2;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 10px;
  }
`;
const ThumbnailDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 62px;
  height: 62px;
  border: ${(props) => (props.$isSelected ? "0.76px solid #3C4242" : "none")};
`;
const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border-color: 1px solid #000;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  width: 500px;
  margin-bottom: 10px;
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;
const Price = styled.div`
  border: 1px solid #000;
  color: #000;
  padding: 10px 20px;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.9rem;
  }
`;

const SizesContainer = styled.div`
  margin: 15px 0;
`;
const Sizeh3 = styled.h3``;
const SizeLink = styled.a`
  color: gray;
  margin-left: 30px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none;
`;
const TextSize = styled.div`
  display: flex;
  gap: 1rem;
`;
const SizeButton = styled.button`
  margin: 5px 10px 5px 0;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  color: ${(props) => (props.$isSelected ? "#fff" : "")};
  background-color: ${(props) => (props.$isSelected ? "#3C4242" : "#f0f0f0")};
  &:hover {
    background-color: #ddd;
  }
`;
const Button = styled.button`
  background-color: #8a33fc;
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #0056b3;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 20px;
  }
`;
const Description = styled.div`
  margin-top: 30px;
  width: 90%;
  @media (max-width: 900px) {
    margin-top: 20px;
    padding: 1rem;
    width: 90%;
  }
`;
const DescriptionHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
const DescriptionText = styled.p`
  font-size: 1rem;
  color: #6c757d;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  background-color: #f6f6f6;
  padding: 1rem;
  border-radius: 10px;
  & > div {
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }

  & > div:nth-child(3n) {
    border-right: none;
  }

  & > div:nth-last-child(-n + 3) {
    border-bottom: none;
  }
  @media (max-width: 768px) {
    // grid-template-columns: 1fr;
    // gap: 1rem;
  }
`;
const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.2rem;
  color: #333;
  gap: 0.7rem;
`;
const FearureHead = styled.p`
  font-size: 0.8rem;
  color: gray;
`;
const FearureContent = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
`;
const SmallGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`;
const Comments = styled.p`
  display: flex;
  gap: 0.4rem;
`;
const Icons = styled.img``;
const RatingImg = styled.img`
  width: 15px;
`;
const RateingDiv = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const ColorsContainer = styled.div`
  margin: 15px 0;
`;
const ColorsDiv = styled.div`
  display: flex;
  gap: 1rem;
`;
const ColorDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: ${(props) => (props.$isSelected ? "1px solid #ddd" : "none")};
`;
const ColorSpan = styled.div`
  display: inline-block;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const InfoBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media (max-width: 525px) {
    margin: 5%;
  }
`;
const ContentDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const IconDiv = styled.div`
  background-color: #f6f6f6;
  padding: 1rem;
  border-radius: 100%;
`;
const Textp = styled.p`
  margin-top: 5px;
`;
const LeftHead = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
  @media (max-width: 768px) {
    gap: 1rem;
    justify-content: space-around;
  }
`;
const HeadButton = styled.button`
  background: none;
  border: none;
  display: flex;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px 0;
  position: relative;
  color: ${(props) => (props.$isSelected ? "#333" : "#aaa")};
  border-bottom: ${(props) =>
    props.$isSelected ? "2px solid #fff" : "2px solid transparent"};
  &:focus {
    outline: none;
  }
  transition: color 0.3s, border-bottom 0.3s;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 50px;
    height: 2px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.$isSelected ? "#000" : "transparent"};
    transition: background-color 0.3s;
  }
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
  @media (max-width: 363px) {
    font-size: 0.7rem;
  }
`;
const UCountSpan = styled.span`
  background-color: #8a33fc;
  font-size: 0.7rem;
  margin-left: 10px;
  color: white;
  padding: 3px 4px;
  border-radius: 2px;
  display: block;
  width: fit-content;
  @media (max-width: 538px) {
    display: none;
  }
`;
const QCountSpan = styled.span`
  background-color: #000;
  font-size: 0.7rem;
  margin-left: 10px;
  color: white;
  padding: 3px 4px;
  border-radius: 2px;
  display: block;
  width: fit-content;
  @media (max-width: 538px) {
    display: none;
  }
`;
const DiscriptionHead = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const LineDiv = styled.div`
  width: 6px;
  height: 30px;
  border-radius: 50px;
  background-color: #8a33fc;
`;
const DiscriptionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;
const LeftDiv = styled.div``;
const RightDiv = styled.div``;

const ProductPage = () => {
  const { id } = useParams();
  const topContainer = useRef();
  const selectedProduct = productData.find((item) => item.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [selectedImage, setSelectedImage] = useState(selectedProduct.img);
  const [selectedSize, setSelectedSize] = useState(null);

  const getImage = (imgName) => {
    return new URL(`../assets/${imgName}`, import.meta.url).href;
  };
  useEffect(() => {
    if (selectedProduct) {
      setSelectedImage(selectedProduct.img);
      setSelectedColor(null);
      setSelectedSize(null);
      setActiveTab(1);
    }
    topContainer.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [selectedProduct]);
  const renderStars = (rating, starImages) => {
    const stars = [];
    const [fullStar, unfilledStar, halfStar] = starImages;

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<RatingImg key={i} src={getImage(fullStar)} alt="star" />);
      } else if (rating >= i - 0.5) {
        stars.push(
          <RatingImg key={i} src={getImage(halfStar)} alt="half-star" />
        );
      } else {
        stars.push(
          <RatingImg key={i} src={getImage(unfilledStar)} alt="unfilled-star" />
        );
      }
    }
    return stars;
  };
  const handleThumbnailClick = (img) => {
    setSelectedImage(img);
  };
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
      <div ref={topContainer}></div>
      <Navbar />
      <Wrapper>
        <MainContainer>
          <ImageSection>
            <ThumbnailContainer>
              {selectedProduct.thumbnailImgs?.map((img, index) => (
                <ThumbnailDiv
                  key={index}
                  onClick={() => handleThumbnailClick(img)}
                  $isSelected={selectedImage === img}
                >
                  <Thumbnail
                    src={getImage(img)}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </ThumbnailDiv>
              ))}
            </ThumbnailContainer>
            <MainImage
              src={getImage(selectedImage)}
              alt={selectedProduct.title}
            />
          </ImageSection>

          <InfoSection>
            <Breadcrumb>{selectedProduct.breadcrumb}</Breadcrumb>
            <Title>{selectedProduct.title}</Title>
            <SmallGroup>
              <RateingDiv>
                {renderStars(
                  selectedProduct.rating,
                  selectedProduct.ratingStarImg
                )}
              </RateingDiv>
              <Comments>
                <Icons src={CommentIcon} />
                {selectedProduct.totalReviews} comments
              </Comments>
            </SmallGroup>
            <SizesContainer>
              <TextSize>
                <Sizeh3>Select Size</Sizeh3>
                <SizeLink>
                  Size Guide <Icons src={RightArrow} width="10px" />
                </SizeLink>
              </TextSize>
              {selectedProduct.sizes.map((size) => (
                <SizeButton
                  key={size}
                  $isSelected={selectedSize === size}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </SizeButton>
              ))}
            </SizesContainer>
            <ColorsContainer>
              <h3>Colors Available:</h3>
              <ColorsDiv>
                {selectedProduct.colors.map((color) => (
                  <ColorDiv
                    key={color}
                    $isSelected={selectedColor === color}
                    onClick={() => setSelectedColor(color)}
                  >
                    <ColorSpan color={color} />
                  </ColorDiv>
                ))}
              </ColorsDiv>
            </ColorsContainer>
            <SmallGroup>
              <Button>
                <Icons src={IconCart} /> Add to Cart
              </Button>
              <Price>{selectedProduct.price}</Price>
            </SmallGroup>
            <hr />
            <InfoBottom>
              <ContentDiv>
                <IconDiv>
                  <Icons src={CreditCard} />
                </IconDiv>
                <Textp>Secure payment</Textp>
              </ContentDiv>
              <ContentDiv>
                <IconDiv>
                  <Icons src={SizeFit} />
                </IconDiv>
                <Textp>Size & Fit</Textp>
              </ContentDiv>
              <ContentDiv>
                <IconDiv>
                  <Icons src={Truck} />
                </IconDiv>
                <Textp>Free Shipping</Textp>
              </ContentDiv>
              <ContentDiv>
                <IconDiv>
                  <Icons src={FreeShipping} />
                </IconDiv>
                <Textp>Free Shipping & Returns</Textp>
              </ContentDiv>
            </InfoBottom>
          </InfoSection>
        </MainContainer>

        <Description>
          <DiscriptionHead>
            <LineDiv></LineDiv>
            <DescriptionHeading>Product Description</DescriptionHeading>
          </DiscriptionHead>
          <DiscriptionContent>
            <LeftDiv>
              <LeftHead role="tablist" aria-label="My Tabs">
                <HeadButton
                  role="tab"
                  id="tab-1"
                  aria-selected={activeTab === 1}
                  aria-controls="tabpanel-1"
                  tabIndex={activeTab === 1 ? "0" : "-1"}
                  $isSelected={activeTab === 1}
                  onClick={() => handleTabClick(1)}
                >
                  Description
                </HeadButton>
                <HeadButton
                  role="tab"
                  id="tab-2"
                  aria-selected={activeTab === 2}
                  aria-controls="tabpanel-2"
                  tabIndex={activeTab === 2 ? "0" : "-1"}
                  $isSelected={activeTab === 2}
                  onClick={() => handleTabClick(2)}
                >
                  User comments <UCountSpan>27</UCountSpan>
                </HeadButton>
                <HeadButton
                  role="tab"
                  id="tab-3"
                  aria-selected={activeTab === 3}
                  aria-controls="tabpanel-3"
                  tabIndex={activeTab === 3 ? "0" : "-1"}
                  $isSelected={activeTab === 3}
                  onClick={() => handleTabClick(3)}
                >
                  Question & Answer <QCountSpan>04</QCountSpan>
                </HeadButton>
              </LeftHead>

              {activeTab === 1 && (
                <DescriptionText
                  id="tabpanel-1"
                  role="tabpanel"
                  aria-labelledby="tab-1"
                  tabIndex="0"
                >
                  {selectedProduct.description}
                </DescriptionText>
              )}
              {activeTab === 2 && (
                <DescriptionText
                  id="tabpanel-2"
                  role="tabpanel"
                  aria-labelledby="tab-2"
                  tabIndex="0"
                >
                  User comments go here.
                </DescriptionText>
              )}
              {activeTab === 3 && (
                <DescriptionText
                  id="tabpanel-3"
                  role="tabpanel"
                  aria-labelledby="tab-3"
                  tabIndex="0"
                >
                  Questions & Answers go here.
                </DescriptionText>
              )}
            </LeftDiv>
            <RightDiv>
              <FeaturesList>
                {Object.entries(selectedProduct.features).map(
                  ([key, value]) => (
                    <FeatureItem key={key}>
                      <FearureHead>{key}</FearureHead>{" "}
                      <FearureContent>{value}</FearureContent>
                    </FeatureItem>
                  )
                )}
              </FeaturesList>
            </RightDiv>
          </DiscriptionContent>
        </Description>
      </Wrapper>
      <SimilarProducts currentProductId={selectedProduct.id} />
      <Footer />
    </>
  );
};
export default ProductPage;
