import { useState } from "react";
import Contact from "./Contact";
import Developer from "./Developer";
import Links from "./Links";
import Nav from "./Nav";
import Portfolio from "./Portfolio";

export default function Info() {
  const [infoNav, setInfoNav] = useState(true);
  const [seeDev, setSeeDev] = useState(true);
  const [seePortfolio, setSeePortfolio] = useState(false);
  const [seeContact, setSeeContact] = useState(false);
  const [seeLinks, setSeeLinks] = useState(false);

  return (
    <>
      <div className="info-block">
      <Nav
        infoNav={infoNav}
        setInfoNav={setInfoNav}
        setSeeDev={setSeeDev}
        setSeePortfolio={setSeePortfolio}
        setSeeContact={setSeeContact}
        setSeeLinks={setSeeLinks} 
      />
        {seeDev && <Developer />}
        {seePortfolio && <Portfolio />}
        {seeContact && <Contact />}
        {seeLinks && <Links />}
      </div>
    </>
  );
}
