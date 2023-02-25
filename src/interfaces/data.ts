import { INews } from "./newsInterface";

export interface IData {
    pages: {
      data: INews[];
      pageParam: number;
    }[];
    pageParams?: number[];
  }