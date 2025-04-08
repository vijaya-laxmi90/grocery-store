import React ,{useState }from 'react'
import Navbar from './Components/NavBar/Navbar';
import {Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Placedorder from './Pages/Placedorder/Placedorder'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import ExploreMenu from './Components/ExploreMenu/ExploreMenu'
import Fooddisplay from './Components/Fooddisplay/Fooddisplay'
import FoodItem from './Components/FoodItem/FoodItem'
import StorecontextProvider from './context/Storecontext';
import AppDownload from './Components/AppDownload/AppDownload'
import LoginPopup from './Components/LoginPopup/LoginPopup'


const App = () => {
  const [category, setCategory] = useState("All");
  const[showLogin,setShowLogin]=useState(false);

  return (
    <StorecontextProvider>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Order' element={<Placedorder/>}/>
        </Routes>
        
        {/* <ExploreMenu category={category} setCategory={setCategory} />
        <Fooddisplay category={category} /><FoodItem/> */}
        <AppDownload/>
      </div>
      <Footer/>
    </StorecontextProvider>
    
  )
}

export default App 
