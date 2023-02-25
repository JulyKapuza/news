import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../redux/news/newsSlice";
import { AppDispatch } from "../redux/store";

export default function Button() {
  const dispath = useDispatch<AppDispatch>();

  const updatedPage = useSelector((state: any) => state.news.updatedPage);

  const [page, setPage] = useState<number>(updatedPage);
  // console.log("updatedPage", updatedPage);
  // console.log("page", page);

  useEffect(() => {
    dispath(changePage(page));
  }, [dispath, page]);

  function onLoadMore() {
    setPage((prevPage) => prevPage + 1);
  }
  return (
    <button onClick={onLoadMore} type="button">
      LoadMore
    </button>
  );
}
