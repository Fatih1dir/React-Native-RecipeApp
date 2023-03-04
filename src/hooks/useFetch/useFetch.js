import React,{ useEffect,useState } from "react";
import axios from 'axios';

function useFetch(url){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    const fetchData = async () => {
        try {
          const {data: responseData} = await axios.get(url);
          setData(responseData);
          setLoading(false);
          setError(false);
        } catch (err) {
          setError(true);
          setLoading(false);
        };
      };

    useEffect(() => {
      fetchData()
    }, []);

    return {data,loading,error}
}
export default useFetch;