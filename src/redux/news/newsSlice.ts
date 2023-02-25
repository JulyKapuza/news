import { createSlice } from "@reduxjs/toolkit";
import { fetchNews, deleteNews } from "./operation";
import { INews } from "../../interfaces";

interface INewsState {
  news: INews[];
  updatedPage: number;
  isLoading: boolean;
  error: string | null;
}

const initialState = {
  news: [],
  updatedPage: 1,
  isLoading: false,
  error: null,
} as INewsState;

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (bulder) => {
    bulder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        if(state.updatedPage === 1){
            state.news = action.payload;
            state.isLoading = false;
        } else{
            state.news.push(...action.payload)
            state.isLoading = false;
        }
        
      })
      .addCase(deleteNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
          const newLocal = (oneNews:any) => oneNews.id !== action.payload;// виправив VC
        state.news = state.news.filter(
          newLocal
        );
      });
  },
  reducers: {
    changePage: (state, action) => {
      state.updatedPage = action.payload;
      state.isLoading = false;
  },
  },
});
export const { changePage } = newsSlice.actions
export default newsSlice.reducer;
