import { Link } from "react-router-dom";

export default function Banner () {
    return (
        <div className="banner">
            <h1>PD Games</h1>
            <Link to="/users">Users</Link>
            <Link to="/">Home</Link>
            
        </div>
    )
}