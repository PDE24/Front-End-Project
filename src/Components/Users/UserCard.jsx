import './User.css'
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';

export default function UserCard({user}) {

    const { setUser } = useContext(UserContext);

  return (
    <div className="user-card">
        <img className="avatar" src={user.avatar_url} alt={`${user.username} avatar`}/>
        <p>{user.username}</p>
        <p>{user.name}</p>
        <button className="button" onClick={() => {setUser(user)}}>Sign in</button>
    </div>
  )
}
