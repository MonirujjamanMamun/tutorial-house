import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Servises from './Components/Servises/Servises';
import DataNotFound from './Components/DataNotFound/DataNotFound';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/servises' element={<Servises></Servises>}></Route>
        <Route path='*' element ={<DataNotFound></DataNotFound>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
