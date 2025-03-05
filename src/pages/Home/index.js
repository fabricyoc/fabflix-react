import Banner from "../../componentes/Banner";
import Card from "../../componentes/Card";
// importa o padrão Category e entre {} importação nomeada de funções e variáveis
import Category, {categories, filterCategory} from "../../componentes/Category";
import Container from "../../componentes/Container";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";

function App() {
  return (
    <>
      <Header />
      <Banner imagem="home" />
      <Container>
        {
          categories.map(
            (cat, index) =>
              <Category category={cat} key={cat}>
                {
                  filterCategory(index).map(
                    video => <Card id={video.id} key={video.id} />
                  )
                }
              </Category>
          )
        }
      </Container>
      <Footer />
    </>
  );
}

export default App;
