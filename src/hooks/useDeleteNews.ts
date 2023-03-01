import { useMutation } from "react-query";
import { deleteOneNews } from "../helpers/api";

export const useDeleteNews = () => {
  return useMutation(deleteOneNews);
};
