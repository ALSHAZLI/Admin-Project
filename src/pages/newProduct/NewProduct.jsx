import { useState } from "react";
import "./newProduct.css";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { publicRequest ,userRequest} from "../../requestMethods";
import Axios from "axios";
export default function NewProduct() {
  const [inputs, setInputs] = useState({});
 // const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();




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

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  //const [image, setImage] = useState([]);

  const [category_id, setCategory_id] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);



  const onSub= async (e)=>{
    let formData=new FormData();
    formData.append('image', file)
    // formData.append("imgae",image[0])
    // formData.append("newimg",img[0])
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category_id", category_id);
   

e.preventDefault()

await userRequest.post("http://localhost:3001/api/products",formData);
document.getElementById('fileinput').value = null

setFile(null)
// console.log(res.data)
 
  }


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" >
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            name="image"
            // value={image}
            id="fileinput" onChange={selectedHandler}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="namel"
            value={name}
            type="text"
            placeholder="Apple Airpods"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="description"
            type="text"
            value={description}
            placeholder="description..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="addProductItem" setCategory_id>
          <label>Price</label>
          <input
            name="price"
            type="number"
            value={price}
            placeholder="100"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="addProductItem"  >
          <label>Categories</label>
          <input type="text" name = "category_id" value={category_id} placeholder="jeans,skirts"   onChange={(e) => setCategory_id(e.target.value)} />
        </div>
        {/* <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div> */}
        <button  className="addProductButton" onClick={onSub}>
          Create
        </button>
      </form>
    </div>
  );
}
