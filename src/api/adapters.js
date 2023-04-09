// Get only the info needed for each of the news displyed
export const adaptNewsData = (apiData) => {
  if (!apiData || !apiData.response) {
    return [];
  }
  const adaptedResponse = apiData.response.results;

  return adaptedResponse.map((eachNews) => {
    return {
      id: eachNews.id,
      thumbnail: eachNews.fields.thumbnail,
      description: eachNews.fields.trailText,
      title: eachNews.fields.headline,
    };
  });
};

//  Get only the info needed for a specific news
export const adaptIndiviualNewsData = (apiData) => {
  if (!apiData || !apiData.response) {
    return {};
  }

  const adaptedResponse = apiData.response.content;

  const adaptedDetailsNews = {
    id: adaptedResponse.id,
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
