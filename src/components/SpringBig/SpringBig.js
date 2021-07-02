import React, { useState } from "react";
import { Button } from "grommet";
// import axios from "axios";
// import superagent  from "superagent";
// import fetch from "node-fetch"
// import { HOSTNAME } from "../environment";
// import Modal from "react-modal";
import "./SpringBig.css";
import styled from "styled-components";
// Modal.setAppElement("#root");

const StyledButton = styled(Button)`
  background: #033fb4;
  border: 1px solid #033fb4;
  height: 2.5em;
  font-size: 0.9em;
  margin-right: 20px;
`;
export default function SpringBig({ link }) {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  async function handleSubmit(event) {
     event.preventDefault();
    const data = {
        "member": {
          "pos_user": "234353",
          "pos_type": "greenpackage",
          "phone_number": "5133555113",
          "first_name": "TestGirl",
          "last_name": "Rizel"
        }
      }
//     const options ={
//       method: 'POST', 
//       // url: 'https://api.springbig.technology/staging/pos/v1/members',
//       data: data, 
//       headers: {
//         'AUTH-TOKEN': '034b9e2bc45fdb39e00f99ec65f313d3',
//         'X-api-key': 'b0bSI5WEa84daARcbYEXFPX0vMgT13R3Y5gPqKN2',
//         // 'Access-Control-Allow-Origin': '*',
//         // 'Content-Type': 'application/json',
//         // 'Access-Control-Allow-Methods': 'GET, POST'
//       }
// }
    try {

      // superagent
      // .post('https://api.springbig.technology/staging/pos/v1/members')
      // .send(data) // sends a JSON post body
      // .set('AUTH-TOKEN', '034b9e2bc45fdb39e00f99ec65f313d3')
      // .set('X-api-key', 'b0bSI5WEa84daARcbYEXFPX0vMgT13R3Y5gPqKN2')
      // .set('accept', 'json')
      // .end(function (err, res) {
      //   console.log(err)
      // });
      // const resp = await axios('https://api.springbig.technology/staging/pos/v1/members', options);
      // console.log(resp)
      console.log('helllooooo')
      // return resp
    } catch(err) {
     return err
    }
  // }

  // }
    // try {
    //   const resp = await axios('https://api.springbig.technology/staging/pos/v1/members', options);
    //   console.log(resp)
    //   return resp
    // } catch(err) {
    //  return err
    // }
  }
  
  // function toggleModal() {
  //   setShow(!show);
  // }
  // const url = new URL(link);
  // if (url.hostname === HOSTNAME) {
  //   return (
  //     <a target="_parent" href={link} rel="noreferrer">
  //       {link}
  //     </a>
  //   );
  // } else {
    return (
      <>
        <StyledButton
          onClick={handleSubmit}
          type="submit"
          label="Become a VIP"
          primary
        />
        {/* <Modal
          isOpen={show}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="secondmodal"
        > */}
          {/* <StyledHeader2>hello</StyledHeader2> */}
          {/* <iframe
            className="iframe_cover"
            src={link}
            style={{ width: "80%", height: "200px" }}
            title="springbig"
          /> */}
        {/* </Modal> */}
      </>
    );
  // }
}
