import { INews } from "../interfaces";
// import { deleteNews } from "../redux/news/operation";
// import { useAppDispatch } from "../hooks/hooks";


interface NewsProp {
  news: INews[];
}
export function NewsList({ news}: NewsProp) {
  // const dispatch = useAppDispatch()
  return (
    <ul>
      {news.map(({ id, title, body }) => {
        return (
          <li key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
            {/* <button type="button" onClick={()=>dispatch(deleteNews(id))}>
        Delete
      </button> */}
          </li>
        );
      })}
    </ul>
  );
}
