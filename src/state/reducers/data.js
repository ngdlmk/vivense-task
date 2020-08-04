import INITIAL_STATE from "../initial/data";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return action.payload
        default:
            return state
    }
}