import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { getIndividualNewsEndpoint } from "../api/endpoints";
import { useAxios } from "../utils/hooks/useAxios";
import { Layout } from "../components/Layout";
import { adaptIndiviualNewsData } from "../api/adapters";
import { Button, Col, Row } from "react-bootstrap";
import { getDateFormatted } from "../utils/hooks/date";
import styles from "./NewsDetails.module.css";
import { addToFavorites } from "../store/Favorites/actions";
import { FavoritesContext } from "../store/Favorites/context";

export const NewsDetails = () => {
  // const { newsId } = useParams();
  const { dispatchFavorites } = useContext(FavoritesContext);
  const params = useParams();

  const newsIdTemporarly = `${params.id}/${params["*"]}`;
  console.log(newsIdTemporarly);

  const singularNewsUrl = getIndividualNewsEndpoint(newsIdTemporarly);

  const adaptedData = adaptIndiviualNewsData(useAxios(singularNewsUrl));
  const { id, title, description, image, author, date, content, thumbnail } =
    adaptedData;

  const formattedDate = getDateFormatted(date);

  console.log({ singularNewsUrl });
  console.log({ adaptedData });
  console.log({ formattedDate });

  return (
    <Layout>
      <Container className={`${styles.newsDetails} my-5 `}>
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={8}>
            <h1 className="pt-3 mb-5">{adaptedData.title}</h1>
            <p className="fw-bold">{description}</p>
            <div
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: image }}
            ></div>
            <div className="d-flex justify-content-between align-item-center mb-4">
              <div className="fw-bold">
                <p>{author}</p>
                <p className="mb-0"> {formattedDate}</p>
              </div>
              <Button
                onClick={() => {
                  const actionResult = addToFavorites({
                    id,
                    title,
                    description,
                    thumbnail,
                  });
                  console.log({ description });
                  dispatchFavorites(actionResult);
                }}
              >
                Adds to Favorites
              </Button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </Col>
        </Row>
        {/* <p>{adaptedData.formattedDate}</p> */}
      </Container>
    </Layout>
  );
};
