import React from "react";
import {connect} from "react-redux";
import {sendFormData} from "../../Redux/registrationPageReducer";
import InputForm from "./InputForm";
import {compose} from "redux";
import PropTypes from 'prop-types';
import {Navigate} from "react-router-dom";

const RegistrationPage = (props) => {
    RegistrationPage.propTypes = {
        sendFormData: PropTypes.func,
        loggedIn: PropTypes.bool
    };

    const onSubmit = (formData) => {
        props.sendFormData("login", formData.email, formData.password);
    };

    if (props.loggedIn){
        return (
            <Navigate to="/"/>
        )
    }

    return <div>
        <div>
            <InputForm onSubmit={onSubmit}/>
            <div>{props.loggedIn.toString()}</div>
        </div>
    </div>
};

let mapStateToProps = (state) => ({
    loggedIn: state.registrationPage.loggedIn
});

export default compose(connect(mapStateToProps, {sendFormData}))(RegistrationPage)