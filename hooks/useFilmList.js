import { useState } from 'react';
import axios from 'axios';
import qs from 'qs';

const API_URL = 'http://www.omdbapi.com?apikey=faf7e5bb';

const useFilmList = () => {
  const [data, setData] = useState([]);
  const fetch = () => {
    axios.get(API_URL).then((res) => {
      console.log(res);
    });
  };

  return {
    fetch,
  };
};

export default useFilmList;
