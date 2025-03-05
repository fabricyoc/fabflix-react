import Banner from "./componentes/Banner";
import Container from "./componentes/Container";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

function App() {
  return (
    <>
      <Header />
      <Banner imagem="home" />
      <Container>
      <h1>Olá mundo!</h1>

      </Container>
      <Footer />
    </>
  );
}

export default App;
