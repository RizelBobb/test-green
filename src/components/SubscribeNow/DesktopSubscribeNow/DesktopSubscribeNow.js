import {
  Box,
  Form,
  FormField,
  Grommet,
  TextInput,
} from "grommet";
import styled from "styled-components";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import SpringBig from "../../SpringBig/SpringBig";
import React, { useState }from "react";

const customTheme = deepMerge(grommet, {
  formField: {
    label: {
      requiredIndicator: true,
    },
  },
});

// const OrderFromNetaBtn = styled(Button)`
//   background: #7fb74f;
//   border: 1px solid #7fb74f;
//   height: 2.5em;
//   font-size: 0.9em;
// `;

const StyledTextInput = styled(TextInput)`
  width: 50%;
`;

const contentProps = {
  border: 0,
};

function DesktopRequiredLabel() {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <Grommet theme={customTheme}>
      <Box background="#f5fffa" pad={{ bottom: "large", top: "xsmall" }}>
        <Form direction="row">
          <FormField contentProps={contentProps} name="customer_name" htmlFor="customer_name">
            <StyledTextInput
              size="medium"
              id="customer_name"
              name="customer_name"
              type="text"
              onChange={e => setCustomerName(e.target.value)}
              value={customerName}
              placeholder="Enter your name here"
            />
          </FormField>
          <FormField contentProps={contentProps} name="phone" htmlFor="phone">
            <StyledTextInput
              size="medium"
              id="phone"
              name="phone"
              type="tel"
              onChange={e => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              placeholder="Enter your phone number here"
            />
          </FormField>
          <SpringBig phoneNumber={phoneNumber} customerName={customerName} link={"https://enrollnow.vip/login/3610"} />
          {/* <Anchor href="https://netacare.org">
            <OrderFromNetaBtn type="button" label="Order from NETA" primary />
          </Anchor> */}
        </Form>
      </Box>
    </Grommet>
  );
}

export default DesktopRequiredLabel;
