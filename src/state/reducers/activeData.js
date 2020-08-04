import INITIAL_STATE from "../initial/activeData";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_DATA':
            console.log(action)
            return action.payload
        default:
            return state
    }
}