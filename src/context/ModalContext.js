import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

  const [idRecipe, setIdRecipe] = useState(null)
  const [recipeInfo, setRecipesInfo] = useState([])


  useEffect(() => {
    const getModalInfo = async () => {
      if(!idRecipe) return
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ idRecipe }`
      const result = await axios.get(URL)
      setRecipesInfo(result.data.drinks[0])
    }
    getModalInfo()
  }, [idRecipe])

  return (
    <ModalContext.Provider
      value={{
        recipeInfo,
        setIdRecipe,
        setRecipesInfo
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
