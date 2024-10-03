import React from "react";
import "../styles/header.css";
import logoAstrolab from "../assets/images/logo_astrolab.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logoAstrolab} alt="logo" className="logo" />
    </header>
  );
}
