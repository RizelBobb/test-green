import "./VerifyAge.css";
import Modal from "react-modal";
import { Button } from "grommet";
import { useState } from "react";
import styled from "styled-components";
Modal.setAppElement("#root");
const greenPackage = require("../Logos/logo.png");

const Logo = styled.img`
  max-width: 300px;
`;
const VerifyAgeBtn = styled(Button)`
  background: #7fb74f;
  border: 1px solid #7fb74f;
  height: 2.5em;
  font-size: 0.9em;
  width: 80%;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
`;

const StyledHeader2 = styled.h2`
  font-family: "Lato", sans-serif;
  line-height: 1.6;
  font-size: 1.7em;
  color: #033fb4;
  font-weight: normal;
  text-align: center;
  margin: 5vh;
`;

function VerifyAgeModal() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  if (window.performance) {
    if (performance.navigation.type === 1) {
      return null;
    } else {
      return (
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={false}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <Logo src={greenPackage.default} alt="green package logo" />
          <StyledHeader2>
            To view this page, you must be 21 years of age or older.
          </StyledHeader2>
          <VerifyAgeBtn className="ageVerifyBtn" onClick={toggleModal} primary>
            I am 21 or older
          </VerifyAgeBtn>
        </Modal>
      );
    }
  }
}

export default VerifyAgeModal;
