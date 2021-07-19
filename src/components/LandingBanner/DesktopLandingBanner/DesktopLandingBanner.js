import React from "react";
import styled from "styled-components";
import { Text } from "grommet";
import "./DesktopLandingBanner.css";
import SubscribeNow from "../../SubscribeNow/SubscribeNow";
import DesktopSocialMediaIconRow from "../../SocialMediaIcons/DesktopSocialMediaIcons/DesktopSocialMediaIconRow";
import { CheckCircle } from "react-feather";
import "emoji-mart/css/emoji-mart.css";
import Emoji from "react-emoji-render";

const NatureWalk = require("../../Logos/deliverycartoon.png");

function DesktopLandingBanner() {
  return (
    <Container id="home">
      <ComingSoonDiv>
        <StyledHeader1>
          DELIVERIES<br></br>SERVICES<br></br>ARE LIVE!
        </StyledHeader1>
        <StyledHeader2>
          <StyledCheckCircle size={16} />
          {"  "}Your Favorite
          <Emoji text=":heart:" />
          <br></br>
          <StyledCheckCircle size={16} />
          {"  "} Minority-Owned
          <Emoji text=":star-struck:" /> <br></br>
          <StyledCheckCircle size={16} />
          {"  "}Cannabis Delivery Service <Emoji text=":truck: :leaves:" />
        </StyledHeader2>
        <StyledText>Join our texting list.</StyledText>
        <SubscribeNow />
        <DesktopSocialMediaIconRow />
      </ComingSoonDiv>
      <ImageDiv>
        <LandingImage src={NatureWalk.default}></LandingImage>
      </ImageDiv>
    </Container>
  );
}

const StyledHeader2 = styled.h2`
  font-family: "Lato", sans-serif;
  line-height: 1.6;
  font-size: 1.5em;
`;
const StyledHeader1 = styled.h1`
  font-family: "Archivo Black", sans-serif;
  letter-spacing: 6px;
  font-size: 6rem;
  margin-bottom: 4%;
  margin-top: 1%;
`;

const StyledText = styled(Text)`
  margin-top: 60px;
  font-family: "Lato", sans-serif;
`;

const StyledCheckCircle = styled(CheckCircle)`
  color: #7fb74f;
  margin-right: 1vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 6vh;
`;
const ComingSoonDiv = styled.div`
  width: 50%;
  height: 80vh;
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
  width: 50%;
  height: 80vh;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const LandingImage = styled.img``;

export default DesktopLandingBanner;
