import store from "./store";
import socket from "../socket/socket";

const GAME_STARTED = "GAME_STARTED"
const CLICKING_ON_A_CELL = "CLICKING_ON_A_CELL"
const CHANGE_DISABLE_STATUS = "CHANGE_DISABLE_STATUS"

let initialState = {
    game_is_accepted: false,
    mark: '',
    opponent_mark: '',
    room_name: " ",
    is_field_disabled: false,
    game_field: {
        cell_1_1: 0,
        cell_1_2: 0,
        cell_1_3: 0,
        cell_2_1: 0,
        cell_2_2: 0,
        cell_2_3: 0,
        cell_3_1: 0,
        cell_3_2: 0,
        cell_3_3: 0
    }
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAME_STARTED:
            return {
                ...state,
                game_is_accepted: true,
                mark: action.mark,
                opponent_mark: action.opponent_mark,
                room_name: action.room_name,
                is_field_disabled: action.is_field_disabled
            }
        case CLICKING_ON_A_CELL:
            return {
                ...state,
                game_field: action.game_field
            }
        case CHANGE_DISABLE_STATUS:
            return {
                ...state,
                is_field_disabled: !state.is_field_disabled
            }
        default:
            return state
    }
}

const gameStartedAC = (mark, opponent_mark, room_name, is_field_disabled) => ({
    type: GAME_STARTED,
    mark,
    opponent_mark,
    room_name,
    is_field_disabled
})
const clickingOnACellAC = (game_field) => ({type: CLICKING_ON_A_CELL, game_field})
const changeFieldDisableStatusAC = () => ({type: CHANGE_DISABLE_STATUS})

export const gameStarted = ({turn, room_name}) => {
    console.log(turn);
    let mark = store.getState().registrationPage._id === turn ? "x" : "o"
    let opponent_mark = store.getState().registrationPage._id === turn ? "o" : "x"
    store.dispatch(gameStartedAC(mark, opponent_mark, room_name, mark === "o"))
}

export const clicking_on_a_cell = (coordinates, _id) => {
    // const game_field = store.getState().gameReducer.game_field
    // game_field[coordinates] = _id
    // store.dispatch(clickingOnACellAC(game_field))
    socket.emit("click", {coordinates, room_name: store.getState().gameReducer.room_name, _id})
    // store.dispatch(changeFieldDisableStatusAC())
}

socket.on("click", ({coordinates, _id}) => {
    const game_field = store.getState().gameReducer.game_field
    game_field[coordinates] = _id
    store.dispatch(clickingOnACellAC(game_field))
    store.dispatch(changeFieldDisableStatusAC())
})


export default gameReducer