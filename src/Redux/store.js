import {applyMiddleware, combineReducers, createStore} from "redux";
import registrationPageReducer from "./registrationPageReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import gameReducer from "./gameReducer";

// код необхідний для збереження даних після перезавантаження, НАВІТЬ, ПІСЛЯ ПЕРЕЗАПУСКУ ПРОЕКТУ !!!!, або підчас ручного вводу по get полю
// const saveToLocalStorage = (state) => {
//     try {
//         localStorage.setItem('state', JSON.stringify(state));
//     } catch (e) {
//         console.error(e);
//     }
// };

// const loadFromLocalStorage = () => {
//     try {
//         const stateStr = localStorage.getItem('state');
//         return stateStr ? JSON.parse(stateStr) : undefined;
//     } catch (e) {
//         console.error(e);
//         return undefined;
//     }
// };
// код необхідний для збереження даних після перезавантаження, НАВІТЬ, ПІСЛЯ ПЕРЕЗАПУСКУ ПРОЕКТУ !!!!, або підчас ручного вводу по get полю


let reducers = combineReducers({
    registrationPage: registrationPageReducer,
    gameReducer: gameReducer,
    form: formReducer
});

// код необхідний для збереження даних після перезавантаження, або підчас ручного вводу по get полю
// const persistedStore = loadFromLocalStorage();
// код необхідний для збереження даних після перезавантаження, або підчас ручного вводу по get полю

let store = createStore(reducers, /*persistedStore,*/ applyMiddleware(thunkMiddleware));


// код необхідний для збереження даних після перезавантаження, або підчас ручного вводу по get полю
// store.subscribe(() => {
//     saveToLocalStorage(store.getState());
// });
// код необхідний для збереження даних після перезавантаження, або підчас ручного вводу по get полю
// проблема була в тому: (якщо залогінився, то loggedIn став true і перекинуло на "/"
// (в планах кожного разу перекидати на "/" вже залогіненого юзера, можливість перейти на "/login"
// тільки після натискання на кнопку "Log out"), але якщо потім вручну заходиш на '/login' то дані зникають
// і редірект не відбувається, отже траба зберігати дані в localStorage і вони не знакатимуть після перезавантаження
// або після переходу по роутах. НАВІТЬ ПІСЛЯ ПЕРЕЗАПУСКУ ПРОЕКТУ !!!!

export default store