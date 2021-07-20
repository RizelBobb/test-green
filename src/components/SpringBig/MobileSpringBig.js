import "./MobileSpringBig.css";
import { Button } from "grommet";
import axios from "axios";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
// Modal.setAppElement("#root");
const pos_user_id = uuidv4();

const StyledButton = styled(Button)`
  background: #033fb4;
  border: 1px solid #033fb4;
  height: 2.5em;
  font-size: 0.9em;
  margin: 20px 20px 20px 0;
  width: 80%;
`;
export default function MobileSpringBIg({ customerName, phoneNumber }) {
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
        'AUTH-TOKEN': '6d594a295f14f4ed838752ee46c7aa3a',
        'X-api-key': 'b0bSI5WEa84daARcbYEXFPX0vMgT13R3Y5gPqKN2',
      }
}
    try {
      const resp = await axios('https://cors-anywhere.herokuapp.com/https://api.springbig.technology/production/pos/v1/members', options);
      console.log(resp)
      console.log(pos_user_id)
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
