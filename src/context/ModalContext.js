import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

  const [idRecipe, setIdRecipe] = useState(null)
  const [recipes, setRecipes] = useState([])


  useEffect(() => {
    const getModalInfo = async () => {
      if(!idRecipe) return
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ idRecipe }`
      const result = await axios.get(URL)
      setRecipes(result.data.drinks[0])
    }
    getModalInfo()
  }, [idRecipe])

  return (
    <ModalContext.Provider
      value={{
        setIdRecipe
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
