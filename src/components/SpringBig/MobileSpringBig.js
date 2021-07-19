import "./MobileSpringBig.css";
import React, { useState } from "react";
import {  Button, Text, Anchor } from "grommet";
import { HOSTNAME } from "../environment";
import Modal from "react-modal";
import styled from "styled-components";
Modal.setAppElement("#root");

const StyledButton = styled(Button)`
  background: #033fb4;
  border: 1px solid #033fb4;
  height: 2.5em;
  font-size: 0.9em;
  margin-right: 20px;
  width: 80%;
`;
const StyledModal = styled(Modal)`
  width: 90%;
  color: #033FB4;
`;


const ThankYouMessage = styled(Text)`
  /* margin-top: 60px; */
  font-family: "Lato", sans-serif;
  margin-bottom: 2%;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
`;


const InTheMeanTime = styled(Text)`
  /* margin-top: 60px; */
  font-family: "Lato", sans-serif;
  margin-bottom: 2%;
  font-size: 1.5rem;
  text-align: center;
`;

const OrderFromNetaBtn = styled(Button)`
  margin-top: 5%;
  background: #7fb74f;
  border: 1px solid #7fb74f;
  height: 2em;
  font-size: 1.2em;
`;


export default function MobileSpringBIg({ link }) {
  const [show, setShow] = useState(false);
  const [newShow, setNewShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  function toggleModal() {
    setShow(!show);
    if (show === true) {
    setNewShow(!newShow)
  }
  }
  function newToggleModal() {
    setNewShow(!newShow);
  }
  const url = new URL(link);
  if (url.hostname === HOSTNAME) {
    return (
      <a target="_blank" href={link} rel="noreferrer">
        {link}
      </a>
    );
  } else {
    return (
      <>
        <StyledButton
          onClick={toggleModal}
          type="submit"
          label="Order Now"
          primary
        />
        <Modal
          isOpen={show}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="thirdmodal"
        >
          {/* <StyledHeader2>hello</StyledHeader2> */}
          <iframe
            className="iframe_cover"
            src={link}
            style={{ width: "90%", height: "200px" }}
            title="springbig"
          />
        </Modal>
          <StyledModal
          isOpen={newShow}
          onRequestClose={newToggleModal}
          contentLabel="Another modal"
          className="thirdmodal"
        >
         
          <ThankYouMessage>Thanks for joining our texting list!</ThankYouMessage>
          <InTheMeanTime>In the meantime, order from NETA.</InTheMeanTime>
             <Anchor href="https://netacare.org">
            <OrderFromNetaBtn type="button" label="Order from NETA" primary />
          </Anchor>

       
        </StyledModal>
      </>
    );
  }
}
