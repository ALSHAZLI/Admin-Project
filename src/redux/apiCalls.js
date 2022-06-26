import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
import {
  getCatStart,
  getCatSuccess,
  getCatFailure,
  deleteCatStart,
  deleteCatSuccess,
  deleteCatFailure,
  }
  from "./categoriesRedux"
import {
  getUserStart,
  getUserSuccess,
  getUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  addUserStart,
  addUserSuccess,
  addUserFailure,
} from "./userListRedux"

export const login = async (dispatch, user) => {

  dispatch(loginStart());
  try {
    const res = await userRequest.post("/login", user);
    dispatch(loginSuccess(res.data));
    
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const getCat = async (dispatch) => {
  dispatch(getCatStart());
  try {
    const res = await publicRequest.get("/categories");
    dispatch(getCatSuccess(res.data));
  } catch (err) {
    dispatch(getCatFailure());
  }
};

export const getOneProducts = async (id,dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get(`/products/${id}`);
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
     const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const deleteCats = async (id, dispatch) => {
  dispatch(deleteCatStart());
  try {
     const res = await userRequest.delete(`/categories/${id}`);
    dispatch(deleteCatSuccess(id));
  } catch (err) {
    dispatch(deleteCatFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get("/register");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

export const deleteUsers = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
     const res = await userRequest.delete(`/register/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const updateUsers = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    // update
    dispatch(updateUserSuccess({ id, user }));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
export const addUsers = async (user, dispatch) => {
  dispatch(addUserStart());
  try {
    const res = await userRequest.post(`/register`, user);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFailure());
  }
};