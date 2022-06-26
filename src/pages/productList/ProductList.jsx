import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };
// category
  const columns = [
    { field: "_id",
     headerName: "ID",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListId"/>
            {params.row.id}
          </div>
        );
      },
   },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            
            <img className="productListImg" src={`http://localhost:3001/${params.row.image}`} />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "inStock",
     headerName: "category",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListId"/>
            {params.row.category.category_name}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row.id}
        pageSize={20}
        checkboxSelection
      />
    </div>
  );
}
