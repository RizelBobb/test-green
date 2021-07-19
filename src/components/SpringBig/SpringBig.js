import React, { useState } from "react";
import { Button, Text, Anchor, Box } from "grommet";
import { HOSTNAME } from "../environment";
import Modal from "react-modal";
import "./SpringBig.css";
import styled from "styled-components";
Modal.setAppElement("#root");

const StyledButton = styled(Button)`
  background: #033fb4;
  border: 1px solid #033fb4;
  height: 2.5em;
  font-size: 0.9em;
  margin-right: 40px;
  width: 100%;
`;

const ThankYouMessage = styled(Text)`
  /* margin-top: 60px; */
  font-family: "Lato", sans-serif;
  margin-bottom: 2%;
  font-size: 3rem;
  font-weight: bold;
`;


const InTheMeanTime = styled(Text)`
  /* margin-top: 60px; */
  font-family: "Lato", sans-serif;
  margin-bottom: 2%;
  font-size: 2rem;
`;

const StyledModal = styled(Modal)`
  width: 80%;
  color: #033FB4;
`;
const OrderFromNetaBtn = styled(Button)`
  background: #7fb74f;
  border: 1px solid #7fb74f;
  height: 2.5em;
  font-size: 1.5em;
`;
export default function SpringBig({ link }) {
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
      <a target="_parent" href={link} rel="noreferrer">
        {link}
      </a>
    );
  } else {
    return (
      <Box
        direction="row"
        width="55%"
        justify="center"
      >
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
          className="secondmodal"
        >
          {/* <div>hello</div> */}
          <iframe
            className="iframe_cover"
            src={link}
            style={{ width: "80%", height: "200px" }}
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
          <InTheMeanTime>In the meantime, you can order from NETA.</InTheMeanTime>
             <Anchor href="https://netacare.org">
            <OrderFromNetaBtn type="button" label="Order from NETA" primary />
          </Anchor>

       
        </StyledModal>
      </Box>
    );
  }
}
