import { useState } from "react";
import "./newProduct.css";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import Axios from "axios";
export default function NewCategory() {
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

  
  const [category_name, setCategory_name] = useState("");
  // const [category_name, setCategory_name] = useState("");
  //const [image, setImage] = useState([]);

  



  const onSub= async (e)=>{
    let formData=new FormData();
    formData.append('image', file)
    formData.append("category_name", category_name);
   

e.preventDefault()

await Axios.post("http://localhost:3001/api/categories",formData);
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
          <label>category_name</label>
          <input type="text" name = "category_name" value={category_name}
           placeholder="jeans,skirts"  
            onChange={(e) => setCategory_name(e.target.value)} />
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
