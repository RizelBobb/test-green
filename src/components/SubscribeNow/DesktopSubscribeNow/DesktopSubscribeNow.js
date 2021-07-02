import {
  Box,
  // Button,
  Form,
  FormField,
  Grommet,
  TextInput,
  // Anchor,
} from "grommet";
import styled from "styled-components";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import SpringBig from "../../SpringBig/SpringBig";
import React from "react";

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
  return (
    <Grommet theme={customTheme}>
      <Box display="flex" background="#f5fffa" pad={{ bottom: "large", top: "xsmall" }}>
        <Form direction="row">
          <FormField contentProps={contentProps} name="phone" htmlFor="phone">
            <StyledTextInput
              size="medium"
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number here"
            />
          </FormField>
          {/* <StyledButton type="submit" label="Get Notified" primary /> */}
          <SpringBig width="100%" link={"https://enrollnow.vip/login/3610"} />
          {/* <Anchor href="https://netacare.org">
            <OrderFromNetaBtn type="button" label="Order from NETA" primary />
          </Anchor> */}
        </Form>
      </Box>
    </Grommet>
  );
}

// DesktopRequiredLabel.storyName = "Required label";
export default DesktopRequiredLabel;
// export default {
//   title: 'Input/Form/Required label',
// };
