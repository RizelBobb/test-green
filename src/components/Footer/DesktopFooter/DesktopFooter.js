import { Box, Text } from "grommet";
import styled from "styled-components";
function Footer() {
  return (
    <Box direction="row" justify="center">
      <StyledText>
        {" "}
        &copy; Copyright 2021 Faded LLC. All Rights Reserved.
      </StyledText>
    </Box>
  );
}

const StyledText = styled(Text)`
  color: #033fb4;
  font-family: "Staatliches", cursive;
`;

export default Footer;
