import INITIAL_STATE from "../initial/verticalMenu";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_MENU':
            console.log(action)
            return action.payload
        default:
            return state
    }
}