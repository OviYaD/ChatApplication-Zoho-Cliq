import React from 'react';
import {Routes,Route} from "react-router-dom";
import AppContainer from '../pages/AppContainer/AppContainer';
import SignIn from '../pages/SignIn/SignIn';
import { SignUp } from '../pages/SignUp/SignUp';

export default function Router(){
    return <>
        <Routes>
            <Route path='/' element={<SignUp></SignUp>} />
            <Route path='/signin' element={<SignIn></SignIn>} />
            <Route path='/main' element={<AppContainer></AppContainer>} />
        </Routes>
    </>;
}