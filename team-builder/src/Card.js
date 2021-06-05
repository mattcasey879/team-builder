import React from 'react'

export default function Card(props) {
    const [ friends ] = Object.values(props)

    if (!friends) {
        <h1>Loading Data.....</h1>
    }
    return (
        <div>
            {friends.map(friend => (
                <div key={friend.username}>
                    Username: {friend.username}
                    Email: {friend.email}
                    Role": {friend.role}
                </div>
            ))}
        </div>
    )
}