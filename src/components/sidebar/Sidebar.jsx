import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";



export default function Sidebar() {
 
  let Navigate = useNavigate();
  const [LoginStatus, setLoginStatus] = useState("")
  const handleClick = (e) => {
    e.preventDefault();
    Axios.get('http://localhost:3001/api/logout', {
    }).then((response) => {

        if (response.status === 400 ) {
          setLoginStatus(response.data.message)
          console.log("Unsuccessful")
          // alert('Wrong Credentials')
         


        } else {
          setLoginStatus(response.data)
          console.log("Successful")
          localStorage.clear("zxcv", JSON.stringify(response.data));
          // alert('Sucess Registration')
          window.location.reload(false);
          Navigate('/login')
          }
        }
      )
    }



  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li> */}
            {/* <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/categories" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Categories
              </li>
            </Link>
            
            {/* <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li> */}
            {/* <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li> */}
          </ul>
        </div>
        <button   style={{ padding: 10, width:100, borderRadius: 10, color: "rgba(255, 0, 106, 0.705)", cursor: "pointer"}}
         onClick = {handleClick}>
        LogOut
      </button>
        {/* <div className="sidebarMenu"> */}
          {/* <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
