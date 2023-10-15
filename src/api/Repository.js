import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/";
const Repository = axios.create({
  baseURL:URL,
  headers:{
    "community-name":"HOMECLIQ"
  }
});


export default Repository;
