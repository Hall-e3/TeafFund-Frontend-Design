import React from "react";
import logo from "../../assets/images/tearfund-nl-logo.png";
import useStyles from "./styles";
export default function ImageLogo() {
  const classes = useStyles();
  return <img src={logo} alt="tearFund.com" className={classes.image} />;
}
