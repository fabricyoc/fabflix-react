import Container from '../../componentes/Container';
import Footer from '../../componentes/Footer';
import Header from '../../componentes/Header';
import styles from './PageNotFound.module.css';
import error404 from './erro404.png';

function PageNotFound() {
  return (
    <>
    <Header />
    <Container>
      <section className={styles.pageNotFound}>
        <h2>Página não encontrada!</h2>
        <img src={error404} alt='Página não encontrada' />
      </section>
    </Container>
    <Footer />
  </>
  );
};

export default PageNotFound;

