import React, { useState, useEffect } from 'react';
import { centerInfo } from '../../api';


const useFetch = url => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        async function fetchData () {
            const response = await centerInfo.mapList();
            setData(response);
            console.log(response);
            // const data = await setData(response.json());
            //   const [item] = data.results;
            //   setData(item);
            setLoading(false);
        }
        fetchData();
    }, []);
  
    return { data, loading, error };
};

function Transform () {
    const { data, loading, error } = useFetch();
    console.log(data);

    return (
        <React.Fragment>
            { data }
        </React.Fragment>
    );
}

export default Transform;