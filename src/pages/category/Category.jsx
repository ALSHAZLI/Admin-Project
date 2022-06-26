import { Link, useLocation } from "react-router-dom";
import "./category.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useDispatch , useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import Axios from "axios";
import { userRequest } from "../../requestMethods";

export default function Category() {
  const dispatch = useDispatch();
  //category_id
  const location = useLocation();
  const categoryId = location.pathname.split("/")[2];
 
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category_id, setCategory_id] = useState(0);


  const [Category, setCategorys] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/categories/${categoryId}`).then((response) => {
        setCategorys(response.data);
    });
  },[]);


  
  const [file, setFile] = useState(null);

  const selectedHandler = e => {
    setFile(e.target.files[0])
  }

  const sendHandler = () => {
    if(!file){
      alert('you must upload file')
      return
    }
 
  }

  
  const [category_name, setCategory_name] = useState("");
  // const [category_name, setCategory_name] = useState("");
  //const [image, setImage] = useState([]);

  



  const onSub= async (e)=>{
    let formData=new FormData();
    formData.append('image', file)
    // formData.append("category_name", category_name);
   

e.preventDefault()

await Axios.patch(`http://localhost:3001/api/categories/img/${categoryId}`,formData);
document.getElementById('fileinput').value = null

setFile(null)
// console.log(res.data)
window.location.reload(false);
  }
  const onSubName= async (e)=>{
    let formData=new FormData();
    
    formData.append("category_name", category_name);
   

e.preventDefault()

await Axios.patch(`http://localhost:3001/api/categories/${categoryId}`,formData);

window.location.reload(false);
  }
  

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //       const res = await userRequest.get("orders/income?pid=" + productId);
  //       const list = res.data.sort((a,b)=>{
  //           return a._id - b._id
  //       })
  //       list.map((item) =>
  //         setPStats((prev) => [
  //           ...prev,
  //           { name: MONTHS[item._id - 1], Sales: item.total },
  //         ])
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getStats();
  // }, [productId, MONTHS]);

  // {productList.map((val, key) => {  

    return (
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Category</h1>
          <Link to="/newCategory">
            <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            {/* <Chart data={pStats} dataKey="Sales" title="Sales Performance" /> */}
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img className="productInfoImg" src= {`http://localhost:3001/${Category.image}`} alt=""/>
              <span className="productName">{Category.category_name}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">{Category.id}</span>
              </div>
              
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Category Name 0</label>
              <input 
              type="text" name = "category_name" value={category_name}
             placeholder="jeans,skirts"   required="true"
              onChange={(e) => setCategory_name(e.target.value)} />
               <button className="productButton-1" onClick={onSubName}>Update</button>
              
              
            
              {/* <label>Product Category</label>
              <input type="number" placeholder={Product.category_id}  onChange={(e) => setCategory_id2(e.target.value)}/> */}
             
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img src= {`http://localhost:3001/${Category.image}`} alt="" className="productUploadImg" />
               
                <label>Image</label>
          <input
            type="file"
            name="image"
            // value={image}
            required = "true"
            id="fileinput" onChange={selectedHandler}
          />
              </div>
              <button className="productButton" onClick={onSub}>Update</button>
            </div>
          </form>
        </div>
      </div>
    );
   
  

}

