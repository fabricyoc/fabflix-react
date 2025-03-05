import styles from './Watch.module.css';
import Header from "../../componentes/Header";
import Container from '../../componentes/Container';
import Footer from '../../componentes/Footer';
import { useParams } from 'react-router-dom';
import videos from '../../json/videos.json';
import PageNotFound from '../PageNotFound';

function Watch() {
  // React Router Dom exige isso para receber os parâmetros
  const params = useParams();

  const video = videos.find(
    (video) => {return video.id === params.id}
  );
  
  // se o objeto for UNDEFINED (id não existente) retorna página não encontrada
  if (!video) {
    return <PageNotFound />;
  }

  return (
    <>
      <Header />
      <Container>
        <section className={styles.watch}>
          <iframe
            width="854" height="480"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
          ></iframe>

        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Watch;

