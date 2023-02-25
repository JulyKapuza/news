import { useEffect, useState } from "react"
import Loader from "./Loader/Loader"
import { fetchNews } from "./services/api"


export const NewsItem =()=>{
    const [isLoading, setIsLoading] = useState(true)
    const [news, setNews] = useState([])

    useEffect(()=>{
      fetchNews().then((responceNews) => {
        setNews(responceNews);
        setIsLoading(false)
      });

    }, [])

    if(isLoading){
        return <Loader/>
    }
 return <>
 <h2>News</h2>
 <ul>
 {news.map(({ id, title, body }) => {
        return (
          <li key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
            <button type="button">
        Delete
      </button>
          </li>
        );
      })}
      </ul>
 </>
}