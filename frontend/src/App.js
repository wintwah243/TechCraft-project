import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Checkout from './Components/CheckOut/Checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/phone' element={<ShopCategory category="phone"/>}/>
        <Route path='/tablet' element={<ShopCategory  category="tablet"/>}/>
        <Route path='/laptop' element={<ShopCategory category="laptop"/>}/>
        <Route path='product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
 </div>
  );
}

export default App;
