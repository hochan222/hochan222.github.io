import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.create({
    url: 'https://test/api/cafe/list/today',
});

const useFetch = url => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
  
    useEffect((url) => {
        async function fetchData (url) {
            setLoading(true);
            // axios.get('https://reqres.in/api/users?page=2')
            //     .then(res => console.log(res));
            axios.get('http://api1.emmafit.co.kr/franchisee_maplist_json.do')
                .then(res => console.log(res));
            // const response = await centerInfo.mapList(url);
            // setData(response);
            // console.log(response);
            // const data = await setData(response.json());
            //   const [item] = data.results;
            //   setData(item);
            setLoading(false);
        }
        fetchData();
        // setData(fetchData());
    }, []);
  
    return { data, loading, error };
};

function Transform () {
    const { data, loading, error } = useFetch('franchisee_maplist_json.do');
    console.log(data);

    return (
        <React.Fragment>
            { data }
        </React.Fragment>
    );
}

export default Transform;