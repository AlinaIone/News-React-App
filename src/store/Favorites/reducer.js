export const initialState = {
  favorites: [],
};

export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAV": {
      console.log(action);
      return state.favorites.includes(action.payload.id)
        ? state
        : {
            favorites: [action.payload, ...state.favorites],
          };
      //   return (newState = state.favorites.includes(action.payload.id)
      //     ? state
      //     : {
      //         favorites: [action.payload, ...state.favorites],
      //       });
      //   return { ...state, ...action.payload };
    }

    case "REMOVE_FROM_FAV": {
      return {
        favorites: state.favorites.filter((news) => news.id !== action.payload),
      };
      //   return { ...state, ...action.payload };
    }

    default:
      return state;
  }
};

// export default (state = initialState, { type, payload }) => {
//   switch (type) {

//   case first:
//     return { ...state, ...payload }

//   default:
//     return state
//   }
// }
