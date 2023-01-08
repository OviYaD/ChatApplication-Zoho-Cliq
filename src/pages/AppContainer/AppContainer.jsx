import React,{useEffect} from 'react';
import MenuBar from "../../components/MenuBar/MenuBar";
import MainContainer from '../../components/MainContainer.jsx/MainContainer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 
export default function AppContainer(){
    const user = useSelector((state)=>state.user);
    const navigate = useNavigate();


        return <>
            <div style={{backgroundColor:"black"}}>
                <MenuBar></MenuBar>
                <MainContainer></MainContainer>
            </div>
        </>;
    
}