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
            <Route path="/Firebase-Testing-00" element={<Home />} />
            <Route path="/Firebase-Testing-00/Home" element={<Home />} />
            <Route
              path="/Firebase-Testing-00/Login"
              element={
                user ? <Navigate to="/Firebase-Testing-00/Profile" /> : <Login />
              }
            />
            <Route
              path="/Firebase-Testing-00/Signup"
              element={
                user ? (
                  <Navigate to="/Firebase-Testing-00/Profile" />
                ) : (
                  <Signup />
                )
              }
            />
            <Route
              path="/Firebase-Testing-00/Profile"
              element={
                user ? <Profile /> : <Navigate to="/Firebase-Testing-00/Login" />
              }
            />
            <Route path="/Firebase-Testing-00/*" element={<Error />} />
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
