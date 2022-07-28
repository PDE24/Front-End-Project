
export default function CurrentUserCard ({user}) {
    return (
        <div  className="current-user">
            <img className="current-avatar" src={user.avatar_url} alt={`${user.username} avatar`}/>
            <p className="current-name">{user.username}</p>
        </div>
    )
}