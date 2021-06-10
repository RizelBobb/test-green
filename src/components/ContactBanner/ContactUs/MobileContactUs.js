import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  TextInput,
  Text,
} from "grommet";
import styled from "styled-components";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import { useForm } from "@formspree/react";

const customTheme = deepMerge(grommet, {
  formField: {
    label: {
      requiredIndicator: true,
    },
  },
});

const StyledButton = styled(Button)`
  background: #033fb4;
  border: 1px solid #033fb4;
  height: 2.5em;
  font-size: 0.9em;
  width: 90vw;
  margin-top: 5vw;
`;

const StyledTextInput = styled(TextInput)`
  width: 90%;
`;

const StyledText = styled(Text)`
  color: #033fb4;
  font-family: "Lato", sans-serif;
`;
const contentProps = {
  border: 0,
};

export const MobileContactUs = () => {
  const [state, handleSubmit] = useForm("xgerkbaj");
  if (state.succeeded) {
    return (
      <StyledText textAlign="center">Thank you for submitting!</StyledText>
    );
  }
  return (
    <Grommet theme={customTheme}>
      <Box
        id="contactus"
        background="#f5fffa"
        pad={{ bottom: "large", top: "xsmall" }}
      >
        <Form
          direction="column"
          justify="center"
          align="center"
          onSubmit={handleSubmit}
        >
          <FormField
            contentProps={contentProps}
            label={<StyledText size="medium">Name</StyledText>}
            name="full_name"
            htmlFor="full_name"
            required
          >
            <StyledTextInput
              size="medium"
              id="full_name"
              name="full_name"
              type="text"
              placeholder="Enter your full name"
            />
          </FormField>
          <FormField
            contentProps={contentProps}
            label={<StyledText size="medium">Email</StyledText>}
            name="email"
            htmlFor="email"
            required
          >
            <StyledTextInput
              size="medium"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </FormField>
          <FormField
            contentProps={contentProps}
            label={<StyledText size="medium">Message</StyledText>}
            name="message"
            htmlFor="message"
            required
          >
            <StyledTextInput
              size="medium"
              id="message"
              name="message"
              type="text"
              placeholder="Enter message"
            />
          </FormField>
          <StyledButton
            type="submit"
            label="Send"
            primary
            disabled={state.submitting}
          />
        </Form>
      </Box>
    </Grommet>
  );
};

MobileContactUs.storyName = "Required label";

// export default {
//   title: 'Input/Form/Required label',
// };
