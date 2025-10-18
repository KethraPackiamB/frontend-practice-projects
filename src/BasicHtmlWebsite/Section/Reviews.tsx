import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

export const Reviews = () => {
  return (
    <div className="container mb-5" style={{ fontSize: "25px" }}>
      <h4 className="mb-5" style={{ fontSize: "35px" }}>
        Reviews from my teacher
      </h4>
      <div>
        <Row>
          <Col>
            <Card style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Text>
                  John Doe was a brilliant Student; always stood out with his
                  assignments.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Jane Doe
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Assistant Professor
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Text>
                  John Doe was a brilliant Student; always stood out with his
                  assignments.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Jane Doe
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Assistant Professor
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Text>
                  John Doe was a brilliant Student; always stood out with his
                  assignments.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Jane Doe
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Assistant Professor
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
