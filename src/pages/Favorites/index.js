import styles from './Favorites.module.css';
import Header from '../../componentes/Header';
import Container from '../../componentes/Container';
import Footer from '../../componentes/Footer';
import VideoList from '../../componentes/VideoList';
import { useFavoriteContext } from '../../contexts/Favorites';

function Favorites() {
  const { favorite } = useFavoriteContext();
  return (
    <>
      <Header />
      <Container>

        <section className={styles.favorites}>
          <h2>Meus favoritos</h2>
          {/* Lista de favoritos */}
          <VideoList 
            videos={favorite} 
            emptyHeading="Sem vídeos favoritos"
          />
        </section>

      </Container>
      <Footer />
    </>
  );
};

export default Favorites;

