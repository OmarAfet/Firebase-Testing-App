import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Error from "./Pages/Error";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUserData } from "./Firebase";

export default function App() {
  const user = fetchUserData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user !== undefined) {
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }
  }, [user]);

  return (
    <>
      {!isLoading && (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route
              path="/Login"
              element={user ? <Navigate to="/Profile" /> : <Login />}
            />
            <Route
              path="/Signup"
              element={user ? <Navigate to="/Profile" /> : <Signup />}
            />
            <Route
              path="/Profile"
              element={user ? <Profile /> : <Navigate to="/Login" />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      )}
      <ToastContainer
        position="bottom-right"
        draggable={false}
        closeOnClick={false}
        transition={Slide}
      />
    </>
  );
}
