import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { getIndividualNewsEndpoint } from "../api/endpoints";
import { useAxios } from "../utils/hooks/useAxios";
import { Layout } from "../components/Layout";
import { adaptIndiviualNewsData } from "../api/adapters";

export const NewsDetails = () => {
  // const { newsId } = useParams();
  const params = useParams();

  const newsIdTemporarly = `${params.id}/${params["*"]}`;
  console.log(newsIdTemporarly);

  const singularNewsUrl = getIndividualNewsEndpoint(newsIdTemporarly);
  const adaptedData = adaptIndiviualNewsData(useAxios(singularNewsUrl));

  console.log(singularNewsUrl);
  console.log(adaptedData);

  return (
    <Layout>
      <Container>
        <h1>{adaptedData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: adaptedData.image }}></div>
        <p>{adaptedData.description}</p>
        <p>{adaptedData.author}</p>
        {/* <p>{adaptedData.formattedDate}</p> */}
      </Container>
    </Layout>
  );
};
