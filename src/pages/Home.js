import { useNavigate, Link } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    const handleNavigateToSignin = () => {
        navigate("/signin")
    }

    return(
        <>
            <h1>Home</h1>
            <button onClick={handleNavigateToSignin}>Click to Sign In</button>
            <Link to="/profile">Profile</Link>
        </>
    )
}