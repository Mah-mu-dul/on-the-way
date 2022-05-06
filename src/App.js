import './App.css';
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom';
import Footer from './pages/Common/Footer/Footer';
import Login from './pages/Login/Login';
import Header from './pages/Common/Header/Header';
import Signup from './pages/Signup/Signup';
import Blogs from './pages/Blogs/Blogs';
import Notfound from './pages/Notfound';
import Chackout from './pages/Private/Chackout';
import Services from './pages/Home/Services/Services';
import About from './pages/About/About';
import RequreAuth from './pages/Login/RequreAuth/RequreAuth';
import Feedback from './pages/Feedback/Feedback';
function App() {
  return (
    <div >

      <Header></Header>


      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Signup></Signup>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/Home' element={<Feedback></Feedback>}></Route>
        
        <Route path='/chackout/:servicesId' element={
          <RequreAuth><Chackout></Chackout></RequreAuth>}></Route>
    
    
          <Route path='/Chackout' element={
          <RequreAuth><Chackout></Chackout></RequreAuth>
          }></Route>
      
      


        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    

      <Footer></Footer>



    </div>
  );
}

export default App;
