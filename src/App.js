import CategoriesProvider from './context/CategoriesContext';
import RecipeProvider from './context/RecipeContext';
import Form from './Components/Form';
import Header from './Components/Header';
import RecipeList from './Components/RecipeList';
import ModalProvider from './context/ModalContext';

function App () {
  return (
    <CategoriesProvider>
      <RecipeProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <RecipeList />
          </div>
        </ModalProvider>
      </RecipeProvider>
    </CategoriesProvider>
  );
}

export default App;

