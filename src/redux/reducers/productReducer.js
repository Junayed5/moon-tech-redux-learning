import { ADD_TO_CARD, REMOVE_FROM_CARD } from "../actionTypes/actionTypes";

const initialState = {
    card: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CARD:
            return {
                ...state,
                card: [...state.card, action.payload]
            }
        case REMOVE_FROM_CARD:
            return {
                ...state,
                card: state.card.filter(product => product._id !== action.payload._id)
            }
        default:
            return state;
    }
};

export default productReducer;