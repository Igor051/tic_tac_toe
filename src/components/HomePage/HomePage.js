import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";
import {logOut, onGameRequest, onGameRequestAccept, send_game_request_} from "../../Redux/registrationPageReducer";
import SendGameRequestReduxForm from "./send_game_request_form/Send_game_request_form";
import OnGameRequest from "./OnGameRequest/OnGameRequest";
import Header from "../common/Header/Header";
import {gameStarted} from "../../Redux/gameReducer";
import socket from "../../socket/socket";

socket.on(`Game started`, (data) => {
    gameStarted(data)
})

function HomePage(props) {
    HomePage.propTypes = {
        loggedIn: PropTypes.bool,
        nickname: PropTypes.string,
        _id: PropTypes.string,
        logOut: PropTypes.func,
        emit_msg: PropTypes.string,
        onGameRequest: PropTypes.func,
        onGameRequestAccept: PropTypes.func,
        game_is_accepted: PropTypes.bool
    }

    socket.on(`${props._id}`, (nickname) => {
        props.onGameRequest(nickname, props._id, socket)
    })

    const send_game_request = (formData) => {
        send_game_request_(formData.user_id, props.nickname, props._id, socket)
    }

    if (!props.loggedIn) {
        return (
            <Navigate to={"/login"}/>
        )
    }

    if (props.game_is_accepted) {
        return (
            <Navigate to={"/game"}/>
        )
    }

    return (
        <div>
            <Header nickname={props.nickname} _id={props._id} logOut={props.logOut}/>
            <SendGameRequestReduxForm onSubmit={send_game_request}/>
            <div>{props.emit_msg ?
                <OnGameRequest _id={props._id} socket={socket} onGameRequestAccept={props.onGameRequestAccept}
                               emit_msg={props.emit_msg}/> : ""}</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    loggedIn: state.registrationPage.loggedIn,
    nickname: state.registrationPage.nickname,
    _id: state.registrationPage._id,
    emit_msg: state.registrationPage.emit_msg,
    game_is_accepted: state.gameReducer.game_is_accepted
})

export default compose(connect(mapStateToProps, {logOut, onGameRequest, onGameRequestAccept}))(HomePage)

