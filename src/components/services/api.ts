import axios from "axios";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchNewsRQ = ()=>{
  return axios.get('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5')
}

export async function fetchNews() {
    const response = await axios.get(`/posts?_page=1&_limit=5`);
    return response.data;
    
  }
  // export async function fetchNews(page:number) {
  //   const response = await axios.get(`/posts?_page=${page}&_limit=2`);
  //   return response.data;
    
  // }

  // axios.defaults.baseURL ="https://newsapi.org/v2/everything?q=Apple&from=2023-02-20&sortBy=popularity&apiKey=API_KEY

