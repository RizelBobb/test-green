import React from "react";
import styled from "styled-components";
import { Text } from "grommet";
import { MobileContactUs } from "../ContactUs/MobileContactUs";
import "emoji-mart/css/emoji-mart.css";
import Emoji from "react-emoji-render";

const NatureWalk = require("../../Logos/mascot.png");

function MobileLandingBanner() {
  return (
    <Container id="home">
      <ComingSoonDiv>
        <StyledHeader1>
          Reach out
          <Emoji text=":love_letter:" />
        </StyledHeader1>
      </ComingSoonDiv>
      <MobileContactUs />
      <ImageDiv>
        <LandingImage src={NatureWalk.default}></LandingImage>
        <StyledCopyRight>
          {" "}
          &copy; Copyright 2021 Faded LLC. All Rights Reserved.
        </StyledCopyRight>
      </ImageDiv>
    </Container>
  );
}

const StyledHeader1 = styled.h1`
  font-family: "Archivo Black", sans-serif;
  letter-spacing: 6px;
  font-size: 3rem;
  margin-bottom: 4%;
  margin-top: 1%;
`;

const StyledCopyRight = styled(Text)`
  color: #033fb4;
  font-family: "Staatliches", cursive;
  font-size: 10px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;
const ComingSoonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  text-align: left;
  font-family: "Staatliches", cursive;
  color: #033fb4;
  padding-left: 8vh;
  padding-top: 8vh;
  background: #f5fffa;
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
`;
const LandingImage = styled.img`
  /* width: fit-content; */
  width: 20vw;
  height: 10vh;
  align-self: center;
  /* margin-top: 9vh; */
`;

export default MobileLandingBanner;
