import { fetchNews } from "../components/services/api";
import { useState, useEffect, useRef } from "react";
import { NewsList } from "../components/NewsList";
import Button from "../components/Button";
import { INews } from "../models";

export default function News() {
  const [news, setNews] = useState<INews[]>([]);
  const [page, setPage] = useState(1);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    } //костиль чи можна переписати

    try {
      fetchNews(page).then((responceNews) => {
        setNews((prevNews) => [...prevNews, ...responceNews]);
      });
    } catch (error) {
      console.log(error)
    }
  }, [page]);

  function deleteNews(newsId: number) {
    setNews((state) =>
      state.filter((info: { id: number }) => info.id !== newsId)
    );
  }

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <main>
      <h1>News</h1>
      {news && <NewsList news={news} onDelete={deleteNews} />}
      <Button onLoadMore={onLoadMore} />
    </main>
  );
}
