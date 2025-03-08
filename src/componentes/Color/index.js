import { useState } from 'react';
import styles from './Color.module.css';



function Color() {
  const [cor, setCor] = useState("#000000");

  function pegarCor(e) {
    setCor(e.target.value);
  }

  return (
    <div className={styles.color}>
      <h2>Utilizando o Hook useState</h2>
      Selecione uma cor:
      <input
        type='color'
        onChange={pegarCor}
      />
      <div
        className={styles.coloring}
        style={
          { backgroundColor: cor }
        }
      ></div>
    </div>
  );
};

export default Color;