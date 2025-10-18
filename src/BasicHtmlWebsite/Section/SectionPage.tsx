import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProjecTable } from "./ProjectTable";
import { Education } from "./Education";
import { WorkExperienceOpenSource } from "./WorkExperienceOpenSource";

export const SectionPage = () => {
  return (
    <>
      <hr />
      <div className="container d-flex justify-content-center">
        <Row>
          <Col>
            <ProjecTable />
          </Col>
          <Col>
            <WorkExperienceOpenSource />
          </Col>
          <Col>
            <Education />
          </Col>
        </Row>
      </div>
      <hr />
      <div></div>
    </>
  );
};
