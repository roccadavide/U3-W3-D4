import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavoritesAction } from "../redux/action";

const Favorites = () => {
  const favorites = useSelector(state => state.addRemove.favorites.content);

  const dispatch = useDispatch();

  return (
    <Row>
      <h1 className="text-center my-4">FAVORITES JOBS</h1>
      <Col sm={12}>
        <ListGroup variant="flush">
          {favorites.length > 0 ? (
            favorites.map((favorite, i) => (
              <Container key={i} className="my-1">
                <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
                  <Col xs={3}>
                    <Link to={`/${favorite.company_name}`}>{favorite.company_name}</Link>
                  </Col>
                  <Col xs={9} className="d-flex align-items-center justify-content-between">
                    <a href={favorite.url} target="_blank" rel="noreferrer">
                      {favorite.title}
                    </a>
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch(removeFromFavoritesAction(i));
                      }}
                    >
                      <i className="bi bi-trash-fill"></i>
                    </Button>
                  </Col>
                </Row>
              </Container>
            ))
          ) : (
            <ListGroup.Item className="lead ">Your favorites is empty</ListGroup.Item>
          )}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Favorites;
