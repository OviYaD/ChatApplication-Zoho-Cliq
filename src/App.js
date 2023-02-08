import React, { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { SignUp } from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import AppContainer from "./pages/AppContainer/AppContainer";
import Router from "./Routes/Router";
import { getProfile } from "./api/authentication/user";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
  import 'react-toastify/dist/ReactToastify.css';
  import { Worker } from '@react-pdf-viewer/core';

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
            const userInfo = await getProfile();
            if (userInfo.status) {
                dispatch(setUser(userInfo.data.profile));
            } else {
                localStorage.removeItem("token");
                // navigate("/signin");
            }
        }
        if(localStorage.getItem("token")){
          fetchUser();
        }
  }, []);
  
  return (
    <div className="App">
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">

      <Router />
    </Worker>
      <ToastContainer />
    </div>
  );
}

export default App;
