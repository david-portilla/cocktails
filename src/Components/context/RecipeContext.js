import React, {createContext, useState} from 'react'

export const RecipeContext = createContext();

const RecipeProvider = (props) => {
  const [recipes, setRecipes] = useState([])
  const [searchRecipe, setSearchRecipe] = useState({
    name: '',
    category: ''
  })

  return (
    <RecipeContext.Provider
      value={{
        setSearchRecipe
      }}>
      {props.children}
    </RecipeContext.Provider>
  )

}
export default RecipeProvider