import Card from "react-bootstrap/Card";

export const OpenSourceWork = () => {
  return (
    <div>
      <Card
        style={{ width: "25rem", height: "13rem", fontSize: "18px" }}
        className="px-5"
      >
        <Card.Body>
          <Card.Title>OpenSource Work</Card.Title>
          <Card.Text>
            Contributed to 50 OpenSource projects. Made my own projects with 20
            github stars.
          </Card.Text>
          <Card.Link href="#">Visit my github profile</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
