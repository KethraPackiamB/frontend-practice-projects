import Card from "react-bootstrap/Card";

export const Education = () => {
  return (
    <div>
      <Card style={{ width: "25rem", fontSize: "18px" }}>
        <Card.Body>
          <Card.Title>Education</Card.Title>
          <Card.Text>
            Graduated with 3.76 outoff 4 CGPA. Won Acma Hackathon. Organized 30
            Sessions.
          </Card.Text>
          <p>Courses I took:</p>
          <ul>
            <li>Object Oriented Programming</li>
            <li>Data Stuctures and algorithm</li>
            <li>Web Engineering</li>
            <li>Artificial Intelligence</li>
            <li>Human Computer Interaction</li>
            <li>Computer Graphics</li>
            <li>Database Management System</li>
            <li>Distributed Database Sysytem</li>
            <li>Discrite Mathematics</li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};
