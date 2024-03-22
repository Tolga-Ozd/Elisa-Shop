import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails';
import { Route, Routes} from 'react-router-dom'
function App() {
 
  return (

    <Routes>
      <Route path="/"  exact element={<Home />}/>
      <Route path="/products/:id" element={<ProductDetails />}/>
    </Routes>

  );
}

export default App;