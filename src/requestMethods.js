import axios from "axios";

const BASE_URL = "http://localhost:3001/api/";
const TOKEN = JSON.parse(localStorage.getItem("zxcv")); 
// {"user":{
  //"id":14,"fullname":"scscs",
 // "password":"$2a$10$5GHS8TcF5Y3zwKcu.X5ap.uxtHusyvk2tyNARQrVyRqgzWEChhBM6",
 //"phone":"0137183798","is_admin":0,"createdAt":"2022-06-23","updatedAt":"2022-06-23"},
 //"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjAxMzcxODM3OTgiLCJpZCI6MTQsImlzX2FkbWluIjowLCJp
 //YXQiOjE2NTY0NTczMzIsImV4cCI6MTY1OTU2NzczMn0.9M6HWL0uF-uZxvQLB04RNaSwTWNLbT4I9-niulcWSAE"}
//const TOKEN = JSON.parse(JSON.parse (localStorage.getItem("zxcv")).user).token; 
//const TOKEN  = localStorage.getItem("zxcv").user.token;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { 'x-auth-token': ` ${TOKEN}` },
});
