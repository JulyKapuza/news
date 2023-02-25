// import { fetchNews } from "../components/services/api";
import {  useEffect, useRef, useState } from "react";
import { NewsList } from "../components/NewsList";
import Button from "../components/Button";
// import { INews } from "../interfaces/newsInterface";
import { fetchNews } from "../redux/news/operation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { changePage } from "../redux/news/newsSlice";


export default function News() {
  const dispatch = useDispatch<AppDispatch>();

  const updatedPage = useSelector((state: any) => state.news.updatedPage);

  // const [page, setPage] = useState<number>(updatedPage);


  useEffect(() => {
      
     dispatch( fetchNews(updatedPage))
         
  }, [dispatch, updatedPage]);

  const news = useSelector((state:any)=>state.news.news);
  


  // function onLoadMore() {
  //   setPage((prevPage) => prevPage + 1);
  // }
  

  return (
    <main>
      <h1>News</h1>
      {news && <NewsList news={news} 
      
      />}
       {/* <button onClick={onLoadMore} type="button">
      LoadMore
    </button> */}
      <Button/>
    </main>
  );
}
