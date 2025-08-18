import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ProtectedRoute = ({ Component }) => {
    const navigate = useNavigate()

    useEffect(() => {
        let loginStatus = JSON.parse(localStorage.getItem("isLoggedIn")) || false
        if (!loginStatus) {
            navigate("/login")
        } else {
            navigate("/trips")
        }
    }, [])

    return (
        <>
            <Component />
        </>
    )
}

export default ProtectedRoute