import Global from "./Global";
import axios from "axios";
let getData = async() => {
  let response = await axios.get(`${Global.baseURL}/product`);        
  return response.data
}

export default getData;