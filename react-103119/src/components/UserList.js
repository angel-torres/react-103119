import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

export default function UserList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                console.log(response);
                setData(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    return (
        <div>
            {
                data.map((user) => (
                    <UserCard user={user} />
                ))
            }
        </div>
    )
}
