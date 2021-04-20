import React, {useContext} from 'react'
import {RecipeContext} from '../context/RecipeContext'
import {Recipe} from './Recipe'

const RecipeList = () => {
  const {recipes} = useContext(RecipeContext)
  console.log(recipes)

  return (
    <div className="row">
      {recipes.map(item => (
        <Recipe key={item.idDrink} recipe={item} />
      ))
      }
    </div>
  )
}

export default RecipeList
