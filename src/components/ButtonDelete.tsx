import { useQueryClient } from "react-query";
import { useDeleteNews } from "../hooks";
import { IData, INews } from "../interfaces";

interface IProp {
  data: INews[] | any; // який тип
  id: string;
}

export const ButtonDelete = ({ data, id }: IProp) => {
  const queryClient = useQueryClient();

  const { mutate: deleteOneItem } = useDeleteNews();

  const handleDelete = (newsId: string) => {
    const newPagesArray: { data: INews[]; pageParam: number }[] = [];
    data?.pages.forEach((page: { data: INews[]; pageParam: number }) => {
      const newDataNews = page.data.filter(
        (item: { id: string }) => item.id !== newsId
      );
      newPagesArray.push({
        data: newDataNews,
        pageParam: page.pageParam,
      });
    });

    queryClient.setQueryData<IData>("news", (data) => ({
      pages: newPagesArray,
      pageParams: data?.pageParams,
    }));
    deleteOneItem(newsId);
  };

  return (
    <button onClick={() => handleDelete(id)} type="button">
      Delete
    </button>
  );
};
