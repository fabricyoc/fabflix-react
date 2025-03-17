import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useFavoriteContext } from '../../contexts/Favorites';

function Header() {

  const { favorite } = useFavoriteContext();

  return (
    <header className={styles.header}>
      <Link to="/">
        <span className={styles.logo}>FabFlix</span>
      </Link>
      <nav>
        {/* <a href='#'>Home</a> */}
        {/* <a href='#'>Assistir</a> */}
        <Link to="/">Home</Link>
        <Link to="/search">Pesquisar</Link>
        <Link to="/favorites">
          Favoritos 
        </Link>
        <span className={styles.numberFav}>({favorite.length})</span>
      </nav>

    </header>
  );
};

export default Header;