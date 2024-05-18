import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import LoadingBar from 'react-top-loading-bar'
import { useAppContext } from './Context/AppContext';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';
import AdminDashboard from './components/Admin/Dashboard/AdminDashboard';
import AdminUsers from './components/Admin/Users/AdminUsers';
import AdminOrders from './components/Admin/Main/AdminOrders';
import AdminCoupon from './components/Admin/Main/AdminCoupons';
import AdminMenu from './components/Admin/Main/AdminMenu';
import AdminExtras from './components/Admin/Main/AdminExtra';
import AdminRestaurant from './components/Admin/Main/AdminRestaurants';
import AdminFinance from './components/Admin/Graph/AdminFinance';
import { ToastContainer } from 'react-toastify';
import RestaurantRegistration from './components/Restaurant/RestaurantRegistration';
import RestaurantPage from './components/Restaurant/RestaurantPage';
import AdminLogin from './components/Admin/Login/AdminLogin';
import Faq from './components/Help/Faq';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import RestaurantDashboard from './components/Restaurant/RestaurantDashboard';
import RestaurantExtras from './components/Restaurant/Options/RestaurantExtras';

function App() {

  const { loadingProgress } = useAppContext();

  return (
    <>
      <ToastContainer />
      <LoadingBar height={6} color={'black'} progress={loadingProgress} />
      <Routes>
        <Route path='/' element=<Home />></Route>
        <Route path='/search' element=<Search />></Route>
        <Route path='/help' element=<Faq />></Route>
        <Route path='/about' element=<About />></Route>
        <Route path='/cart' element=<Cart />></Route>
        <Route path='/login' element=<Login />></Route>
        <Route path='/signup' element=<Signup />></Route>
        <Route path='/profile' element=<Profile />></Route>
        <Route path='/contact' element=<Contact />></Route>
        
        <Route path='/partner-with-us' element={<RestaurantRegistration />} />
        <Route path='/restaurant-dashboard' element={<RestaurantDashboard />} />
        <Route path='/RestaurantAddMenu' element={<RestaurantExtras />} />
        <Route path='/restaurant/:restaurantId' element={<RestaurantPage />}></Route>

        <Route path='/Adminlogin' element={<AdminLogin />} />
        <Route path='/AdminDashboard' element={<AdminDashboard />} />
        <Route path='/AdminUsers' element={<AdminUsers />} />
        <Route path='/AdminOrders' element={<AdminOrders />} />
        <Route path='/AdminCoupons' element={<AdminCoupon />} />
        <Route path='/AdminMenu' element={<AdminMenu />} />
        <Route path='/AdminAddMenu' element={<AdminExtras />} />
        <Route path='/AdminRestaurants' element={<AdminRestaurant />} />
        <Route path='/AdminFinance' element={<AdminFinance />} />
      </Routes>
    </>
  );
}

export default App;
