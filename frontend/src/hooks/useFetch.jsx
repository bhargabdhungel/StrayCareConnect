import { useEffect, useState } from "react";
import fetchData from "../helpers/fetchData";
import toast from 'react-hot-toast'

export default function useFetch(run = true, method, params = null, path, body = null) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const resp = await fetchData({
          method,
          url: import.meta.env.VITE_LINK + path,
          token: localStorage.getItem('token'),
          body,
          params
        })

        setResponse(resp)

        setLoading(false)
      } catch (error) {
        setLoading(false);
        toast.error('Check your internet connection!')
      }
    }
    if (run) getData();
    else setLoading(false);
  }, [path, method, run, body, params]);
  return { loading, response };
}