import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // ✅ correct import

export default function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000; // seconds

        if (decoded.exp < currentTime) {
            localStorage.removeItem("token");
            return <Navigate to="/login" replace />;
        }

        return children; // valid token → show dashboard
    } catch (error) {
        localStorage.removeItem("token");
        return <Navigate to="/login" replace />;
    }
}
