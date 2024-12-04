import styled from "styled-components";
import img1 from "../../assets/facebook.svg";
import img2 from "../../assets/instagram.svg";
import img3 from "../../assets/twitter.svg";
import img4 from "../../assets/linkedin.svg";
import img5 from "../../assets/Group.png";
import img6 from "../../assets/PlayStoreImage.svg";
import {Link} from "react-router-dom"
import {useState} from "react"

const Container = styled.div`
  background-color: #3c4242;
  padding: 3% 7%;
  color: #fff;
`;
const TopDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:.5rem;
  justify-content: space-around;
  @media (max-width: 500px) {
    gap: 0;
    flex-direction: column;
  text-align:center;

  }
`;
const TopConDiv = styled.div`
display:flex;
flex-direction:column;
display:block;
`;
const TopUl = styled.ul`
  list-style: none;
  display:block;
  @media (max-width: 500px) {
    display: ${(props) => (props.visible ? "block" : "none")};
  }
`;
const HeadingH5 = styled.h5`
  font-size: 1.3rem;
  font-weight: 500;
  padding-bottom: 20px;
  cursor:pointer;
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
  font-size: 1.2rem 
  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;
function Footer() {
  const [visibleSections, setVisibleSections] = useState({
    help: false,
    company: false,
    info: false,
    location: false,
  });
  
  const toggleSection = (section) => {
    setVisibleSections((prev)=>({
    ...prev,
    [section]: !prev[section],
  }));
  };
  return (
    <Container>
      <TopDiv>
        <TopConDiv>
      <HeadingH5 onClick={() => toggleSection("help")}>Need Help</HeadingH5>
        <TopUl visible={visibleSections.help}>
          
          <List>Contact Us</List>
          <List>Track Order</List>
          <List>Returns & Refunds</List>
          <List>FAQ&apos;s</List>
          <List>Career</List>
        </TopUl>
        </TopConDiv>
        <TopConDiv>
        <HeadingH5 onClick={() => toggleSection("company")}>Company</HeadingH5>
        <TopUl visible={visibleSections.company}>
          
          <List>About Us</List>
          <List>Euphoria Blog</List>
          <List>Euphoriastan</List>
          <List>Collaboration</List>
          <List>Media</List>
        </TopUl>
        </TopConDiv>
        <TopConDiv>
        <HeadingH5 onClick={() => toggleSection("info")}>More Info</HeadingH5>
        <TopUl visible={visibleSections.info}>
          
          <List>Terms and Conditions</List>
          <List>Privacy Policy</List>
          <List>Shipping Policy</List>
          <List>Sitemap</List>
        </TopUl>
        </TopConDiv>
        <TopUl visible={true}> {/* Always visible */}
          <HeadingH5>Location</HeadingH5>
          <List>support@euphoria.in</List>
          <List>Eklingpura Chouraha, Ahmedabad Main Road</List>
          <List>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</List>
        </TopUl>
      </TopDiv>
      <BottomDiv>
        <BottomTop>
          <BottomLeftDiv>
            <Link to="https://www.facebook.com/"><SocialImg src={img1} /></Link>
            <Link to="https://www.instagram.com/?hl=en"><SocialImg src={img2} /></Link>
            <Link to="https://x.com/?lang=en"><SocialImg src={img3} /></Link>
            <Link to="https://in.linkedin.com/"><SocialImg src={img4} /></Link>
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
