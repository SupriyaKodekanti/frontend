import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './Component/AdminLogin';
import Home from './Component/Home';
import Product from './Component/Product';
import Cart from './Component/Cart';
import Help from './Component/Help';
import BuyPage from './Component/BuyPage';
import PersonalInfo from './Component/PersonalInfo';
import AddProduct from './Component/AddProduct';
import Welcome from './Component/Welcome';
import Account from './Component/Account';
import AdminAccount from './Component/AdminAccount';
import VendorList from './Component/VendorsList';
import CustomersList from './Component/CustomersList';
import VendorAccount from './Component/VendorAccount';
import VendorRegister from './Component/VendorRegister';
import UserLogin from './Component/UserLogin';
import VendorLogin from './Component/VendorLogin';
import { ImageOutlined } from '@mui/icons-material';
import Register from './Component/Register';
//  edited in V-R and in route
// divided login into 3 captcha and admin login and vendor login and name changed login into User login 
// in route also added those components
function App() {
  return (
    <>
    <Routes>
       
        <Route path='/' element={<Welcome />} />
        <Route path='/PersonalInfo' element={<PersonalInfo/>}/>
        <Route path='/Account' element={<Account/>}/>
        <Route path='VendorRegister' element={<VendorRegister />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/Register' element ={<Register/>}/>
        <Route path='/UserLogin' element={<UserLogin/>}/>
        <Route path='/VendorLogin' element={<VendorLogin/>}/>
    
        <Route path='/Product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Help' element={<Help />} />
        <Route path='/BuyPage' element={<BuyPage />} />
       
        
        <Route path='/AddProduct' element={<AddProduct />} />
       
        <Route path='/AdminAccount' element={<AdminAccount/>}/>
      
        <Route path='Vendors' element={<VendorList/>}/>
        <Route path='Customers' element={<CustomersList/>}/>
        <Route path='/VendorAccount' element={<VendorAccount />} />
    </Routes>
    </>
  );
}
 
export default App;