import React from "react";
import PropTypes from "prop-types";

function Header(props) {
    Header.propTypes = {
        nickname: PropTypes.string,
        _id: PropTypes.string,
        logOut: PropTypes.func
    }

    return (
        <div>
            <div>Home</div>
            <div>{props.nickname}</div>
            <div>{props._id}</div>

            <button onClick={() => {
                props.logOut()
            }} type={"button"}>Log out
            </button>
        </div>
    )
}

export default Header