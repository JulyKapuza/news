export default function Button({ onLoadMore }:any) {
    return (
      <button onClick={onLoadMore} type="button">
        LoadMore
      </button>
    );
  }