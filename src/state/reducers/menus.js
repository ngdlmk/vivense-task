import INITIAL_STATE from "../initial/menus";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_MENUS':
            return action.payload
        default:
            return state
    }
}