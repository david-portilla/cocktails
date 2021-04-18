import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react'

export const RecipeContext = createContext();

const RecipeProvider = (props) => {
  const [recipes, setRecipes] = useState([])
  const [searchRecipe, setSearchRecipe] = useState({
    name: '',
    category: ''
  })

  const [search, saveSearch] = useState(false)

  const {name, category} = searchRecipe

  useEffect(() => {
    if(search) {
      const getRecipes = async () => {
        const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ name }&c=${ category }`
        const result = await axios.get(URL)
        console.log(result)
        setRecipes(result.data.drinks)
      }
      getRecipes()
    }
  }, [searchRecipe])

  return (
    <RecipeContext.Provider
      value={{
        setSearchRecipe,
        saveSearch
      }}>
      {props.children}
    </RecipeContext.Provider>
  )

}
export default RecipeProvider