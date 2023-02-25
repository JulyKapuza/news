import { useQuery, useMutation, useQueryClient } from "react-query"
import axios from "axios"
import { INews } from "../interfaces";

interface IData {
  pages: {
    data: INews[];
    pageParam: number;
  }[];
  pageParams?: number[];
}


const deleteOneNews = (id: any)=>{
return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
};

export const useDeleteNews =()=>{
return useMutation(deleteOneNews)};

