import Banner from "../../componentes/Banner";
import Card from "../../componentes/Card";
import Carousel from "../../componentes/Carousel";
// importa o padrão Category e entre {} importação nomeada de funções e variáveis
import Category, { categories, filterCategory } from "../../componentes/Category";
import Container from "../../componentes/Container";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import ScrollToTopButton from "../../componentes/ScrollToTopButton";

function App() {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <Banner imagem="home" />
      <Container>
        {
          categories.map(
            (cat, index) =>
              <Category category={cat} key={cat}>
                <Carousel>
                  {
                    filterCategory(index).map(
                      video => <Card id={video.id} key={video.id} />
                    )
                  }
                </Carousel>
              </Category>
          )
        }
      </Container>
      <Footer />
    </>
  );
}

export default App;
