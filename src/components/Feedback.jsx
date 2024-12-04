import { useState } from "react";
import styled from "styled-components";
import data from "./productData.json"; // Import the JSON data

import PropTypes from "prop-types";
const Container = styled.div`
  padding: 3% 7%;
  margin-top: 30px;
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
  gap: 1rem;
  @media (max-width: 700px) {
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

const FeedbackDiv = styled.div`
  width: 50%;
  padding: 1.3%;
  border-radius: 5px;
  border: 1px solid #bebcbd;
  @media (max-width: 700px) {
    margin: auto;
    width: 90%;
  }
`;

const FeedbackHeadDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 22px;
`;

const ProfileImg = styled.img``;
const RateingDiv = styled.div``;
const RatingImg = styled.img`
width:15px;
`;
const FeedbackBodyDiv = styled.div``;
const Headh4 = styled.h4`
  color: #3c4242;
  padding-bottom: 15px;
`;

const Feedbackp = styled.p`
  font-size: 0.7rem;
  color: #807d7e;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: rgba(138, 51, 253, 1);
  cursor: pointer;
  font-size: 0.7rem;
  padding-top: 10px;
`;

function FeedbackText({ text }) {
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => setIsReadMore(!isReadMore);

  return (
    <>
      <Feedbackp>
        {isReadMore ? text : `${text.substring(0, 100)}...`}
      </Feedbackp>
      <ReadMoreButton onClick={toggleReadMore}>
        {isReadMore ? "Read Less" : "Read More"}
      </ReadMoreButton>
    </>
  );
}

function Feedback() {
  const feedbackdata = data.filter((item) => item.heading === "Feedback");

  const getImage = (imgName) => {
    return new URL(`../assets/${imgName}`, import.meta.url).href;
  };
  const renderStars = (rating, starImages) => {
    const stars = [];
    const [fullStar, unfilledStar, halfStar] = starImages; // Destructure the star images

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        // Full star
        stars.push(<RatingImg key={i} src={getImage(fullStar)} alt="star" />);
      } else if (rating >= i - 0.5) {
        // Half star
        stars.push(
          <RatingImg key={i} src={getImage(halfStar)} alt="half-star" />
        );
      } else {
        // Unfilled star
        stars.push(
          <RatingImg key={i} src={getImage(unfilledStar)} alt="unfilled-star" />
        );
      }
    }
    return stars;
  };

  return (
    <Container>
      <NewHeadDiv>
        <SideLineDiv></SideLineDiv>
        <NewTitleH2>Feedback</NewTitleH2>
      </NewHeadDiv>
      <NewBodyDiv>
        {feedbackdata.map((feedback) => (
          <FeedbackDiv key={feedback.id}>
            <FeedbackHeadDiv>
              <ProfileImg src={getImage(feedback.img)} alt={feedback.name} />
              <RateingDiv>
                {renderStars(feedback.rating, feedback.ratingStarImg)}
              </RateingDiv>
            </FeedbackHeadDiv>
            <FeedbackBodyDiv>
              <Headh4>{feedback.name}</Headh4>
              <FeedbackText text={feedback.msg} />
            </FeedbackBodyDiv>
          </FeedbackDiv>
        ))}
      </NewBodyDiv>
    </Container>
  );
}
FeedbackText.propTypes = {
  text: PropTypes.string,
};
FeedbackText.defaultProps = {
  text: "",
};
export default Feedback;
