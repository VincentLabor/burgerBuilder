import React from "react";
import Logo from "../../Logo/Logo";
import classes from "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <SideDrawerToggle clicked= {props.toggleClick}>Menu</SideDrawerToggle>
    <div className = {classes.Logo}>
      <Logo height='80%'/>
    </div>
    <nav className = {classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
