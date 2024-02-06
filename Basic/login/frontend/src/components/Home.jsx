import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const Logout = () => {
        window.localStorage.removeItem('isLogedIn');
        navigate('/');
    };

    return (
        <div>
            <h2>Homepage</h2>
            <button onClick={() => Logout()}>Logout</button>
        </div>
    )
}