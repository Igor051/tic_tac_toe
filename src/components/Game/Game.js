import React from "react";
import Header from "../common/Header/Header";
import {compose} from "redux";
import {connect} from "react-redux";
import {logOut} from "../../Redux/registrationPageReducer";
import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";
import  style from "./Game.module.css"
import {clicking_on_a_cell} from "../../Redux/gameReducer";
import classnames from "classnames"

function Game(props) {
    Game.propTypes = {
        loggedIn: PropTypes.bool,
        nickname: PropTypes.string,
        _id: PropTypes.string,
        mark: PropTypes.string,
        logOut: PropTypes.func,
        game_field: PropTypes.object,
        opponent_mark: PropTypes.string,
        is_field_disabled: PropTypes.bool
    }
    if (!props.loggedIn) {
        return (
            <Navigate to="/login"/>
        )
    }

    let gameFieldDisabled = classnames({
        [style.gameFieldDisabled]: props.is_field_disabled
    })


    return (
        <div>
            <Header nickname={props.nickname} _id={props._id} logOut={props.logOut}/>
            <p>Game page</p>
            <div>{props.mark}</div>
            <table className={`${style.game_field} ${gameFieldDisabled}`}>
                <tr>
                    <td onClick={()=> clicking_on_a_cell("cell_1_1", props._id)}>{props.game_field.cell_1_1 === 0 ? "" : props.game_field.cell_1_1 === props._id ? props.mark : props.opponent_mark}</td>
                    <td onClick={()=> clicking_on_a_cell("cell_1_2", props._id)}>{props.game_field.cell_1_2 === 0 ? "" : props.game_field.cell_1_2 === props._id ? props.mark : props.opponent_mark}</td>
                    <td onClick={()=> clicking_on_a_cell("cell_1_3", props._id)}>{props.game_field.cell_1_3 === 0 ? "" : props.game_field.cell_1_3 === props._id ? props.mark : props.opponent_mark}</td>
                </tr>
                <tr>
                    <td onClick={()=> clicking_on_a_cell("cell_2_1", props._id)}>{props.game_field.cell_2_1 === 0 ? "" : props.game_field.cell_2_1 === props._id ? props.mark : props.opponent_mark}</td>
                    <td onClick={()=> clicking_on_a_cell("cell_2_2", props._id)}>{props.game_field.cell_2_2 === 0 ? "" : props.game_field.cell_2_2 === props._id ? props.mark : props.opponent_mark}</td>
                    <td onClick={()=> clicking_on_a_cell("cell_2_3", props._id)}>{props.game_field.cell_2_3 === 0 ? "" : props.game_field.cell_2_3 === props._id ? props.mark : props.opponent_mark}</td>
                </tr>
                <tr>
                    <td onClick={()=> clicking_on_a_cell("cell_3_1", props._id)}>{props.game_field.cell_3_1 === 0 ? "" : props.game_field.cell_3_1 === props._id ? props.mark : props.opponent_mark}</td>
                    <td onClick={()=> clicking_on_a_cell("cell_3_2", props._id)}>{props.game_field.cell_3_2 === 0 ? "" : props.game_field.cell_3_2 === props._id ? props.mark : props.opponent_mark}</td>
                    <td onClick={()=> clicking_on_a_cell("cell_3_3", props._id)}>{props.game_field.cell_3_3 === 0 ? "" : props.game_field.cell_3_3 === props._id ? props.mark : props.opponent_mark}</td>
                </tr>
            </table>
            <div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    loggedIn: state.registrationPage.loggedIn,
    nickname: state.registrationPage.nickname,
    _id: state.registrationPage._id,
    mark: state.gameReducer.mark,
    game_field: state.gameReducer.game_field,
    opponent_mark: state.gameReducer.opponent_mark,
    is_field_disabled: state.gameReducer.is_field_disabled

})

export default compose(connect(mapStateToProps, {logOut}))(Game)