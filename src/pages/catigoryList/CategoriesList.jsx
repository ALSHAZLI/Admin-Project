
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { deleteCats, getUsers } from "../../redux/apiCalls";
import { useEffect, useState } from "react";
import { publicRequest ,userRequest} from "../../requestMethods";
import "./productList.css";
import {format} from "timeago.js"

export default function ProductList() {
  const dispatch = useDispatch();
  //const users = useSelector((state) => state.user.users);

  // useEffect(() => {
  //   getUsers(dispatch);
  // }, [dispatch]);

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      try {
        const res = await userRequest.get("categories");
        setCats(res.data);
      } catch {}
    };
    getCats();
  }, []);



  
  const handleDelete = (id) => {

    deleteCats(id, dispatch);
    window.location.reload(false);
  };
  return(
  <div className="widgetLg">
  <h3 className="widgetLgTitle">Latest categories</h3>
  <table className="widgetLgTable">
    <tr className="widgetLgTr">
      <th className="widgetLgTh">category ID</th>
      {/* <th className="widgetLgTh">Date</th> */}
      <th className="widgetLgTh">category Name</th>
      <th className="widgetLgTh">category Actions</th>
      
      
    </tr>
    {cats.map((cat) => (
      <tr className="widgetLgTr" key={cat.id}>
        <td className="widgetLgUser">
          <span className="widgetLgName">{cat.id}</span>
        </td>
       
        <td className="widgetLgAmount">
        <img className="productListImg" src={`http://localhost:3001/${cat.image}`} />
        <span className="widgetLgName">{cat.category_name}</span>
        </td>
        
        <>
            <Link to={"/category/" + cat.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
               onClick={() => handleDelete(cat.id)}
            />
          </>
      </tr>
    ))}
  </table>
</div>
);

  // return (
  //   <div className="widgetLg">
  //   <h3 className="widgetLgTitle">Latest transactions</h3>
  //   <table className="widgetLgTable">
  //   <div className="widgetSm">
  //     <span className="widgetSmTitle">New Join Members</span>
  //     <ul className="widgetSmList">
  //       {users.map((user) => (
  //         <li className="widgetSmListItem" key={user.id}>
  //           <img
  //             src={
  //               user.img ||
  //               "data:image/jpeg;base64,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"
  //               // "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
  //             }
  //             alt=""
  //             className="widgetSmImg"
  //           />
  //           <div className="widgetSmImg" >
  //             <span className="widgetSmImg">Name:{user.fullname}</span>
  //           </div>
  //           <div className="widgetSmListItem">
  //             <span className="widgetSmImg">phone:{user.phone}</span>
  //           </div>
  //           <button className="widgetSmButton">
  //             <span className="widgetSmIcon" />
  //             {user.id}
  //           </button>
  //           <button className="widgetSmButton">
  //             <span className="widgetSmIcon" />
  //             Display
  //           </button>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  //   </table>
  //   </div>
  // );


// category
  // const columns = [
    
  //   { field: "_id",
  //    headerName: "ID",
  //     width: 220,
  //     renderCell: (params) => {
  //       return (
  //         <div className="productListItem">
  //           <img className="productListId"/>
  //           {params.row.id}
  //         </div>
  //       );
  //     },
  //  },
  //   {
  //     field: "product",
  //     headerName: "Product",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="productListItem">
            
  //           <img className="productListImg"  />
  //           fghfhfghgf
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "inStock",
  //    headerName: "category",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="productListItem">
  //           <img className="productListId"/>
  //           {params.row.fullname}
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "inStock",
  //   headerName: "category",
  //    width: 200,
  //    renderCell: (params) => {
  //      return (
  //        <div className="productListItem">
  //          <img className="productListId"/>
  //          {params.row.phone}
  //        </div>
  //      );
  //    },
  //  },
  //   // {
  //   //   field: "price",
  //   //   headerName: "Price",
  //   //   width: 160,
  //   // },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={"/product/" + params.row.id}>
  //             <button className="productListEdit">Edit</button>
  //           </Link>
  //           <DeleteOutline
  //             className="productListDelete"
  //             onClick={() => handleDelete(params.row.id)}
  //           />
  //         </>
  //       );
  //     },
  //   },
    
  // ];

  // return (
  //   <div className="productList">
  //     <DataGrid
  //       rows={users}
  //       disableSelectionOnClick
  //       columns={columns}
  //       getRowId={(row) => row.id}
  //        pageSize={50}
  //       checkboxSelection
  //     />
  //   </div>
  // );
}




// import "./userList.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteUsers, getUsers } from "../../redux/apiCalls";

// export default function UserList() {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.user.users);
//   //const [data, setData] = useState(userRows);
//   useEffect(() => {
//     getUsers(dispatch);
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     deleteUsers(id, dispatch);
//   };

//   // const handleDelete = (id) => {
//   //   setData(data.filter((item) => item.id !== id));
//   // };
  
//   const columns = [
//     { field: "id", headerName: "ID", width: 90 },
//     {
//       field: "user",
//       headerName: "User",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="userListUser">
//             <img className="userListImg" />
//             {params.row.fullname}
//           </div>
//         );
//       },
//     },
//     { field: "email", headerName: "Email", width: 200 ,
//     renderCell: (params) => {
//       return (
//         <div className="userListUser">
//           <img className="userListImg" />
//           {params.row.phone}
//         </div>
//       );
//     },
//   },
//     // {
//     //   field: "status",
//     //   headerName: "Status",
//     //   width: 120,
//     // },
//     // {
//     //   field: "transaction",
//     //   headerName: "Transaction Volume",
//     //   width: 160,
//     // },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={"/user/" + params.row.id}>
//               <button className="userListEdit">Edit</button>
//             </Link>
//             <DeleteOutline
//               className="userListDelete"
//               onClick={() => handleDelete(params.row.id)}
//             />
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="UserList">
//       <DataGrid
//         rows={users}
//         disableSelectionOnClick
//         columns={columns}
//         pageSize={80}
//         checkboxSelection
//       />
//     </div>
//   );
// }





// import "./productList.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteProduct, getCat } from "../../redux/apiCalls";


// export default function CategoriesList() {

  

//   const dispatch = useDispatch();
//   const categories = useSelector((state) => state.categorie.categories);

//   useEffect(() => {
//     getCat(dispatch);
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     deleteProduct(id, dispatch);
//   };
// // category
//   const columns = [
//     { field: "_id",
//      headerName: "ID",
//       width: 220,
//       renderCell: (params) => {
//         return (
//           <div className="productListItem">
//             <img className="productListId"/>
//             {params.row.id}
//           </div>
//         );
//       },
//    },
//     // {
//     //   field: "categories",
//     //   headerName: "categories",
//     //   width: 200,
//     //   renderCell: (params) => {
//     //     return (
//     //       <div className="productListItem">
            
//     //         <img className="productListImg" src={`http://localhost:3001/${params.row.image}`} />
            
//     //       </div>
//     //     );
//     //   },
//     // },
//     { field: "inStock",
//      headerName: "category",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="productListItem">
//             <img className="productListId"/>
//             {params.row.category_name}
//           </div>
//         );
//       },
//     },
//     // {
//     //   field: "price",
//     //   headerName: "Price",
//     //   width: 160,
//     // },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={"/product/" + params.row.id}>
//               <button className="productListEdit">Edit</button>
//             </Link>
//             <DeleteOutline
//               className="productListDelete"
//               onClick={() => handleDelete(params.row.id)}
//             />
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="productList">
//       <DataGrid
//         rows={categories}
//         disableSelectionOnClick
//         columns={columns}
//         getRowId={(row) => row.id}
//         pageSize={20}
//         checkboxSelection
//       />
//     </div>
//   );
// }
