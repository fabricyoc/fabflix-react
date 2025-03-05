import Banner from "./componentes/Banner";
import Card from "./componentes/Card";
import Category from "./componentes/Category";
import Container from "./componentes/Container";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import videos from "./json/videos.json";

// exporta a const CATEGORIES de acordo com o arquivo json
const categories = [...new Set(videos.map(video => video.categoria))];

// filtrar videos de categoria X

function filterCategory(id){
  return videos.filter(
    video => video.categoria == categories[id]
  );
}


function App() {
  return (
    <>
      <Header />
      <Banner imagem="home" />
      <Container>
        <Category category={categories[0]}>
          {
            filterCategory(0).map(
              video => <Card id={video.id} key={video.id} /> 
            )
          }
        </Category>
      </Container>
      <Footer />
    </>
  );
}

export default App;
