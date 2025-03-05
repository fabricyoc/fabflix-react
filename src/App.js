import Banner from "./componentes/Banner";
import Card from "./componentes/Card";
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
        <section className="cards">
          <Card id="sNwjd2bkljc" />
          <Card id="wMLAtRGmcxY" />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default App;
