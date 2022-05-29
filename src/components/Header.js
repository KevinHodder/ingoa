import styled from "styled-components";
import { Fragment } from "react";

const Title = styled.header`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  font-size: 4rem;
  font-weight: bold;
`;

const Subheader = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
`;

const Header = () => {
  return (
    <Fragment>
      <Title>
        <div>Ngā Ingoa ō Aotearoa</div>
        <div>An Oral Dictionary of Māori Placenames</div>
      </Title>
      <Subheader>
        <div>This is a prototype under active development. </div>
        <div>
          For background, see an earlier version at{" "}
          <a href={"http://ingoa.maori.nz"}>ingoa.maori.nz</a>.
        </div>
        <div>
          We welcome feedback, especially about accessibility, at&nbsp;
          <a href={"mailto: hughingoa@gmail.nz"}>hughingoa@gmail.nz</a>.{" "}
        </div>
        <div>
          The audio of some names is incorrectly cut short. If you notice any
          such issues, please advise us which they are and the Zones/takiwā they
          are in, and they will be corrected.
        </div>
      </Subheader>
    </Fragment>
  );
};

export default Header;
