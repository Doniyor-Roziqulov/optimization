import { combineReducers, legacy_createStore } from "redux";
import token from "./token";
import cart from "./cart";
import wishlist from "./wishlist";
import profile from "./profile";

const reducers = combineReducers({
    cart,
    wishlist,
    token,
    profile,
});

export const store = legacy_createStore(reducers);
