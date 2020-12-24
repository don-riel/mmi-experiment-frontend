import { UPDATE_NAME } from "./constants";


export const setName = (text) => {
    console.log("run")
    return {
        type: UPDATE_NAME,
        payload: text
    }
}