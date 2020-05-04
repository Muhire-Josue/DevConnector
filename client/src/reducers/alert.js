import { Set_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case Set_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter(data => data.id !== payload);
        default:
            return state;

    }
}