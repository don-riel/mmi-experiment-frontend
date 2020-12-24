import { UPDATE_NAME } from "./constants";

const initialState = {
  name: "Donni",
};

export const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
