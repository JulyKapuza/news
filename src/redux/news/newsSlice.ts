import { createSlice } from '@reduxjs/toolkit'
// import { INews } from '../../interfaces'; 
import { fetchNews } from './operation';
import { INews } from '../../interfaces/newsInterface';


interface INewsState {
  news: INews[]
  isLoading: boolean,
  error: string| null,
}

const initialState = {
    news: [],
    isLoading: false,
    error: null
} as INewsState

const NewsSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: (bulder) =>{
        bulder
        .addCase(fetchNews.pending, (state)=>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchNews.fulfilled, (state, action)=>{
            state.news = action.payload;
            state.isLoading = false;
        })
       
       
    },
    reducers:{}
})

export default NewsSlice.reducer
