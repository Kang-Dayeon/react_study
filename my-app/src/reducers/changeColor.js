export const CHANGE = 'CHANGE'

export const colorChange = color => ({ type: CHANGE, color });

const initialState = {
  color: '#fff'
};

const colorAction = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        color: action.color
      };
    default:
      return {
        ...state
      };
  }
};

export default colorAction