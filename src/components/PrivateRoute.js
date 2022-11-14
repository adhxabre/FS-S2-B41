import { Outlet, Navigate } from 'react-router-dom'

export default function PrivateRoute() {
    const isSignin = true

    return(
        isSignin ? <Outlet /> : <Navigate to="/signin" />
    )
}