import styles from './Search.module.css';
import Header from '../../componentes/Header';
import Container from '../../componentes/Container';
import Footer from '../../componentes/Footer';
import VideoList from '../../componentes/VideoList';
import videos from '../../json/videos.json';

function Search() {
  return (
    <>
      <Header />
      <Container>
        <h2 className={styles.search}>Pesquisar</h2>
        <VideoList videos={videos} />
      </Container>
      <Footer />
    </>
  );
};

export default Search;
