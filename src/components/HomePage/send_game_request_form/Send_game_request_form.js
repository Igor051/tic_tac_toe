import PropTypes from "prop-types";
import style from "../../Registration/Input.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";

const SendGameRequestForm = (props) => {
    SendGameRequestForm.propTypes = {
        handleSubmit: PropTypes.func
    }
    return <form onSubmit={props.handleSubmit} className={style.registrationForm}>
        <Field placeholder={'user id'} name={'user_id'} component="input" className={style.field} type={"text"}/>
        <button className={style.submitButton}>Send</button>
    </form>
};

const SendGameRequestReduxForm = reduxForm({form: 'sendReq'})(SendGameRequestForm);
export default SendGameRequestReduxForm