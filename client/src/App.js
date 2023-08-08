import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Create from './components/create/Create';

import AddLectureCoverage from './components/addlecturecoverage/AddLectureCoverage';
import AddStudentAttendance from './components/addstudentattendance/AddStudentAttendance';

import LectureCoverage from './components/lecturecoverage/LectureCoverage';

import FoodCatalog from './components/foodCatalog/FoodCatalog'
import FoodDetails from './components/foodDetails/FoodDetails';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import {useLocation} from 'react-router-dom'
import { useEffect } from 'react';


function App() {

  const location = useLocation()
 
 useEffect(() => {
   window.scrollTo(0, 0)
 }, [location.pathname])

  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/food/:id' element={<FoodDetails/>}></Route>
          <Route path='/foods/:id' element={<FoodCatalog/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/addlecturecoverage' element={<AddLectureCoverage/>}></Route>
          <Route path='/addstudentattendance' element={<AddStudentAttendance/>}></Route>
          <Route path='/lecturecoverage' element={<LectureCoverage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
