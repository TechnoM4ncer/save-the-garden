import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import './Header.css';

export default function Header() {
    const displayDesktop = () => {
    return <Toolbar></Toolbar>;
  };
  
  return (
    <header>
      <AppBar className={"header"} >{displayDesktop()}</AppBar>
    </header>
  );
}