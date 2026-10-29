import { useNavigate } from "react-router";

export default function LogoutButton() {

    const navigate = useNavigate();

    const handleLogout = () => {

        let users =
            JSON.parse(localStorage.getItem("users")) || [];

        users = users.map((user) => ({
            ...user,
            isLoggedin: false
        }));

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        navigate("/login");
    };


    return (
        <button
            className="btn btn-outline-light"
            onClick={handleLogout}
        >
            Logout
        </button>
    );
}