import { useState, useCallback } from 'react';
import { API_KEY, API_URL } from '@/constants/index';
import axios from 'axios';
import qs from 'qs';

const useFilmDetail = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState([]);

  const fetch = useCallback(async (params) => {
    const paramsWithKey = {
      ...params,
      apikey: API_KEY,
    };
    const qsString = qs.stringify(paramsWithKey, { addQueryPrefix: true });

    setData([]);
    setLoading(true);
    setError(false);
    setMessage('');

    try {
      const res = await axios.get(`${API_URL}${qsString}`);
      setResponse(res);
      const responseData = res.data;

      setLoading(false);
      if (!responseData.Error) {
        setData(responseData);
      } else {
        setError(true);
        if (responseData.Error) setMessage(responseData.Error);
      }
    } catch (e) {
      console.error(e);
      setError(true);
      setMessage(e);
    }
  }, []);

  return {
    fetch,
    data,
    loading,
    error,
    message,
    response,
  };
};

export default useFilmDetail;
