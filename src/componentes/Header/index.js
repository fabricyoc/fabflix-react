import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <span>FabFlix</span>
      </Link>
      <nav>
        {/* <a href='#'>Home</a> */}
        {/* <a href='#'>Assistir</a> */}
        <Link to="/">Home</Link>
        <Link to="/watch">Assistir</Link>
        <Link to="/search">Pesquisar</Link>
      </nav>
    </header>
  );
};

export default Header;