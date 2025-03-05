import styles from './Watch.module.css';
import Header from "../../componentes/Header";
import Container from '../../componentes/Container';
import Footer from '../../componentes/Footer';

function Watch() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.watch}>
          <iframe width="854" height="480" src="https://www.youtube.com/embed/kdeHF1mb_B8?si=5qJbK0iLNNLen3i5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Watch;

