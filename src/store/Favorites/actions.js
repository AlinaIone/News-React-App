export const addToFavorites = (payload) => ({
  type: "ADD_TO_FAV",
  payload,
});

export const removeFromFavorites = (newsId) => ({
  type: "REMOVE_FROM_FAV",
  payload: newsId,
});
