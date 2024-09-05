import { combineReducers, legacy_createStore } from "redux";
import token from "./token";
import cart from "./cart";
import wishlist from "./wishlist";

const reducers = combineReducers({
    cart,
    wishlist,
    token,
});

export const store = legacy_createStore(reducers);
