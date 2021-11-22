import { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Containter.styled";
import content from "./content";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
