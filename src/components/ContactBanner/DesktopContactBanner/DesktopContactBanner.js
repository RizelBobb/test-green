import React from "react";
import styled from "styled-components";
import "./DesktopContactBanner.css";
import "emoji-mart/css/emoji-mart.css";
import Emoji from "react-emoji-render";
import { ContactUs } from "../ContactUs/ContactUs";

const NatureWalk = require("../../Logos/mascot.png");

function DesktopContactBanner() {
  return (
    <Container>
      <ImageDiv>
        <LandingImage src={NatureWalk.default}></LandingImage>
      </ImageDiv>
      <ComingSoonDiv>
        <StyledHeader1>
          Reach Out
          <Emoji text=":love_letter:" />
        </StyledHeader1>
        <ContactUs />
      </ComingSoonDiv>
    </Container>
  );
}

const StyledHeader1 = styled.h1`
  font-family: "Archivo Black", sans-serif;
  letter-spacing: 6px;
  font-size: 6rem;
  margin-bottom: 4%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-content: center;
  justify-content: center;
`;
const ComingSoonDiv = styled.div`
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  text-align: left;
  font-family: "Staatliches", cursive;
  color: #033fb4;
  padding-left: 8vh;
  padding-right: 0;
  background: #f5fffa;
  padding-top: 8vh;
`;

const ImageDiv = styled.div`
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: center; ;
`;

const LandingImage = styled.img`
  width: 100%;
  height: 50vh;
`;

export default DesktopContactBanner;
