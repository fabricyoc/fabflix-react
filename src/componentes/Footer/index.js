import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span><span className={styles.logo}>FabFlix</span> &copy; Todos os direitos reservados. Desenvolvido por Fabricyo 2025.</span>
    </footer>
  );
};

export default Footer;