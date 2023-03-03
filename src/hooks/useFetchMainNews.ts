import { useQuery } from "react-query";
import { fetchNewsMain } from "../helpers/apiForMain";
import { DataTrendNews, SelectedDataOfNews } from "../types";



export const useFetchMainNews = () => {
  const { ...rest } = useQuery({
    queryKey: ["article"],
    queryFn: () => fetchNewsMain(),
    select: (data) => {
      const response: SelectedDataOfNews[] = data.results.map((item: DataTrendNews) => ({
        
        id: item.id,
        title: item.title,
        abstract: item.abstract,
        img: item.media?.[0]?.['media-metadata']?.[1]?.url
      }));
      console.log(response)
      return response;
    },
  });

  return { ...rest };
};
