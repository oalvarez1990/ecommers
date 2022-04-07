import { appActions } from "redux/actions";

const INITIAL_STATE = {
    isLoading: false,
    isLoginOpen: false,
    loginMessage: ""
}

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case appActions.setIsLoading:
            return {
                ...state,
                isLoading: action.payload
            }

        case appActions.setIsLoginOpen:
            return {
                ...state,
                isLoginOpen: action.payload
            }

        case appActions.setLoginMessage:
            return {
                ...state,
                loginMessage: action.payload
            }

        default:
            return state;
    }
}

export default appReducer
