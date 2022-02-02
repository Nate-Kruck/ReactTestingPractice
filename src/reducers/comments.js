/* eslint-disable import/no-anonymous-default-export */
import { SAVE_COMMENT } from "actions/types";
// Return an array of strings that represent a comment being rendered on 
// the screen

export default function(state = [], action) {
    switch (action.type) {
        case SAVE_COMMENT: 
            return [...state, action.payload];   
        default:
            return state;
    }
}