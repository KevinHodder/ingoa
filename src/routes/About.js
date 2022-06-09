import NavBar from "../components/NavBar";
import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <NavBar />
      <main>
        <h1>About “Ngā Ingoa ō Aotearoa”</h1>
        <h3>Outline</h3>
        <p>
          “Ngā Ingoa o Aotearoa” (The Names of New Zealand) is literally a
          "pronouncing dictionary". More than 8000 names were spoken in 1984-94
          by 132 native speakers of te reo Māori, chosen by each other as the
          best speakers for their areas. Because they say only the names of
          their own areas, local accents are automatically accommodated. Mainly
          elders, most of the speakers are no longer with us. Their voices are
          taonga tuku iho, treasures handed down to us. Please respect them. The
          names are sorted into 177 clearly defined "Zones” (takiwā), and are in
          alphabetical order within each Zone.The Zones do not claim to
          correspond to rohe-a-iwi.
        </p>
        <p>
          The dictionary was intended especially for broadcasters and those who
          have to speak in public, but everyone who wants to pronounce
          placenames authentically will find it valuable. The list includes
          geographic features down to the larger hills and streams, all human
          settlements, suburbs and schools, marae, meeting houses and dining
          halls and many other features. It does not include names conferred
          since 1994, such as Government departments or new marae. It does not
          give the names' meanings. That would have taken more than a lifetime,
          and would be done better by tangata whenua in each area.
        </p>
      </main>
    </Fragment>
  );
};

export default About;
