import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {

    let user =  JSON.parse(localStorage.getItem("users")) || [];
    
    if (user.find((user) => user.isLoggedin === true)) {
        return <Outlet />;
    }

    return <Navigate to="/login" />;
}

