import { useState } from "react";
import styled from "styled-components";
import img1 from "../assets/span-1.svg";
import img2 from "../assets/span-2.svg";
import img3 from "../assets/span-3.svg";
import star from "../assets/star.svg";
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
const RatingImg = styled.img``;
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
  return (
    <Container>
      <NewHeadDiv>
        <SideLineDiv></SideLineDiv>
        <NewTitleH2>Feedback</NewTitleH2>
      </NewHeadDiv>
      <NewBodyDiv>
        <FeedbackDiv>
          <FeedbackHeadDiv>
            <ProfileImg src={img1} />
            <RateingDiv>
              <RatingImg src={star} />
              <RatingImg src={star} />
              <RatingImg src={star} />
              <RatingImg src={star} />
              <RatingImg src={star} />
            </RateingDiv>
          </FeedbackHeadDiv>
          <FeedbackBodyDiv>
            <Headh4>Floyd Miles</Headh4>
            <FeedbackText text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
          </FeedbackBodyDiv>
        </FeedbackDiv>
        <FeedbackDiv>
          <FeedbackHeadDiv>
            <ProfileImg src={img2} />
            <RateingDiv>
              <RatingImg src={star} />
              <RatingImg src={star} />
              <RatingImg src={star} />
              <RatingImg src={star} />
              <RatingImg src={star} />
            </RateingDiv>
          </FeedbackHeadDiv>
          <FeedbackBodyDiv>
            <Headh4>Ronald Richards</Headh4>
            <FeedbackText text="Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
          </FeedbackBodyDiv>
        </FeedbackDiv>
        <FeedbackDiv>
          <FeedbackHeadDiv>
            <ProfileImg src={img3} />
            <RateingDiv>
              <RatingImg src={star} />
              <RatingImg src={star} />
              <RatingImg src={star} />
              <RatingImg src={star} />
              <RatingImg src={star} />
            </RateingDiv>
          </FeedbackHeadDiv>
          <FeedbackBodyDiv>
            <Headh4>Savannah Nguyen</Headh4>
            <FeedbackText text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
          </FeedbackBodyDiv>
        </FeedbackDiv>
      </NewBodyDiv>
    </Container>
  );
}
Feedback.protoTypes = {
  text: PropTypes.string,
};
export default Feedback;
