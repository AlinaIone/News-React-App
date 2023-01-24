export const initialState = {
  favorites: [],
};

export const favoritesReducer = (state, action) => {
  switch (action.type) {
    // get the favorites array and map to get an array of ids, after look into the initialState(always the old one) to see if the news is already added
    // if is do nothing and return state, else add the news to the state and return new state
    case "ADD_TO_FAV": {
      console.log("Add");
      console.log({ state1: state });
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
      // const modifiedNewsFavPropr = state.favorites.map((news) => {
      //   if (news.id === action.payload.id) {
      //     action.payload.isToFavorites = false;
      //   }
      //   return news;
      // });
      // const remainingNews = modifiedNewsFavPropr.filter(
      //   (news) => news.id !== action.payload.id
      // );

      const remainingNews = state.favorites.filter(
        (news) => news.id !== action.payload
      );
      
      return {
        favorites: remainingNews,
      };
    }

    default:
      return state;
  }
};
