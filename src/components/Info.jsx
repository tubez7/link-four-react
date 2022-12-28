import { useState } from "react";
import Contact from "./Contact";
import Developer from "./Developer";
import Links from "./Links";
import Nav from "./Nav";
import Portfolio from "./Portfolio";

export default function Info() {
  const [infoNav, setInfoNav] = useState(true);

  return (
    <>
      <div className="info-block">
      <Nav
        infoNav={infoNav}
        setInfoNav={setInfoNav}
      />
        <Developer />
        <Portfolio />
        <Contact />
        <Links />
      </div>
    </>
  );
}
