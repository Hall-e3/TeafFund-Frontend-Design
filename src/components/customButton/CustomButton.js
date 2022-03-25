import {
  Button as MuiButton,
  IconButton as MuiIconButton,
} from "@mui/material";
import useStyles from "./styles";
export const CustomButton = ({ variant, onClick, text, icon,...other }) => {
    const classes = useStyles();
  return (
    <MuiButton
      variant={variant || "contained"}
      onClick={onClick}
      {...other}
        className={classes.button}
    >
      {text}
      {icon}
    </MuiButton>
  );
};

export const IconCustomButton = ({ variant, onClick, icon, ...other }) => {
  //   const classes = useStyles();
  return (
    <MuiIconButton
      variant={variant}
      onClick={onClick}
      {...other}
      //   className={classes.icon_button}
    >
      {icon}
    </MuiIconButton>
  );
};
