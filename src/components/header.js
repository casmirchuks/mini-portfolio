import { StyledHeader, Nav } from "./styles/Header.styled";
import { Container } from "./styles/Containter.styled";
import { Button } from "./styles/Button.styled";

export default function header() {
  return (
    <div>
      <StyledHeader>
        <Container>
          <Nav>
            <h1>Dev Portfolio</h1>
            <a href="#footer">
              <Button>Contact</Button>
            </a>
          </Nav>
        </Container>
      </StyledHeader>
    </div>
  );
}
