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
 import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import { requestPermission } from './firebase';

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
            const userInfo = await getProfile();
            if (userInfo.status) {
                dispatch(setUser(userInfo.data.profile));
                localStorage.setItem("!@#$%^&*(user_id)*&^%$#@!",userInfo.data.profile.user_id);
            } else {
                localStorage.removeItem("token");
                // navigate("/signin");
            }
        }
        if(localStorage.getItem("token")){
          fetchUser();
        }
        requestPermission();
  }, []);
  
  return (
    <div className="App">
      <Router />
      <ToastContainer  transition={Slide}/>
    </div>
  );
}

export default App;
