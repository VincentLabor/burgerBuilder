import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = props => {
  //This is not straight JSX because we want to add a animation or transition hence the JS
let attachedClasses = [classes.SideDrawer, classes.Close];
if (props.open){
  attachedClasses = [classes.SideDrawer, classes.Open]
}
  return (
    <Auxiliary>
    <Backdrop show ={props.open} clicked = {props.closed}/>
    <div className={attachedClasses.join(' ')}>
      <div className = {classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
    </Auxiliary>
  );
};

export default sideDrawer;
