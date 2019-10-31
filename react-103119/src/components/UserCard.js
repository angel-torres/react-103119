import React, { useEffect } from 'react'

export default function UserCard(props) {

    useEffect(() => {
        console.log(props)
    });

    return (
        <div style={{ border: "1px solid black" }}>
            <h1>{props.user.name}</h1>
            <p>{props.user.email}</p>
        </div>
    )
}
