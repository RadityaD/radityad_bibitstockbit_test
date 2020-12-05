import { useState, useEffect } from 'react';
import { API_KEY } from '@/constants/index';
import axios from 'axios';
import { useSelector } from 'react-redux';
import qs from 'qs';

const API_URL = 'http://www.omdbapi.com/';

const useFilmList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const store = useSelector((state) => state.filmdb);

  console.log({ store });

  useEffect(() => {
    const fetch = async () => {
      const paramsWithKey = {
        ...store,
        apikey: API_KEY,
      };
      const qsString = qs.stringify(paramsWithKey, { addQueryPrefix: true });

      setLoading(true);
      setError(false);

      const res = await axios.get(`${API_URL}${qsString}`);
      const responseData = res.data;

      setLoading(false);
      console.log(responseData.Search);
      if (!responseData.Error) {
        setData(responseData);
      } else {
        setError(true);
        if (responseData.Error) setMessage(responseData.Error);
      }
    };

    fetch();
  }, [store]);

  return {
    data,
    loading,
    error,
    message,
  };
};

export default useFilmList;
