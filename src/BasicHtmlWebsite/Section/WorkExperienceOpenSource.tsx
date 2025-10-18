import { OpenSourceWork } from "./OpenSourceWork";
import { WorkExperience } from "./WorkExperience";

export const WorkExperienceOpenSource = () => {
  return (
    <div className="d-flex-column">
      <div className="mb-3">
        <WorkExperience />
      </div>
      <OpenSourceWork />
    </div>
  );
};
