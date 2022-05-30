import styled from "styled-components";

const HeaderBlock = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.header`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: 3rem;
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
    <HeaderBlock>
      <Title>
        <div>Ngā Ingoa ō Aotearoa</div>
        <SubTitle>An Oral Dictionary of Māori Placenames</SubTitle>
      </Title>
      <Subheader>
        <div>This is a prototype under active development. </div>
        <div>
          For background, see an earlier version at{" "}
          <a href={"http://ingoa.maori.nz"}>ingoa.maori.nz</a>.
        </div>
        <div>
          We welcome feedback, especially about navigation and accessibility,
          at&nbsp;
          <a href={"mailto: hughingoa@gmail.nz"}>hughingoa@gmail.nz</a>.{" "}
        </div>
        <div>
          The audio of some names is incorrectly cut short. If you notice any
          such issues, please advise us which they are and the Zones/takiwā they
          are in, and they will be corrected.
        </div>
      </Subheader>
    </HeaderBlock>
  );
};

export default Header;
