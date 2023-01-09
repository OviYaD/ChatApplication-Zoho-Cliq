import React, { useEffect, useState } from "react";
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

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await getProfile();
      dispatch(setUser(userInfo));
    };
    if (localStorage.getItem("token") !== null) {
      fetchUser();
      navigate("/main");
    }
  }, []);
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
