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
  margin-bottom: 2rem;
  > h1 {
    font-size: 4rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 2rem;
`;

const Subheader = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: left;
  font-size: 2rem;
  width: 80%;
  @media (max-width: 650px) {
    width: 100%;
  }
  > div {
    width: 100%;
  }
`;

const MapInstructions = styled.div`
  // font-weight: bold;
  font-style: italic;
  text-align: center;
  @media (max-width: 650px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Title>
        <h1>Ngā Ingoa ō Aotearoa</h1>
        <SubTitle>An Oral Dictionary of Māori Placenames</SubTitle>
      </Title>
      <Subheader>
        <div>
          This is a prototype under active development. It is a dictionary of
          pronunciation only, and only names in use before 1994 are included.
        </div>
        <div>
          For background, see the&nbsp;
          <a href={"./about"}>About page</a>.
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
        <hr style={{ width: "100%" }} />
        <MapInstructions>
          <div>To find a name, click on the map...</div>
          <div>Kia kitea he ingoa, pawhiria te mapi...</div>
        </MapInstructions>
      </Subheader>
    </HeaderBlock>
  );
};

export default Header;
