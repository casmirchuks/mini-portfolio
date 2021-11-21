import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { StyledSocialicons } from "./styles/Socialicons.styled";

export default function Socialicons() {
  return (
    <StyledSocialicons>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/casmir-chuks/">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
      </li>
    </StyledSocialicons>
  );
}
