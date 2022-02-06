import {Route, Routes} from "react-router-dom";
import RegistrationPage from "../Registration/RegistrationPage";
import LoginPage from "../Login/LoginPage";
import HomePage from "../HomePage/HomePage";
import Game from "../Game/Game";
import React from "react";


function AppRoutes() {

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/registration" element={<RegistrationPage/>}/>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/game" element={<Game/>}/>
            </Routes>
        </div>
    );
}


export default AppRoutes