import Card from "react-bootstrap/Card";

export const WorkExperience = () => {
  return (
    <div>
      <Card style={{ width: "25rem", fontSize: "20px", height: "12rem" }}>
        <Card.Body>
          <Card.Title>WorkExperience</Card.Title>
          <p>roadmap.sh</p>
          <Card.Text>Solved all the roadmap projects.</Card.Text>
          <Card.Link href="#">Visit my Profile</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
