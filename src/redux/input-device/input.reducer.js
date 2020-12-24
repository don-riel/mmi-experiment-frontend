import InputActionTypes from "./input.types";

const INITITAL_STATE = {
  inputDevice: "",
};

const inputReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case InputActionTypes.SET_INPUT_DEVICE_TYPE:
      return {
        ...state,
        inputDevice: action.payload,
      };

    default:
      return state;
  }
};

export default inputReducer;
