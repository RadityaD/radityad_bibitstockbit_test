import { useState, useCallback } from 'react';
import { API_KEY, API_URL } from '@/constants/index';
import axios from 'axios';
import qs from 'qs';

const useFilmList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
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
      const searchData = responseData?.Search || [];
      const totalData = responseData?.totalResults || 0;

      setLoading(false);
      if (!responseData.Error) {
        setData(searchData);
        setTotal(totalData);
      } else if (responseData.Error) {
        setError(true);
        setMessage(responseData.Error);
      }
    } catch (e) {
      console.error(e);
      setError(true);
      setMessage(e);
    }
  }, []);

  const loadMore = useCallback(
    async (params) => {
      const paramsWithKey = {
        ...params,
        apikey: API_KEY,
      };
      const qsString = qs.stringify(paramsWithKey, { addQueryPrefix: true });

      setLoading(true);
      setError(false);
      setMessage('');

      try {
        const res = await axios.get(`${API_URL}${qsString}`);
        setResponse(res);
        const responseData = res.data;
        const searchData = responseData?.Search || [];

        setLoading(false);
        if (!responseData.Error) {
          setData([...data, ...searchData]);
        } else if (responseData.Error) {
          setError(true);
          setMessage(responseData.Error);
        }
      } catch (e) {
        console.error(e);
        setError(true);
        setMessage(e);
      }
    },
    [data]
  );

  return {
    fetch,
    data,
    loading,
    error,
    message,
    response,
    loadMore,
    total,
  };
};

export default useFilmList;
