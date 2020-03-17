// https://reqres.in/
// https://www.youtube.com/watch?v=RnKSA-51kpI&t=1655s
// https://www.youtube.com/watch?v=IYCa1F-OWmk 11:41

import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import CircularProgress from '@material-ui/core/CircularProgress';

import PplCard from './PplCard';

export default function MediaCard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage, setPostsPerPage] = useState(10);

    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setUsers(
                await fetch('https://reqres.in/api/users?page=1')
                .then(res => res.json())
                .then(res => res.data)
                .catch(err => console.log(err, 'Fetch warning!!'))
            )
            setLoading(false);
        }
        fetchData();
    }, [])
    return (
        <React.Fragment>
            <h3>THE TRUE BEAUTY OF MATERIAL UI</h3>
            <Grid
                container
                spacing={10}
                style={{padding: '24px'}}
            >
                {
                    loading ? 
                    <CircularProgress /> :
                    users.map(user =>
                        <Grid
                        key={user.id}
                            item
                            xs={12} sm={6} md={4} lg={4} xl={3}>
                            <PplCard
                                key={user.id}
                                email={user.email}
                                firstName={user.first_name}
                                lastName={user.last_name}
                                avatar={user.avatar}
                            />
                        </Grid>
                    )
                }
            </Grid>
            {
                loading ? 
                '' : 
                <Pagination 
                    count={10} 
                    variant="outlined" 
                    color="primary"
                />
            }
        </React.Fragment>
      );
}