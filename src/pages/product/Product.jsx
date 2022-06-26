import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useDispatch , useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import Axios from "axios";
import { userRequest } from "../../requestMethods";

export default function Product() {
  const dispatch = useDispatch();
  //category_id
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category_id, setCategory_id] = useState(0);


  const [Product, setProducts] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/products/${productId}`).then((response) => {
      setProducts(response.data);
    });
  },[]);

 var myObject =  Product.category

  for (var key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      var myOb =  myObject[key];
    }
  }
  // const [pStats, setPStats] = useState([]);

  // const product = useSelector((state) =>
  //   state.product.products.find((product) => product.id === productId)
  // );
  // const product = useSelector((state) =>
  //   state.product.products.find((product) => product._id === 1)
  // );
        
  
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

  // onChange={(e) => setPrice2(e.target.value) }
 



  const [name2, setName2] = useState("");
  const [price2, setPrice2] = useState(0);
  const [description2, setDescription2] = useState("");
  //const [image, setImage] = useState([]);

  const [category_id2, setCategory_id2] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);   


  const onSubImage= async (e)=>{
    let formData=new FormData();
    formData.append('image', file)

e.preventDefault()

await Axios.patch(`http://localhost:3001/api/products/img/${productId}`,formData);
document.getElementById('fileinput').value = null

setFile(null)
window.location.reload(false);
// console.log(res.data)
 
  } 

  

const onSubName= async (e)=>{
  let formData=new FormData();

  formData.append("name", name2);
e.preventDefault()

await Axios.patch(`http://localhost:3001/api/products/${productId}`,formData);

window.location.reload(false);
}


const onSubPrice= async (e)=>{
  let formData=new FormData();
  formData.append("price", price2);
  // formData.append("description", description2);
e.preventDefault()

await Axios.patch(`http://localhost:3001/api/products/${productId}`,formData);
window.location.reload(false);
} 
const onSubDisc= async (e)=>{
  let formData=new FormData();
 
  formData.append("description", description2);
e.preventDefault()

await Axios.patch(`http://localhost:3001/api/products/${productId}`,formData);

window.location.reload(false);
} 

const onSubCat= async (e)=>{
  let formData=new FormData();
  formData.append("category_id", category_id2);
  // formData.append("description", description2);
e.preventDefault()

await Axios.patch(`http://localhost:3001/api/products/${productId}`,formData);
window.location.reload(false);

} 

// const getInit = ()=>{
//   const value = "1" ;
//   return value;
//  }
// const [value, setValue] = useState(getInit);
// const handelCh = (e) =>{
//   setValue(e.target.value)
// }

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
          <h1 className="productTitle">Product</h1>
          <Link to="/newproduct">
            <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            {/* <Chart data={pStats} dataKey="Sales" title="Sales Performance" /> */}
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img className="productInfoImg" src= {`http://localhost:3001/${Product.image}`} alt=""/>
              <span className="productName">{Product.name}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">{Product.id}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">description:</span>
                <span className="productInfoValue">{Product.description}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Price:</span>
                <span className="productInfoValue">{Product.price} $</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Category: </span>
                <span className="productInfoValue">{myOb}</span> 
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Product Name</label>
              <input type="text" placeholder={Product.name}
               onChange={(e) => setName2(e.target.value)} />
                 <button className="productButton-1" onClick={onSubName}>Update</button>
                 <div></div>
              <label>Product Description</label>
              <input type="text" placeholder={Product.description}  onChange={(e) => setDescription2(e.target.value)}/>
              <button className="productButton-1" onClick={onSubDisc}>Update</button>
              <label>Price</label>
              <input type="text" placeholder={Product.price}   onChange={(e) => setPrice2(e.target.value) }/>
              <button className="productButton-1" onClick={onSubPrice}>Update</button>
              <label>Category ID</label>
              <select  id="category_id2" value={category_id2} onChange={(e) => setCategory_id2(e.target.value)} >
                <option value="1" >Cids close</option>
                <option value="2">Shirtes</option>
                <option value="3">Mean close</option>
                <option value="4">Jenzz</option>
                <option value="5">Caps</option>
                <option value="6">womoon close</option>
                <option value="7">old mean close</option>
                
              </select> 
              
              <input type="text" placeholder={Product.category_id}   onChange={(e) => setCategory_id2(e.target.value) }/>
              <button className="productButton-1" onClick={onSubCat}>Update</button>
              {/* <label>Product Category</label>
              <input type="number" placeholder={Product.category_id}  onChange={(e) => setCategory_id2(e.target.value)}/> */}
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img src= {`http://localhost:3001/${Product.image}`} alt="" className="productUploadImg" />
                <label for="file">
                  <Publish />
                </label>
                <input type="file" name = "image" id="fileinput" onChange={selectedHandler} />
              </div>
              <button className="productButton" onClick={onSubImage}>Update</button>
            </div>
          </form>
        </div>
      </div>
    );
   
  

}

