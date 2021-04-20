import React, {useContext} from 'react'
import {ModalContext} from '../context/ModalContext'

export const Recipe = ({recipe}) => {
  const {setIdRecipe} = useContext(ModalContext)

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        <img
          src={recipe.strDrinkThumb}
          alt={recipe.strDrink}
          className="card-img-top" />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={
              () => {setIdRecipe(recipe.idDrink)}
            }
          >
            View recipe
          </button>
        </div>
      </div>
    </div>
  )
}
