import { Route, Routes } from "react-router";
import SignUp from "./pages/SignUp";
import AdminDash from "./pages/AdminDash";
import SalesDash from "./pages/SalesDash";
import UserDash from "./pages/UserDash";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<AdminDash />} />
          <Route path="/sales" element={<SalesDash />} />
          <Route path="/user" element={<UserDash />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
