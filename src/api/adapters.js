// Get only the info needed
export const adaptNewsData = (apiData) => {
  if (!apiData || !apiData.response) {
    return [];
  }
  const adaptedResponse = apiData.response.results;

  const adaptedNewsData = adaptedResponse.map((eachNews) => {
    return {
      id: eachNews.id,
      thumbnail: eachNews.fields.thumbnail,
      content: eachNews.fields.trailText,
      title: eachNews.fields.headline,
    };
  });
  return adaptedNewsData;
};

export const adaptIndiviualNewsData = (apiData) => {
  if (!apiData || !apiData.response) {
    return {};
  }

  const adaptedResponse = apiData.response.content;

  const adaptedDetailsNews = {
    date: adaptedResponse.webPublicationDate,
    title: adaptedResponse.fields.headline,
    description: adaptedResponse.fields.trailText,
    image: adaptedResponse.fields.main,
    content: adaptedResponse.fields.body,
    author: adaptedResponse.fields.byline,
    thumbnail: adaptedResponse.fields.thumbnail,
  };

  console.log(adaptedDetailsNews);

  return adaptedDetailsNews;
};
