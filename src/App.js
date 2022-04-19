import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Servises from './Components/Servises/Servises';
import DataNotFound from './Components/DataNotFound/DataNotFound';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import AboutMe from './Components/AboutMe/AboutMe';
import Blog from './Components/Blog/Blog';
import ChakeOut from './Components/ChakeOut/ChakeOut';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/servises' element={<Servises></Servises>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/chakeout' element={<ChakeOut></ChakeOut>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element ={<DataNotFound></DataNotFound>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
