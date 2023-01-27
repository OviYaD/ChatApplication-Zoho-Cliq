import React, { useEffect } from 'react';
import MenuBar from "../../components/MenuBar/MenuBar";
import MainContainer from '../../components/MainContainer/MainContainer';

export default function AppContainer() {

  return <>
    <div style={{ backgroundColor: "black", position: "fixed", width: "100%" }}>
      <MenuBar></MenuBar>
      <MainContainer></MainContainer>
    </div>
  </>;

}