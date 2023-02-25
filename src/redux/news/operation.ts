import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { INews } from "../../interfaces";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const fetchNews = createAsyncThunk<
  INews[],
  number,
  { rejectValue: string }
>("news/fetchNews", async (page, thunkAPI) => {
  try {
    const response = await axios.get(`/posts?_page=${page}&_limit=2`);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const loadMoreNews = createAsyncThunk<
// number,
//   number,
//   { rejectValue: string }
// >("news/loadMoreNews", async (page, thunkAPI) => {
//   try {
//     const response = await axios.get(`/posts?_page=${page}&_limit=2`);
//     return response.data;
//   } catch (error: any) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

export const deleteNews = createAsyncThunk<
string,
string,
  { rejectValue: string }
>("news/deleteNews", async (newsId, {rejectWithValue}) => {
  try {
    const response = await axios.delete(`/posts/${newsId}`);

    return newsId;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
