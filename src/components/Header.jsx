import React from "react";
import Navigation from "./Navigation";

const Header = ({ onResumeClick }) => {
  return (
    <header>
      <Navigation openResumeModal={onResumeClick} />
    </header>
  );
};

export default Header;
