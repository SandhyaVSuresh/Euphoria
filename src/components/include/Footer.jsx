import styled, { keyframes } from "styled-components";
import img1 from "../../assets/facebook.svg";
import img2 from "../../assets/instagram.svg";
import img3 from "../../assets/twitter.svg";
import img4 from "../../assets/linkedin.svg";
import img5 from "../../assets/Group.png";
import img6 from "../../assets/PlayStoreImage.svg";

const waveAnimation = keyframes`
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 1500px; 
  }
`;

const Container = styled.div`
  background: linear-gradient(500deg, #3c4242 50%, #002f4b 80%);
  padding: 3% 7%;
  color: #fff;
  background-size: 200% 100%;
  animation: ${waveAnimation} 5s ease-in-out infinite;
  @media (max-width: 400px) {
    animation: ${waveAnimation} 8s ease-in-out infinite;
  }
`;
const TopDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const TopUl = styled.ul`
  list-style: none;
`;
const HeadingH5 = styled.h5`
  font-size: 1.3rem;
  font-weight: 500;
  padding-bottom: 20px;
`;
const List = styled.li`
  font-size: 0.8rem;
  padding-bottom: 15px;
`;

const BottomDiv = styled.div`
  padding: 3% 5%;
  display: flex;
  width: 90%;
`;
const BottomTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: sapce-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const BottomLeftDiv = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  gap: 1rem;
  @media (max-width: 800px) {
    width: 100%;
    justify-content: space-around;
  }
`;
const SocialImg = styled.img`
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  width: 20px;
  height: 20px;
`;
const BottomRightDiv = styled.div`
  width: 40%;
  @media (max-width: 800px) {
    width: 100%;
    padding-top: 30px;
    display: flex;
  }
`;
const Apph4 = styled.h4`
  font-size: 1.5rem;
  padding-bottom: 20px;
  @media (max-width: 800px) {
    border-right: 1px solid rgb(255, 255, 255, 0.1);
  }
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;
const Appsdiv = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 400px) {
    gap: 0.5rem;
  }
`;
const AppDiv = styled.div`
  display: flex;
  padding: 2%;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  @media (max-width: 800px) {
    border-right: 1px solid rgb(255, 255, 255, 0.1);
  }
`;
const AppImg = styled.img`
  @media (max-width: 400px) {
    width: 20px;
  }
`;
const Textp = styled.p`
  font-size: 0.7rem;
  @media (max-width: 400px) {
    font-size: 0.5rem;
  }
`;
const AppNamep = styled.span`
  font-size: 1.2rem @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;
function Footer() {
  return (
    <Container>
      <TopDiv>
        <TopUl className="hide">
          <HeadingH5>Need Help</HeadingH5>
          <List>Contact Us</List>
          <List>Track Order</List>
          <List>Returns & Refunds</List>
          <List>FAQ&apos;s</List>
          <List>Career</List>
        </TopUl>
        <TopUl className="hide">
          <HeadingH5>Company</HeadingH5>
          <List>About Us</List>
          <List>Euphoria Blog</List>
          <List>Euphoriastan</List>
          <List>Collaboration</List>
          <List>Media</List>
        </TopUl>
        <TopUl className="hide">
          <HeadingH5>More Info</HeadingH5>
          <List>Term and Conditions</List>
          <List>Privacy Policy</List>
          <List>Shipping Policy</List>
          <List>Sitemap</List>
        </TopUl>
        <TopUl>
          <HeadingH5>Location</HeadingH5>
          <List>support@euphoria.in</List>
          <List>Eklingpura Chouraha, Ahmedabad Main Road</List>
          <List>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</List>
        </TopUl>
      </TopDiv>
      <BottomDiv>
        <BottomTop>
          <BottomLeftDiv>
            <SocialImg src={img1} />
            <SocialImg src={img2} />
            <SocialImg src={img3} />
            <SocialImg src={img4} />
          </BottomLeftDiv>
          <BottomRightDiv>
            <Apph4>Download The App </Apph4>
            <Appsdiv>
              <AppDiv>
                <AppImg src={img6} />
                <Textp>
                  android app on
                  <br />
                  <AppNamep>Google Play</AppNamep>
                </Textp>
              </AppDiv>
              <AppDiv>
                <AppImg src={img5} />
                <Textp>
                  android app on
                  <br />
                  <AppNamep>App Store</AppNamep>
                </Textp>
              </AppDiv>
            </Appsdiv>
          </BottomRightDiv>
        </BottomTop>
      </BottomDiv>
    </Container>
  );
}

export default Footer;
