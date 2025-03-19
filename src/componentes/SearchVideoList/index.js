import styles from './SearchVideoList.module.css';
import VideoList from '../VideoList';
import { useEffect, useState } from 'react';
import Loader from '../Loader';

function filterVideos(videos, searchText) {
  return videos.filter(
    /**
     * Padrão
     */
    // (video) => video.categoria.includes(searchText)

    /**
     * Filtra por mais opções (chaves)
     */
    // (video) => video.categoria.includes(searchText) || video.titulo.includes(searchText)

    /**
     * Filtrar sem diferenciar minúsculas e maiúsculas
     */
    (video) => video.categoria.toLowerCase().includes(searchText.toLowerCase())

  );
}

function SearchVideoList({ videos }) {

  const [searchText, setSearchText] = useState("");
  const searchVideos = filterVideos(videos, searchText);

  // implementação do componente Loader
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <section className={styles.container}>

      <input
        type='search'
        placeholder='Pesquisar...'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* renderização condicional para o componente Loader */}
      {
        loading ? <Loader /> :
          <VideoList
            videos={searchVideos}
            emptyHeading={`Sem vídeos sobre "${searchText}"`}
          />
      }

    </section>
  );
};

export default SearchVideoList;

