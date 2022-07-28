import axios from "axios";
import { useEffect, useState } from "react";

import UserCard from "./UserCard";

export default function UserGallery () {
    const [users, setUsers] =useState([])

    useEffect(() => {
        axios.get('https://pde-games.herokuapp.com/api/users').then(res => {
            setUsers(res.data.users);
        })
    }, [])

    return(
        <div className="user-gallery">
        {users.map(user => {
            return <UserCard key={user.username} user={user}/>
        })}
        </div>
    )

}