import { ADDTOMENU, DELETEFROMMENU, GETMENU, UPDATEMENU } from "../actions/actionTypes";
import { initialState } from "../initialState";

export default function menuReducers(state = initialState.menu, action) {
    switch (action.type) {
        case GETMENU:
            return action.payload;
    
        case ADDTOMENU:
            return action.payload;

        case UPDATEMENU:
            return action.payload;
        
        case DELETEFROMMENU:
            return action.payload;
        default:
            return state;
    }
}