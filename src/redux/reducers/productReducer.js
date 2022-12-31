import { ADD_TO_CARD } from "../actionTypes/actionTypes";

const initialState = {
    card: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CARD:
            return {
                ...state,
                card : [ ...state.card , action.payload]
            }
    
        default:
            return state;
    }
};

export default productReducer;