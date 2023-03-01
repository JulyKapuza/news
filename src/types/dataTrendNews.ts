export interface DataTrendNews {
    id: number;
    abstract: string;
    title: string;
    media: {
      "media-metadata": {
        url: string;
      }[];
    }[];
}
