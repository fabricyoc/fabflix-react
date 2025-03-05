import Banner from "./componentes/Banner";
import Card from "./componentes/Card";
import Category from "./componentes/Category";
import Container from "./componentes/Container";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

function App() {
  return (
    <>
      <Header />
      <Banner imagem="home" />
      <Container>
        <Category category="Naruto">
          <Card id="X43hs5-6Ilw" />
          <Card id="i6Z9m_0-DVo" />
          <Card id="kj18GbbGeGI" />
          <Card id="VEDQ5rELtoU" />
          <Card id="VEDQ5rELtoU" />
        </Category>
      </Container>
      <Footer />
    </>
  );
}

export default App;
