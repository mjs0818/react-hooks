const { useState, useEffect } = require('react');

const useFetch = (callback, url) => {
  const [loading, setLoading] = useState(false);
  const fetchInitialData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const initialData = await response.json();
    callback(initialData);
    setLoading(false);
  };
  useEffect(() => {
    fetchInitialData();
  }, []); // useEffect가 관찰할 대상이 [] (=null)이기 때문에 처음 한번만 실행이 됨
  return loading;
};

export default useFetch;
