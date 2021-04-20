import CategoriesProvider from './context/CategoriesContext';
import RecipeProvider from './context/RecipeContext';
import Form from './Components/Form';
import Header from './Components/Header';
import RecipeList from './Components/RecipeList';

function App () {
  return (
    <CategoriesProvider>
      <RecipeProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Form />
          </div>
          <RecipeList />
        </div>
      </RecipeProvider>
    </CategoriesProvider>
  );
}

export default App;

