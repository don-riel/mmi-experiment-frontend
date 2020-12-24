import InputActionTypes from "./input.types";

export const setInputDeviceType = (type) => ({
    type: InputActionTypes.SET_INPUT_DEVICE_TYPE,
    payload: type
})