import styles from './Category.module.css';
// import videos from "../ json/videos.json";
import videos from '../../json/videos.json';

/**
 * Sem o EXPORT na constante e na funções os arquivos externos não conseguem exergá-lo
 */

// exporta a const CATEGORIES de acordo com o arquivo json
export const categories = [...new Set(videos.map(video => video.categoria))];

// filtrar videos de categoria X
export function filterCategory(id) {
  return videos.filter(
    video => video.categoria == categories[id]
  );
}

function Category({ category, children }) {
  return (
    <section className={styles.category}>

      <h2>{category}</h2>
      
      <div>
        {children}
      </div>
    
    </section>
  );
};

export default Category;

