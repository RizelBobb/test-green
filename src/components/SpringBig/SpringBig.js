import React, { useState } from "react";
import { Button } from "grommet";
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
  margin-right: 20px;
`;
export default function SpringBig({ link }) {
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  function toggleModal() {
    setShow(!show);
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
      <>
        <StyledButton
          onClick={toggleModal}
          type="submit"
          label="Become a VIP"
          primary
        />
        <Modal
          isOpen={show}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="secondmodal"
        >
          {/* <StyledHeader2>hello</StyledHeader2> */}
          <iframe
            className="iframe_cover"
            src={link}
            style={{ width: "80%", height: "200px" }}
            title="springbig"
          />
        </Modal>
      </>
    );
  }
}
