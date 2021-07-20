import React from "react";
import { Button } from "grommet";
import axios from "axios";
// import superagent  from "superagent";
// import fetch from "node-fetch"
// import { HOSTNAME } from "../environment";
// import Modal from "react-modal";
import { v4 as uuidv4 } from 'uuid';
import "./SpringBig.css";
import styled from "styled-components";
// Modal.setAppElement("#root");
const pos_user_id = uuidv4();
const StyledButton = styled(Button)`
  background: #033fb4;
  border: 1px solid #033fb4;
  height: 2.5em;
  font-size: 0.9em;
  margin-right: 20px;
  width: 50%;
`;

export default function SpringBig({ customerName, phoneNumber }) {
  async function handleSubmit(event) {
     event.preventDefault();
    const data = {
        "member": {
          "pos_user": pos_user_id,
          "pos_type": "greenpackage",
          "phone_number": phoneNumber,
          "first_name": customerName,
        }
    }
    
    const options ={
      method: 'POST', 
      data: data, 
      headers: {
        'AUTH-TOKEN': process.env.REACT_APP_AUTH_TOKEN,
        'X-api-key': process.env.REACT_APP_API_KEY,
      }
}
    try {
      const resp = await axios('https://cors-anywhere.herokuapp.com/https://api.springbig.technology/production/pos/v1/members', options);
      // console.log(resp)
      // console.log(pos_user_id)
      if (resp.status === 200) {
         window.location.href = 'http://netacare.org';
      }
      return resp
    } catch(err) {
     return err
    }
  }
    return (
      <>
        <StyledButton
          onClick={handleSubmit}
          type="submit"
          label="Order Now"
          primary
        />
      </>
    );
}
