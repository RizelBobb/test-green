import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  TextInput,
  Anchor,
} from "grommet";
import styled from "styled-components";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import MobileSpringBig from "../../SpringBig/MobileSpringBig";
const customTheme = deepMerge(grommet, {
  formField: {
    label: {
      requiredIndicator: true,
    },
  },
});

const OrderFromNetaBtn = styled(Button)`
  background: #7fb74f;
  border: 1px solid #7fb74f;
  height: 2.5em;
  font-size: 0.9em;
  width: 80%;
  margin-top: 10px;
`;

const StyledTextInput = styled(TextInput)`
  width: 80%;
`;

const contentProps = {
  border: 0,
};

export const MobileRequiredLabel = () => (
  <Grommet theme={customTheme}>
    <Box background="#f5fffa" pad={{ bottom: "large", top: "xsmall" }}>
      <Form direction="column">
        <FormField contentProps={contentProps} name="phone" htmlFor="phone">
          <StyledTextInput
            size="medium"
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number here"
          />
        </FormField>
        <MobileSpringBig link={"https://enrollnow.vip/login/3610"} />
        <Anchor href="https://netacare.org">
          <OrderFromNetaBtn type="button" label="Order from Neta" primary />
        </Anchor>
      </Form>
    </Box>
  </Grommet>
);

MobileRequiredLabel.storyName = "Required label";

// export default {
//   title: 'Input/Form/Required label',
// };
