// https://reqres.in/
// https://www.youtube.com/watch?v=RnKSA-51kpI&t=1655s

import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PplCard from './PplCard';

export default function MediaCard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setUsers(
                await fetch('https://reqres.in/api/users?page=2')
                .then(res => res.json())
                .then(res => res.data)
                .catch(err => console.log(err, 'Fetch warning!!'))
            )
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
                {users.map(user =>
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
                )}
            </Grid>
        </React.Fragment>
      );
}