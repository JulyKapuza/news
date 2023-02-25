import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";
import Loader from "./Loader/Loader";
import { INews } from "../interfaces";
import { request } from "../axios/axios_utils";
import {ButtonDelete} from "./ButtonDelete";

const fetchNews = ({ pageParam = 1 }) => {
  return request({ url: `/posts?_limit=2&_page=${pageParam}` });
};

export const NewsItemQR = () => {
  const {
    isLoading,
    data,
    isError,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(["news"], fetchNews, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 20) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <p>{(error as Error).message}</p>;
  }

  return (
    <>
      <div>
        {data?.pages.map(
          (group, i) => {
            return (
              <Fragment key={i}>
                {group.data.map((item: INews) => (
                  <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                    <ButtonDelete data={data} id={item.id} />
                  </div>
                ))}
              </Fragment>
            );
          }
        )}
      </div>
      <div>
        <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
          Load more
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};
