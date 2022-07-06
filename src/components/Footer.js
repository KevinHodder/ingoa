import styled from "styled-components";

const FooterBar = styled.footer`
  margin-bottom: -13px;
  margin-top: 5px;
  padding: 5px 20px;
  background: rgba(var(--bs-dark-rgb), 1);
  color: white;
`;

const Footer = () => {
  return (
    <FooterBar>
      <p>
        Copyright © Hugh Young 1985, 1991 and 1994. The text and recordings may
        not be resold for profit. They may be copied for educational purposes.
        Copies should be clearly identified as such.
      </p>
      <p>
        <a
          rel="license"
          target="_blank"
          href="http://creativecommons.org/licenses/by-nc-nd/3.0/nz/"
        >
          <img
            alt="Creative Commons License"
            style={{ borderWidth: 0 }}
            src="http://i.creativecommons.org/l/by-nc-nd/3.0/nz/88x31.png"
          />
        </a>
        <br />
        <span
          href="http://purl.org/dc/dcmitype/Sound"
          property="dc:title"
          rel="dc:type"
        >
          Nga Ingoa o Aotearoa, an oral dictionary of Maori placenames
        </span>
        &nbsp;by&nbsp;
        <a
          href="mailto:hughingoa@gmail.com"
          target="_blank"
          property="cc:attributionName"
          rel="cc:attributionURL"
        >
          Hugh Young
        </a>{" "}
        is licensed under a{" "}
        <a
          rel="license"
          target="_blank"
          href="http://creativecommons.org/licenses/by-nc-nd/3.0/nz/"
        >
          Creative Commons Attribution-Noncommercial-No Derivative Works 3.0 New
          Zealand License
        </a>
        .
        <br />
        Based on a work at{" "}
        <a
          href="http://www.top.net.nz/%7Ehugh/ingoa/contents.html"
          rel="dc:source"
          target="_blank"
        >
          www.top.net.nz
        </a>
        .
      </p>
      <p>
        For further information contact Hugh Young, ph/fax +64 4 239-9341 or +64
        21 737 896 or <a href="mailto:hughingoa@gmail.com">email</a>.
      </p>
    </FooterBar>
  );
};

export default Footer;
