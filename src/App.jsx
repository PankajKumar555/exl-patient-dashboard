import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
// import NavBar from "./components/NavBar";
import Login from "./pages/login/Login";
import PatientDashboard from "./pages/patient/PatientDashboard";
import ProviderDashboard from "./pages/provider/ProviderDashboard";
import CoordinatorDashboard from "./pages/coordinator/CoordinatorDashboard";
import InsuranceDashboard from "./pages/insurance/InsuranceDashboard";
import CaregiverDashboard from "./pages/caregiver/CaregiverDashboard";
import EmergencyScreen from "./pages/emergency/EmergencyScreen";

const ProtectedRoute = ({ element, role }) => {
  const userRole = localStorage.getItem("userRole");
  const location = useLocation();
  return userRole === role ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/patient/dashboard"
          element={
            <ProtectedRoute role="patient" element={<PatientDashboard />} />
          }
        />
        <Route
          path="/provider/dashboard"
          element={
            <ProtectedRoute role="provider" element={<ProviderDashboard />} />
          }
        />
        <Route
          path="/coordinator/dashboard"
          element={
            <ProtectedRoute
              role="coordinator"
              element={<CoordinatorDashboard />}
            />
          }
        />
        <Route
          path="/caregiver/dashboard"
          element={
            <ProtectedRoute role="caregiver" element={<CaregiverDashboard />} />
          }
        />
        <Route
          path="/insurance/dashboard"
          element={
            <ProtectedRoute role="insurance" element={<InsuranceDashboard />} />
          }
        />
        <Route
          path="/emergency"
          element={
            <ProtectedRoute role="emergency" element={<EmergencyScreen />} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
