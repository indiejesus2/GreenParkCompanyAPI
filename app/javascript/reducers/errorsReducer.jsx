export default function errorsReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_ERROR':
            return action.payload
        case 'REMOVE_ERROR':
            return state.filter((error, i) => i !== action.payload.index);
        default:
            return state;
    }
}