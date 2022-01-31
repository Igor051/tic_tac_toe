import {Route, Routes} from "react-router-dom";
import RegistrationPage from "../Registration/RegistrationPage";
import LoginPage from "../Login/LoginPage";

import React from "react";

import HomePage from "../HomePage/HomePage";

function AppRoutes() {

    return (
        <div>
            <Routes>
                <Route exact path = "/" element={<HomePage/>}/>
                <Route exact path="/registration" element={<RegistrationPage/>}/>
                <Route exact path="/login" element={<LoginPage/>}/>
            </Routes>
        </div>
    );
}



export default AppRoutes