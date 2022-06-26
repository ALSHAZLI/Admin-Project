import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Navigate, 
  Redirect,
  useNavigate, Outlet
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser"; 
import NewCategory from "./pages/newCategory/NewCategory"; 
import ProductList from "./pages/productList/ProductList";
import CategoriesList from "./pages/catigoryList/CategoriesList";
import Product from "./pages/product/Product"; 
import Category from "./pages/category/Category"; 
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

import { useSelector } from "react-redux";

var isLoggedIn = localStorage.getItem("zxcv");
const ProtectedRoutes = ({isLoggedIn,redirectPath = "/login"}) =>{
  if(!isLoggedIn) {
    return <Navigate to = {redirectPath} replace />;
  }
    return <Outlet />
  
}

function App() {
  // var admin = useSelector((state) => state.user.currentUser.is_admin);
  // var admin = null;
  
//  const auht = useSelector((state) => state.user.currentUser.is_admin = 1);

  return (
    
 <Router>

 
              <Topbar />
            <div className="container">
              <Sidebar />
              <Routes >
              <Route path="/login" exact element={<Login  /> } />
             
              
              {/* <Route exact path="/" render={()=> this.auht ? <Home />   : <Login /> }/> */}
      
          <Route element={<ProtectedRoutes isLoggedIn = {isLoggedIn}/>} >
              <Route path="/" element={ <Home /> } />
              <Route path="/users" element={<UserList />} />
            
              
              
              <Route path="/user/:userId" element= {<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/newCategory" element={<NewCategory />} />
              <Route path="/products" element={<ProductList />}/>
              <Route path="/product/:productId"  element={<Product />} /> 
              <Route path="/category/:categoryId" element={<Category />} /> 
              <Route path="/categories" element={<CategoriesList /> } /> 
              <Route path="/newproduct" element={<NewProduct />} />
              </Route>
              </Routes >
              
              </div>
      
    </Router>
    
  );
}

export default App;
