import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Current from "./pages/Current";
import Wacthlist from "./pages/Watchlist";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import ProtectedRoute from "./auth/protected-route";
import LogoutBtn from './components/LogoutBtn';
import Profile from './components/Profile';

function App() {

    // const { isLoading } = useAuth0();
    // if (isLoading) {
    //     return <Loading />;
    // }

    return (
        <>
            <Nav />
             <Routes> 
                <Route path="/" element={<Login />} />
                <Route path="/current" element={<ProtectedRoute element={Current} />} />
                <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
                <Route path="/watchlist" element={<ProtectedRoute element={Wacthlist} />} />
                <Route path="*" element={<NoMatch />} /> 
             </Routes>
        </>
    );
}

export default App;
