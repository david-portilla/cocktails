import CategoriesProvider from './Components/context/CategoriesContext';
import RecipeProvider from './Components/context/RecipeContext';
import Form from './Components/Form';
import Header from './Components/Header';

function App () {
  return (
    <CategoriesProvider>
      <RecipeProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Form />
          </div>
        </div>
      </RecipeProvider>
    </CategoriesProvider>
  );
}

export default App;

