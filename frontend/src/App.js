
import './App.css';
import LoginSignup from './pages/LoginSignup.jsx';
import cart from './pages/cart.jsx';


import Home from './pages/Home.jsx';

import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Aboutus from './pages/Aboutus.jsx';

import Navbar from './components/Navbar/Navbar.jsx';

import Allproducts from './pages/Allproducts.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Login from './pages/Login.jsx';
import Contactus from './pages/Contactus.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>

    <BrowserRouter>
      <Routes>
        
        <Route path='/home' element={<Home/>}/>
       
        <Route path='/about-us' element={<Aboutus/>} />
        <Route path='/LoginSignup' element={<LoginSignup/>} />
        <Route path='/products' element={<Allproducts/>} />
        <Route path='/details' element={<ProductDetails/>} />
        <Route path='/Cart' element={<cart/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/contactus' element={<Contactus/>} />
        


      </Routes>
    </BrowserRouter>


     
    </div>
   
  );
}

export default App;
