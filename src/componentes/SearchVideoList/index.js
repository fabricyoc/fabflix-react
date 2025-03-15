import styles from './SearchVideoList.module.css';
import VideoList from '../VideoList';
import { useState } from 'react';

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

  const [searchText, setSearchText] = useState("One");
  const searchVideos = filterVideos(videos, searchText);

  return (
    <section className={styles.container}>

      <input
        type='search'
        placeholder='Pesquisar...'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <VideoList
        videos={searchVideos}
        emptyHeading={`Sem vídeos sobre "${searchText}"`}
      />

    </section>
  );
};

export default SearchVideoList;

