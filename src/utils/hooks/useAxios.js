import { useEffect, useState } from "react";
import axios from "axios";

export const useAxios = (url) => {
  // data state from API response
  const [data, setData] = useState(null);

  useEffect(() => {
    const getDataFromApi = async () => {
      const apiResponse = await axios.get(url);
      console.log(apiResponse.data);
      setData(apiResponse.data);
    };
    getDataFromApi();
  }, [url]);

  return data;
};
