import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../action";

const initialState = {
  favorites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: [...state.favorites.content, action.payload],
        },
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: [...state.favorites.content.slice(0, action.payload).concat(state.favorites.content.slice(action.payload + 1))],
        },
      };

    default:
      console.log("DEFAULT");
      return state;
  }
};

export default mainReducer;
