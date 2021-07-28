import { GETRESTAURANTINFOS } from "../actions/actionTypes";
import { initialState } from "../initialState";

export default function restaurantReducers(state = initialState.restaurant, action) {
    switch (action.type) {
        case GETRESTAURANTINFOS:
            return action.payload;
    
        default:
            return state;
    }
}