import styles from './Favorites.module.css';
import Header from '../../componentes/Header';
import Container from '../../componentes/Container';
import Footer from '../../componentes/Footer';

function Favorites() {
  return (
    <>
      <Header />
      <Container>

        <section className={styles.favorites}>
          <h2>Meus favoritos</h2>
          Lista de favoritos
        </section>

      </Container>
      <Footer />
    </>
  );
};

export default Favorites;

