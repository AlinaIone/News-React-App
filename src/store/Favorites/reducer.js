export const initialState = {
  favorites: [],
};

export const favoritesReducer = (state, action) => {
  switch (action.type) {
    // get the favorites array and map to get an array of ids, after look into the initialState(always the old one) to see if the news is already added
    // if is do nothing and return state, else add the news to the state and return new state
    case "ADD_TO_FAV": {
      console.log("Add");
      //
      return state.favorites
        .map((payload) => payload.id)
        .includes(action.payload.id)
        ? state
        : {
          favorites: [action.payload, ...state.favorites],
        };
    }
    // search for the specific news(news id) and delete it then return the state without this id
    case "REMOVE_FROM_FAV": {
      return {
        favorites: state.favorites.filter((news) => news.id !== action.payload),
      };
    }

    default:
      return state;
  }
};
