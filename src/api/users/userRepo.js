import  Repository  from "../Repository";
import APIName from "../endPoints";
import axios from "axios";

let cancelToken;

export const userRepo = {
  GetUSers(payload) {
    return Repository.get(APIName.GetProperty);
  },

};
