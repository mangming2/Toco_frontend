import styled from "styled-components";
import ProjectFundList from "../src/components/projectfund/ProjectFundList";
function ProjectFund() {
  return (
    <Wrap>
      <ProjectFundList />
    </Wrap>
  );
}
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ProjectFund;
