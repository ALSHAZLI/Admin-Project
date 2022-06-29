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

const NotFound = () => <h1>This is Nothing hear Sure!</h1>;

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
  var isLoggedIn = localStorage.getItem("zxcv");
  const admin = useSelector((state) => state.zxcv);
//  const auht = useSelector((state) => state.user.currentUser.is_admin = 1);

  return (
   
 <Router>
    <Routes >
      
    <Route  path="/" exact element={<Login  /> } />
    
    {isLoggedIn && (
      <>
          
              
              <Route  path="/home" exact element={(
                <>
                <Topbar />
                <div className="container">
                <Sidebar />
                 <Home /> 
                 </div>
                 </>
                 )} />
              <Route path="/users" element={ 
                (
                  <>
                  <Topbar />
                  <div className="container">
                  <Sidebar />
                   <UserList /> 
                   </div>
                   </>
                   )
              } />
              <Route path="/user/:userId" element= {
                 (
                  <>
                  <Topbar />
                  <div className="container">
                  <Sidebar />
                   <User /> 
                   </div>
                   </>
                   )
              } />
              <Route path="/newUser" element={ 
                  (
                    <>
                    <Topbar />
                    <div className="container">
                    <Sidebar />
                     <NewUser /> 
                     </div>
                     </>
                     )
                } />
              <Route path="/newCategory" element={
                  (
                    <>
                    <Topbar />
                    <div className="container">
                    <Sidebar />
                     <NewCategory /> 
                     </div>
                     </>
                     )
                } />
              <Route path="/products" element={
                (
                  <>
                  <Topbar />
                  <div className="container">
                  <Sidebar />
                   <ProductList /> 
                   </div>
                   </>
                   )
                }/>
              <Route path="/product/:productId"  element={ 
                 (
                  <>
                  <Topbar />
                  <div className="container">
                  <Sidebar />
                   <Product /> 
                   </div>
                   </>
                   )
                } /> 
              <Route path="/category/:categoryId" element={
                (
                  <>
                  <Topbar />
                  <div className="container">
                  <Sidebar />
                   <Category /> 
                   </div>
                   </>
                   )
                } /> 
              <Route path="/categories" element={
                (
                  <>
                  <Topbar />
                  <div className="container">
                  <Sidebar />
                   <CategoriesList /> 
                   </div>
                   </>
                   )
               } /> 
              <Route path="/newproduct" element={ 
                (
                  <>
                  <Topbar />
                  <div className="container">
                  <Sidebar />
                   <NewProduct /> 
                   </div>
                   </>
                   )
              } />
             
              </>   
    )}
    <Route path='*' element={<NotFound />} />
              </Routes >
              
            
      
    </Router>
   
  );
}

export default App;


       {/* <Topbar />
            <div className="container">
              <Sidebar /> */}
              
              {/* <Route exact path="/" render={()=> this.auht ? <Home />   : <Login /> }/> */}
               {/* </div>
              </>   */}
              {/* )} */}