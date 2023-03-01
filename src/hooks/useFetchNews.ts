import { useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { fetchPosts } from "../helpers/api";

export const useFetchNews = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(() => {
    return searchParams.get("page") || 1;
  });
  
  const countOfPage = searchParams.get("page");
  const LIMIT = 5;
  
  const { ...rest } = useQuery({
    queryKey: ["news"],
    queryFn: ({ pageParam = page }) => {
      setSearchParams({ page: pageParam });
      const POSTS_TO_VIEW = pageParam * LIMIT;
      return fetchPosts(POSTS_TO_VIEW);
    },
    onSuccess: () => {
      setPage(Number(countOfPage) + 1);
    },
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });

  return { ...rest };
};
