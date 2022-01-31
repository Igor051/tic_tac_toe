import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./Redux/store";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./components/AppRoutes/AppRoutes";
// import RegistrationPage from "./components/Registration/RegistrationPage";
// import LoginPage from "./components/Login/LoginPage";
// import {compose} from "redux";
// import {connect} from "react-redux";
// import PropTypes from "prop-types";




function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                {/*<Routes>*/}
                {/*    <Route exact path="/registration" element={<RegistrationPage/>}/>*/}
                {/*    <Route exact path="/login" element={<LoginPage/>}/>*/}
                {/*    <div>{props.loggedIn}</div>*/}
                {/*</Routes>*/}
                <AppRoutes/>
            </Provider>
        </BrowserRouter>
    );
}


export default App;
// export default compose(connect(mapStateToProps, null))(App)