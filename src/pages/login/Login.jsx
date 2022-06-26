import { useState } from "react";
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
  const [LoginStatus, setLoginStatus] = useState("")
  const handleClick = (e,redirectPath = "/") => {
    e.preventDefault();
    Axios.post('http://localhost:3001/api/login', {

      phone: phone,
      password: password,

    }).then((response) => {

        if (response.status === 404 ) {
          setLoginStatus(response.data.message)
          console.log("Unsuccessful")
          // alert('Wrong Credentials')
         


        } else {
          navigate('/',{replace:true})
          setLoginStatus(response.data)
        
          console.log("Successful")
          localStorage.setItem("zxcv", JSON.stringify(response.data));
          // alert('Sucess Registration')
          
          // return <Navigate to = {redirectPath} replace />;
          // return <Navigate to = {"/users"} replace />;
          window.location.reload(false);
           
          }
        }
      )
    }

  return (
   
    <div
      style={{
        height: "100vh",
        marginTop: "90px",
        display: "flex",
        marginRight: "600px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width:100 }}>
        Login
      </button>
    </div>
  
  );
  
};

export default Login;
