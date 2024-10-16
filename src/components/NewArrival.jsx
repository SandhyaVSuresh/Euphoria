import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../assets/img-1.jpg';
import image2 from '../assets/img-2.jpg';
import image3 from '../assets/img-3.jpg';
import image4 from '../assets/img-4.jpg';

const Container = styled.div`
  padding: 3% 7%;
  height:70vh;
  margin-bottom:2rem;
  @media(max-width:400px){
  height:90vh;
  }
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

const NewCardDiv = styled.div`
  margin: 2%;
  text-align: center;
  height:60vh;
  @media(max-width:400px){
  height:85vh;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 50vh;
  @media(max-width:400px){
  width:90%;
  height:70vh;
  }
  @media(max-width:350px){
  width:100%;
  }
`;

const CardTitleH3 = styled.h3`
  padding-top: 3%;
  color: rgba(60, 66, 66, 1);
  font-weight: 500;
  font-size: 1rem;
`;

const items = [
  { src: image1, title: 'Knitted Joggers' },
  { src: image2, title: 'Urban Shirts' },
  { src: image3, title: 'Full Sleeve' },
  { src: image4, title: 'Active T-Shirts' }
];

// Carousel responsive settings
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function NewArrival() {
  return (
    <Container>
      <NewHeadDiv>
        <SideLineDiv></SideLineDiv>
        <NewTitleH2>New Arrival</NewTitleH2>
      </NewHeadDiv>
      <Carousel
      showDots={true}    
        responsive={responsive}
        infinite={true}
        autoPlay={true}
      >
        {items.map((item, index) => (
          <NewCardDiv key={index}>
            <CardImg src={item.src} alt={item.title} />
            <CardTitleH3>{item.title}</CardTitleH3>
          </NewCardDiv>
        ))}
      </Carousel>
    </Container>
  );
}

export default NewArrival;
