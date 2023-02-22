import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { INews } from "../../interfaces";


axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";


export const fetchNews = createAsyncThunk<INews[], undefined, {rejectValue: string}>(
  "news/fetchNews",
  async (_, thunkAPI) => {
    try {
        const response = await axios.get(`/posts?_page=1&_limit=5`);
       return response.data;
    } catch (error:any) {
     return  thunkAPI.rejectWithValue(error.message)  
    }
    
  }
);
