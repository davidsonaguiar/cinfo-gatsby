import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Container from "./container";

const routersGroups = [
  {
    label: "Docentes",
    href: "/docentes",
  },
];

const routesLinks = routersGroups.map((route) => (
  <li key={route.href}>
    <Link to={route.href}>{route.label}</Link>
  </li>
));

export default function Header() {
  return (
    <header className="p-4 bg-white border-b border-zinc-300 flex justify-between items-center">
      <Container className="flex justify-between items-center">
        <Link to="/">
          <span className="sr-only">CINFO</span>
          <StaticImage src="../../images/logo.png" alt="CINFO" width={100} />
        </Link>
        <nav>
          <ul>
            {routesLinks}
          </ul>
        </nav>
      </Container>
    </header>
  );
}