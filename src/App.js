import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Help from './components/Help/Help';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import LoadingBar from 'react-top-loading-bar'
import { useAppContext } from './Context/AppContext';
import Signup from './components/Signup/Signup';
import { ToastContainer } from 'react-toastify';

function App() {

  const { loadingProgress } = useAppContext();

  return (
    <>
      <ToastContainer />
      <LoadingBar height={6} color={'black'} progress={loadingProgress} />
      <Routes>
        <Route path='/' element=<Home />></Route>
        <Route path='/search' element=<Search />></Route>
        <Route path='/help' element=<Help />></Route>
        <Route path='/cart' element=<Cart />></Route>
        <Route path='/login' element=<Login />></Route>
        <Route path='/signup' element=<Signup />></Route>
      </Routes>
    </>
  );
}

export default App;
