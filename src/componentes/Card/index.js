import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import iconFavorite from './favorite.png';
import iconUnfavorite from './unfavorite.png';

function changeIcon(e) {
  // Alterna entre os ícones diretamente
  e.target.src = e.target.src === iconFavorite ? iconUnfavorite : iconFavorite;

}

function Card({ id }) {
  return (
    <section className={styles.card}>
      <Link to={`/watch/${id}`}>
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt='Capa'
          className={styles.couver}
        />
        {/* <img src='https://img.youtube.com/vi/B_nq7VTJZds/mqdefault.jpg' alt='Capa' /> */}
      </Link>

      <figure className={styles.icon}>
        <img
          src={iconFavorite}
          alt='Ícone'
          onClick={changeIcon}
        />
      </figure>
    </section>
  );
};

export default Card;
