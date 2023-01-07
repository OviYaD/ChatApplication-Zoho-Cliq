import React from 'react';
import MenuBar from "../../components/MenuBar/MenuBar";
import MainContainer from '../../components/MainContainer.jsx/MainContainer';

export default function AppContainer(){
    return <>
        <div style={{backgroundColor:"black"}}>
            <MenuBar></MenuBar>
            <MainContainer></MainContainer>
        </div>
    </>;
}