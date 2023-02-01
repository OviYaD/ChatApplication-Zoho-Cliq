import React, { useEffect } from 'react';
import MenuBar from "../../components/MenuBar/MenuBar";
import MainContainer from '../../components/MainContainer/MainContainer';
import { initSocket } from '../../SocketListeners/connect';

export default function AppContainer() {
  useEffect(() => {
    initSocket();
  }, [])

  return <>
    <div style={{ backgroundColor: "black", position: "fixed", width: "100%", fontFamily: "zoho-puvi-regular" }}>
      <MenuBar></MenuBar>
      <MainContainer></MainContainer>
    </div>
  </>;

}