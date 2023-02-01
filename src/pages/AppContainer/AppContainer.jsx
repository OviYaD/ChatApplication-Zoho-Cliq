import React, { useEffect } from 'react';
import MenuBar from "../../components/MenuBar/MenuBar";
import MainContainer from '../../components/MainContainer/MainContainer';
import { io } from "socket.io-client";

export default function AppContainer() {
  useEffect(() => {
    // console.log("socket testing");
    // const socket = io.connect("http://192.168.1.121:6969/", {
    //   query: { "token": localStorage.getItem("token") },
    //   'transports': ['websocket', 'polling'],
    // });
    // console.log(socket);
    // socket.on("connect", () => {
    //   console.log(socket.id);
    // });
    // socket.on("disconnect", () => {
    //   console.log(socket.id);
    // });

    // return () => {
    //   if (socket.readyState === 1) { // <-- This is important
    //     socket.close();

    //   }
    // }
  }, [])

  return <>
    <div style={{ backgroundColor: "black", position: "fixed", width: "100%", fontFamily: "zoho-puvi-regular" }}>
      <MenuBar></MenuBar>
      <MainContainer></MainContainer>
    </div>
  </>;

}