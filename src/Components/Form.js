import React, {useContext, useState} from 'react'
import {CategoriesContext} from './context/CategoriesContext'
import {RecipeContext} from './context/RecipeContext'

const Form = () => {
  const {categories} = useContext(CategoriesContext)
  const {setSearchRecipe, saveSearch} = useContext(RecipeContext)

  const [search, setSearch] = useState({
    name: '',
    category: ''
  })

  const getRecipe = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchRecipe(search)
    saveSearch(true)
  }

  return (
    <form className="col-12"
      onSubmit={handleSubmit}
    >
      <fieldset className="text-center">
        <legend>Search cocktails by category or ingredient</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Search by ingredient"
            onChange={getRecipe}
          />
        </div>
        <div className="col-md-4 mb-2">
          <select
            name="category"
            className="form-control"
            onChange={getRecipe}
          >
            <option value="">Select category</option>
            {categories.map(category => (
              <option
                key={category.strCategory}
                value={category.strCategory}
              >
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Search recipes" />
        </div>
      </div>
    </form>
  )
}

export default Form
