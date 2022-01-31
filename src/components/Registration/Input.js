import React from "react";
import {Field, reduxForm} from "redux-form";
import PropTypes from 'prop-types';
import style from "./Input.module.css"
import renderField from "./renderField/renderField";
import {required, minLength8, maxLength100, upperCaseCharacter} from "../../Redux/registrationPageReducer"



const InputForm = (props) => {
    InputForm.propTypes = {
        handleSubmit: PropTypes.func
    }
    return <form onSubmit={props.handleSubmit} className={style.registrationForm}>
        <Field placeholder={'Your name'} name={'nickname'} component={renderField} className={style.field}
               validate={[required]}/>
        <Field placeholder={'email'} name={'email'} component={renderField} className={style.field} type={"email"}
               validate={[required]}/>
        <Field placeholder={'password'} component={renderField} className={style.field} name={"password"}
               type={"password"} validate={[required, minLength8, maxLength100, upperCaseCharacter]}/>
        <button className={style.submitButton}>Submit</button>
    </form>
};

const InputReduxForm = reduxForm({form: 'search'})(InputForm);
export default InputReduxForm