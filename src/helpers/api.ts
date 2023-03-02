import axios from "axios";


// axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.baseURL ="https://breaking-news.herokuapp.com/api"

export const fetchPosts = async (limit: number) => {
  const { data } = await axios.get(
    `/news?_limit=${limit}`
  );

  return data;
};


export const deleteOneNews = async (id: string) => {
    return await axios.delete(`/news/${id}`);
  };