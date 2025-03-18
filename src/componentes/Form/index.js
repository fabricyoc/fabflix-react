import { useState } from 'react';
import { categories } from '../Category';
import styles from './Form.module.css';

function Form() {

  const [url, setUrl] = useState('');
  const [categoria, setCategoria] = useState('');
  // criar uma lista para armazenar o cadastro de vídeos
  const [videos, setVideos] = useState([]);
  // armazenar os erros gerados para serem exibidos aos usuários
  const [error, setError] = useState();

  function valideURL(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;

    if (!regex.test(url) || url.legth < 43) {
      setError('ERRO: URL inválida!');
      return false;
    } else {
      return url.substring(32, 43);
    }

  }

  function onSave(e) {
    // evita o comportamento padrão que é atualizar a página
    e.preventDefault();

    console.log(url, categoria);

    // validar categoria
    if (!categoria || categoria === '-') {
      console.log('Escolha uma categoria');
      setError('ERRO: Escolha uma categoria!');
      return;
    } else {
      setError('');
    }

    // validar url
    const urlVideo = valideURL(url);

    if (urlVideo && categoria) {
      // salvar os dados

      // guardo a url e a categoria (de forma temporária)
      const novoVideo = { url, categoria };
      setVideos([...videos, novoVideo]); // novoVideo sempre será adicionar ao final

      // armazenando de forma persistente
      localStorage.setItem('videos', JSON.stringify([...videos, novoVideo]));

      // limpa o form
      setUrl('');
      setCategoria('');
    } else {
      setError('ERRO: URL inválida!');
    }

  }


  return (
    <section className={styles.container}>
      <h2>Cadastro de Vídeos</h2>
      <form onSubmit={onSave}>

        <div>
          <label>URL do vídeo</label>
          <input
            type='text'
            placeholder='Digite a URL do vídeo'
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            minLength='43'
            maxLength='43'
          />
        </div>

        <div>
          <label>Categoria</label>
          <select
            required
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          // onChange={teste}
          >
            <option value='-'>Selecione uma categoria</option>
            {
              categories.map(i => <option value={i} key={i}>{i}</option>)
            }
          </select>
        </div>

        <div>
          <button>Cadastrar</button>
        </div>

        <div>
          {error}
        </div>

      </form>

    </section>
  );
};

export default Form;

