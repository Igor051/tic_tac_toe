import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";
import {logOut} from "../../Redux/registrationPageReducer";

function HomePage(props) {
    HomePage.propTypes={
        loggedIn: PropTypes.bool,
        nickname: PropTypes.string,
        _id: PropTypes.string,
        logOut: PropTypes.func
    }

    if(!props.loggedIn){
        return (
            <Navigate to={"/login"}/>
        )
    }

    return (
        <div>
            <div>Home</div>
           <div>{props.nickname}</div>
           <div>{props._id}</div>
            <button onClick={()=> {props.logOut()}} type={"button"}>Log out</button>
        </div>
    )
}

const mapStateToProps = (state) =>({
    loggedIn: state.registrationPage.loggedIn,
    nickname:  state.registrationPage.nickname,
    _id:  state.registrationPage._id
})

export default compose(connect(mapStateToProps, {logOut}))(HomePage)

