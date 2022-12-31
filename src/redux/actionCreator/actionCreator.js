import { ADD_TO_CARD } from "../actionTypes/actionTypes"

export const addToCard = (product) => {
    return {
        type: ADD_TO_CARD,
        payload: product
    }
}