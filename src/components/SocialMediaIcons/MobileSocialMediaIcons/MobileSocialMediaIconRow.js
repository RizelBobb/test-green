import { Box } from 'grommet';
import styled from 'styled-components';
import {Facebook, Twitter, Instagram, Linkedin} from 'react-feather'

function MobileSocialMediaIconRow() {
    return (
        <Box pad="0" width="60%" direction="row">
            <a href="https://www.facebook.com/yourgreenpackag/">
                <StyledFacebook size={40} />
            </a>
            <a href="https://www.instagram.com/yourgreenpackage_/">
                <StyledInstagram size={40} />
            </a>
            <a href="https://www.linkedin.com/company/your-green-package/">
                <StyledLinkedin size={40} />
            </a>
            <a href="https://twitter.com/YourGreenPackag">
                <StyledTwitter size={40} />
            </a>
        </Box>
    );
}

const StyledFacebook = styled(Facebook)`
    margin-right: 30px;
    color: #033FB4;
`
const StyledTwitter = styled(Twitter)`
    margin-right: 30px;
    color: #033FB4;
`
const StyledInstagram = styled(Instagram)`
    margin-right: 30px;
    color: #033FB4;
`
const StyledLinkedin = styled(Linkedin)`
    margin-right: 30px;
    color: #033FB4;
`

export default MobileSocialMediaIconRow;