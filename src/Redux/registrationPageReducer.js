import {API} from "../api/api";

const SET_ANSWER = "SET_ANSWER"
const SET_ERROR = "SET_ERROR"
const LOG_OUT = "LOG_OUT"
const ON_GAME_REQUEST = "ON_GAME_REQUEST"

// Валідація інпут полів
export const required = value => value ? undefined : 'Required'

const minLength = min => value =>
    value && value.length < min ? `Must be at least ${min} characters` : undefined
export const minLength8 = minLength(8)

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength100 = maxLength(100)

export const upperCaseCharacter = value => {
    return value.toLowerCase() === value ? "Must be at least 1 upper case character" : undefined
}
// Валідація інпут полів

let initialState = {
    nickname: "",
    _id: "",
    loggedIn: false,
    emit_msg: "",
    badAuthData: {
        present: false,
        message: ""
    }
};


const registrationPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ANSWER:
            return {
                ...state,
                nickname: action.nickname,
                _id: action._id,
                loggedIn: true,
                badAuthData: {present: false, ...state.badAuthData}
            }
        case SET_ERROR:
            return {...state, badAuthData: {present: true, message: action.data}}
        case LOG_OUT:
            return {...state, nickname: "", _id: "", loggedIn: false}
        case ON_GAME_REQUEST:
            return {...state, emit_msg: "Emit is here"}
        default:
            return state
    }
};

const setAnswerAC = (answer) => ({type: SET_ANSWER, ...answer})
const setErrorAC = (answer) => ({type: SET_ERROR, ...answer})
const logOutAC = () => ({type: LOG_OUT})
const onGameRequestAC = () => ({type: ON_GAME_REQUEST})

export const sendFormData = (reqType, email, password, nickname = undefined) => async (dispatch) => {

    const answer = await API.sendFormData(reqType, email, password, nickname)
    if (answer.error) {
        dispatch(setErrorAC(answer))
    } else {
        dispatch(setAnswerAC(answer))
    }
};

export const logOut = () => (dispatch) => {
    dispatch(logOutAC())
}


export const onGameRequest = () => (dispatch) => {
    dispatch(onGameRequestAC())
}

export const onGameRequestAccept = (_id, socket) => () => {
    socket.emit("game_request_accept", `${_id}`)
}


export const send_game_request_ = (user_id, nickname, _id, socket) => {
    socket.emit("game_request", {user_id, nickname, sender_id: _id})
}


export default registrationPageReducer