import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavoritesAction } from "../redux/action";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9} className="d-flex align-items-center justify-content-between">
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <Button variant="info" onClick={() => dispatch(addToFavoritesAction(data))}>
          Add at favorites
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
