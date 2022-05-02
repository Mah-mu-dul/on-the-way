import './App.css';
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login/Login';
import Header from './pages/Common/Header/Header';
import Signup from './pages/Signup/Signup';
function App() {
  return (
    <div >

      <Header></Header>

      <Signup></Signup>
      <Login></Login>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>

      </Routes>


      <Footer></Footer>



    </div>
  );
}

export default App;
