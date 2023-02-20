import { INews } from "../models";

interface NewsProp {
  news: INews[];
  onDelete: any
}
export function NewsList({ news, onDelete }: NewsProp) {
  return (
    <ul>
      {news.map(({ id, title, body }) => {
        return (
          <li key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
            <button type="button" onClick={()=>{onDelete(id)}}>
        Delete
      </button>
          </li>
        );
      })}
    </ul>
  );
}
