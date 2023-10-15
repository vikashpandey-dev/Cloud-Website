import { createAsyncThunk } from "@reduxjs/toolkit";
import { SetUsersData } from "../../store/users";
import APIName from "../endPoints";
import { userRepo } from "./userRepo";

export const GetUSers = createAsyncThunk(
  APIName.GetUSers,
  async (payload, thunkAPI) => {
    try {
      const response = await userRepo.GetUSers(payload);
      if (response.status == 200) {
        thunkAPI.dispatch(SetUsersData(response.data));
        return true;
      }
    } catch (err) {
      console.log(err);
    }
    return false;
  }
);
