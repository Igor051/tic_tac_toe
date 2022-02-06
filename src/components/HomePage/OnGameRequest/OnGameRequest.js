import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function OnGameRequest(props) {
    OnGameRequest.propTypes = {
        emit_msg: PropTypes.string,
        onGameRequestAccept: PropTypes.func,
        _id: PropTypes.string,
        socket: PropTypes.any
    }
    return (
        <div>
            <div>{props.emit_msg}</div>
            <nav>
                <Link to="/game">
                    <button onClick={() => props.onGameRequestAccept(props._id, props.socket)}>Accept</button>
                </Link>
            </nav>

        </div>
    )
}

export default OnGameRequest