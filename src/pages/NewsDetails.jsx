import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { getIndividualNewsEndpoint } from "../api/endpoints";
import { useAxios } from "../utils/hooks/useAxios";
import { Layout } from "../components/Layout";
import { adaptIndiviualNewsData } from "../api/adapters";
import { Col, Row } from "react-bootstrap";
import { getDateFormatted } from "../utils/date";
import styles from "./NewsDetails.module.css";
import { FavoritesButton } from "../components/FavoritesButton";
import { AlertContext } from "../store/Alert/alertContext";
import Alert from 'react-bootstrap/Alert';

export const NewsDetails = () => {
  // const { newsId } = useParams();
  const { stateAlert, } = useContext(AlertContext);
  const params = useParams();

  // a temporary way to get the news id until I will find an escape character who can read an entire id  ex:'music/2023/jan/28/john-wilson-sinfonia-of-london-vaughan-williams-howells-delius-elgar-review-eliane-radigue-occam-delta-xv-quatuor-bozzini'
  // using useParams hook I get only the first word from the id ex: music
  const newsIdTemporarly = `${params.id}/${params["*"]}`;
  console.log(newsIdTemporarly);

  const singularNewsUrl = getIndividualNewsEndpoint(newsIdTemporarly);
  const adaptedData = adaptIndiviualNewsData(useAxios(singularNewsUrl));
  const { id, title, description, image, author, date, content, thumbnail, } = adaptedData;
  const formattedDate = getDateFormatted(date);


  return (
    <Layout>
      <Container className={`${styles.newsDetailsContainer} my-5 `}>
        <Row className="d-flex justify-content-center align-item-center">
          {stateAlert.isActive && <Alert key={alert} variant='success' className={styles.alert}>
            News added to Favorites
          </Alert>}
          <Col xs={12} lg={8} key={id}>
            <h1 className="pt-3 mb-5">{title}</h1>
            <p className="fw-bold">{description}</p>
            <div
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: image }}
            ></div>
            <div className="d-flex justify-content-between align-item-center mb-4 position-relative">
              <div className="fw-bold">
                <p>{author}</p>
                <p className="mb-0"> {formattedDate}</p>
              </div>
              <FavoritesButton newsDataToDispatch={adaptedData} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
