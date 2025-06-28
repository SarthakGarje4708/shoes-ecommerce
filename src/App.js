import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route , Routes } from 'react-router-dom';
import Home from  './pages/Home';
import Products from  './pages/Products';
import  Product_det from  './pages/Product_det';
import Create_account from './pages/Create_account';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Checkout from "./pages/Checkout";
import Order_list from './pages/Order_list';
import Order_details from './pages/Order_details';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
         <Route path ='/' element={<Home />}></Route>
         <Route path='/products' element={<Products />}></Route>

        <Route path='/Create_account' element={<Create_account />}></Route>


         <Route path='/login' element={ <Login /> }></Route>
         <Route path="/product_det/:product_id" element={<Product_det />} />
         <Route path='/Cart' element={ <Cart /> }></Route>
         <Route path='/Checkout' element={ <Checkout /> }></Route>
         <Route path='/order_list' element={ <Order_list /> }></Route>
<Route path="/order_details/:order_id" element={<Order_details />} />

   </Routes>
   
   </BrowserRouter>
   
   
   
   </>
  );
}

export default App;
