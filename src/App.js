import CategoriesProvider from './Components/context/CategoriesContext';
import Form from './Components/Form';
import Header from './Components/Header';

function App () {
  return (
    <CategoriesProvider>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </CategoriesProvider>
  );
}

export default App;

