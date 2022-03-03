import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch (actions.type) {
        case types.login:
            return {
                ...action.payload, // action.payload.name
                logged: true,
            };
        case types.logout:
            return {
                logged: false,
            }
        default:
            return state;
    }
}
