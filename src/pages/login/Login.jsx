import { useState } from "react";
import {  ArrowUpward } from "@material-ui/icons";
import "./login.css";
import SvgComponent from "./SvgOn"; 
import SvgComponent2 from "./SvgTow"; 
import { useAlert } from 'react-alert'
import { useDispatch , useSelector} from "react-redux";
import { login } from "../../redux/apiCalls";
import { useNavigate ,Navigate} from "react-router-dom";
import Axios from "axios";
const Login = () => {

   let navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // let auht = useSelector((state) => state.user.currentUser.is_admin)
  // const handleClick = (e) => {
    
  //   e.preventDefault();
  //   login(dispatch, { phone, password });
  
  //   if(auht === 1 ){
  //     Navigate("/home")
  // }
  // Navigate("/")
  
  // };

  // var auth = null
  // const navigate = useNavigate()
  const [LoginStatus, setLoginStatus] = useState("");
  const [erro,setErro]=useState();
  const handleClick = (e,redirectPath = "/") => {
    e.preventDefault();
    Axios.post('http://localhost:3001/api/login', {

      phone: phone,
      password: password,

    }).then((response) => {
     // <Alert severity="error">This is an error alert — check it out!</Alert>
        if (response.status === 404 || response.status === 500) {
        //  alert('Wrong Credentials')
          setLoginStatus(response.data.message)
          console.log("Unsuccessful")
          setErro('Invalid Username or Password')

      
          
         
         


        } else {
          navigate('/home',{replace:true})
          setLoginStatus(response.data)
          setErro('sssss')
          console.log("Successful")
          localStorage.setItem("zxcv", JSON.stringify(response.data.token,response.data.user.is_admin));
          localStorage.setItem("zxcv2", JSON.stringify(response.data.user.is_admin));
          // alert('Sucess Registration')
          
          // return <Navigate to = {redirectPath} replace />;
          // return <Navigate to = {"/users"} replace />;
          window.location.reload(false);
           
          }
        }
      )
    }
   const ErrON = (e,error) =>{
      if(error){
        alert('Oh look, an alert!!!!')
      }
    }

  return (
   
    <div className="wrap">
    <div className="image">
      <SvgComponent alt="Hombre de negocios" className="image-man" />
    </div>

    <div className="login">
     
      <h1 className="login-title">Welcome</h1>
      

      <form className="login-form">
        <div className="form-group">
          <label className="form-label" for="phone Number">Phone Number</label>
            <input type="text" required className="form-input"  onChange={(e) => setPhone(e.target.value)}/>
        </div>

        <div className="form-group">
          <label className="form-label" for="password">Password</label>
            <input type="password" required className="form-input"  onChange={(e) => setPassword(e.target.value)}/>
        </div>
     
        <button type="submit" className="login-submit"   onClick={handleClick}>Login</button>
        <h1 className="login-title" >{erro}</h1>
      </form>

    </div>
  </div>
  
  );
  
};

export default Login;

// return (
   
//   <div
//     style={{
//       height: "100vh",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       // height: "100vh",
//       // marginTop: "90px",
//       // display: "flex",
//       // marginRight: "600px",
//       // flexDirection: "column",
//       // alignItems: "center",
//       // justifyContent: "start",
//     }}
//   >
    
//     <input
//       style={{ padding: 10, marginBottom: 20 }}
//       type="text"
//       placeholder="username"
//       onChange={(e) => setPhone(e.target.value)}
//     />
//     <input
//       style={{ padding: 10, marginBottom: 20 }}
//       type="password"
//       placeholder="password"
//       onChange={(e) => setPassword(e.target.value)}
//     />
//     <button onClick={handleClick} style={{ padding: 10, width:100 }}>
//       Login
//     </button>
//   </div>

// );





