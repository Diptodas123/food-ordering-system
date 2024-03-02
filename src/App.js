import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Help from './components/Help/Help';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import { useAppContext } from './Context/AppContext';

function App() {

  const { mode } = useAppContext();

  return (
    <div className={mode === "dark" ? "dark-mode" : "light-mode"}>
      <Routes>
        <Route path='/' element=<Home />></Route>
        <Route path='/search' element=<Search />></Route>
        <Route path='/help' element=<Help />></Route>
        <Route path='/cart' element=<Cart />></Route>
        <Route path='/login' element=<Login />></Route>
      </Routes>
    </div>
  );
}

export default App;
