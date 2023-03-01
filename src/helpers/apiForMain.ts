import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchNewsMain = async () => {
  const { data } = await axios.get(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
  );

  return data;
};
