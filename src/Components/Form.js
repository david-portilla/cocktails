import React, {useContext} from 'react'
import {CategoriesContext} from './context/CategoriesContext'

const Form = () => {
  const {categories} = useContext(CategoriesContext)

  return (
    <form className="col-12">
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
          />
        </div>
        <div className="col-md-4 mb-2">
          <select
            name="category"
            className="form-control"
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
