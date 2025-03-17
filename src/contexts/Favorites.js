import { createContext, useContext, useState } from "react";


// criamos um contexto chamado FavoritesContext
export const FavoritesContext = createContext();

// apenas para ajudar na depuração
FavoritesContext.displayName = "MyFavorites";

/**
 * Construímos um provider para armazenar e distribuir dados para outros componentes, adicionamos o export default e - com isso - não é necessário inserí-lo na última linha
 */
export default function FavoritesProvider({ children }) {
  // useState iniciando com uma lista vazia
  const [favorite, setFavorite] = useState([]);

  return (
    // necessário envolver os componentes (rotas) que utilizarão este contexto
    <FavoritesContext.Provider
      // value armazena quais dados o contexto vai compartilhar
      value={{ favorite, setFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

/**
 * Hook personalizado
 */
export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    // verifica se o item favorito já existe na lista
    const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id);

    //nova lista recebe a lista anterior (favorite)
    let newList = [...favorite];

    // se NÃO for repetido, adicionamos na lista
    if (!repeatedFavorite) {
      newList.push(newFavorite);
      return setFavorite(newList);
    }

    // se for repetido, removemos da lista
    newList = favorite.filter((fav) => fav.id !== newFavorite.id);
    return setFavorite(newList);
  }

  // retorno do Hook
  return {
    favorite, addFavorite
  }

}