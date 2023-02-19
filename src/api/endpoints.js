const API_KEY = "54397fd9-78a1-4991-873d-e9f9169719e7";

export const getNewsCategoriesEndpoint = (
  category,
  pageNumber = 1,
  pageSize = 21
) => {
  const queryParams = `?api-key=${API_KEY}&show-fields=all&section=${category}&page=${pageNumber}&page-size=${pageSize}`;

  return `https://content.guardianapis.com/search${queryParams}`;
};

export const getIndividualNewsEndpoint = (newsId) => {
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;

  return `https://content.guardianapis.com/${newsId}${queryParams}`;
};
