import TimeActionTypes from "./time.types";

export const setDragDropTime = (time) => ({
  type: TimeActionTypes.SET_DRAG_DROP_TIME,
  payload: time,
});

export const setCopyUrlTime = (time) => ({
  type: TimeActionTypes.SET_COPY_URL_TIME,
  payload: time,
});

export const setCopyTextBlockTime = (time) => ({
  type: TimeActionTypes.SET_COPY_TEXTBLOCK_TIME,
  payload: time,
});

export const setVerticalScrollTime = (time) => ({
  type: TimeActionTypes.SET_VERTICAL_SCROLL_TIME,
  payload: time,
});

export const setHorizontalScrollTime = (time) => ({
  type: TimeActionTypes.SET_HORIZONTAL_SCROLL_TIME,
  payload: time,
});

export const setPointClickTime = (time) => ({
  type: TimeActionTypes.SET_POINT_CLICK_TIME,
  payload: time,
});
