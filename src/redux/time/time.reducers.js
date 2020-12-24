import TimeActionTypes from "./time.types";

const INITITAL_STATE = {
  dragDropTime: 0,
  copyUrlTime: 0,
  copyTextBlockTime: 0,
  verticalScrollTime: 0,
  horizontalScrollTime: 0,
  pointClickTime: 0,
};

const timeReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case TimeActionTypes.SET_DRAG_DROP_TIME:
      return {
        ...state,
        dragDropTime: action.payload,
      };
    case TimeActionTypes.SET_COPY_URL_TIME:
      return {
        ...state,
        copyUrlTime: action.payload,
      };
    case TimeActionTypes.SET_COPY_TEXTBLOCK_TIME:
      return {
        ...state,
        copyTextBlockTime: action.payload,
      };
    case TimeActionTypes.SET_VERTICAL_SCROLL_TIME:
      return {
        ...state,
        verticalScrollTime: action.payload,
      };
    case TimeActionTypes.SET_HORIZONTAL_SCROLL_TIME:
      return {
        ...state,
        horizontalScrollTime: action.payload,
      };
    case TimeActionTypes.SET_POINT_CLICK_TIME:
      return {
        ...state,
        pointClickTime: action.payload,
      };
    default:
      return state;
  }
};

export default timeReducer;
