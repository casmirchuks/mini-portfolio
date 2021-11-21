import SocialIcons from "./Socialicons";
import { Container } from "./styles/Containter.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <div>
      <StyledFooter id="footer">
        <Container>
          <img src="./images/logo_white_svg" alt="" />

          <Flex>
            <ul>
              <li>399 Long Avenue, Ferndale</li>
              <li>+27 73 315 9386</li>
              <li>casmirchuks@gmail.com</li>
            </ul>
            <ul>
              <li>About </li>
              <li>What I Do</li>
              <li>FAQ</li>
            </ul>

            {/* <ul>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Me</li>
            </ul> */}
            <SocialIcons />
          </Flex>
          <p>&copy; 2021 Dev Portfolio. All rights reserved</p>
        </Container>
      </StyledFooter>
    </div>
  );
}
