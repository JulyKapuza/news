// import { fetchNews } from "../components/services/api";
import {  useEffect } from "react";
import { NewsList } from "../components/NewsList";
// import Button from "../components/Button";
// import { INews } from "../interfaces/newsInterface";
import { fetchNews } from "../redux/news/operation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";


export default function News() {
  // const [news, setNews] = useState<INews[]>([]);
  // const [page, setPage] = useState(1);
  // const isMounted = useRef(false);
  const news = useSelector((state:any)=>state.news.news);
  console.log(news)
  const dispatch = useDispatch<AppDispatch>()
  // const dispatch = useDispatch()

  useEffect(()=>{
     dispatch( fetchNews())
  }, [dispatch])

  // useEffect(() => {
  //   if (!isMounted.current) {
  //     isMounted.current = true;
  //     return;
  //   } //костиль чи можна переписати

  //   try {
  //     fetchNews(page).then((responceNews) => {
  //       setNews((prevNews) => [...prevNews, ...responceNews]);
  //     });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [page]);

  // function deleteNews(newsId: number): void {
  //   setNews((state) =>
  //     state.filter((info: { id: number }) => info.id !== newsId)
  //   );
  // }

  // const onLoadMore = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  return (
    <main>
      <h1>News</h1>
      {news && <NewsList news={news} 
      // onDelete={deleteNews} 
      />}
      {/* <Button onLoadMore={onLoadMore} /> */}
    </main>
  );
}
