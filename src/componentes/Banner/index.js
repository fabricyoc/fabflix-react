import styles from './Banner.module.css';

function Banner({ imagem }) {
  return (
    <div
      style={{ backgroundImage: `url(/imagens/banner-${imagem}.png)` }}
      className={styles.banner}
    >
    </div>
  );
};

export default Banner;