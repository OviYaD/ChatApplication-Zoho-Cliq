import React, { useEffect } from 'react';
import MenuBar from "../../components/MenuBar/MenuBar";
import MainContainer from '../../components/MainContainer/MainContainer';
import { io } from "socket.io-client";

export default function AppContainer() {
  useEffect(() => {
    console.log("socket testing");
    const socket = io.connect("http://192.168.1.121/socket.io", {
      query: { token: localStorage.getItem("token") }
    });
    socket.on("connect", () => {
      console.log(socket.id);
    });

    socket.on("disconnect", () => {
      console.log(socket.id);
    });
  }, [])

  return <>
    <div style={{ backgroundColor: "black", position: "fixed", width: "100%" }}>
      <MenuBar></MenuBar>
      <MainContainer></MainContainer>
    </div>
  </>;

}