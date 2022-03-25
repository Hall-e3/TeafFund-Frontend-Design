import { makeStyles } from "@mui/styles";

export default makeStyles({
  button: {
    "& .MuiButton-contained": {
      background: "#fcd500",
      textTransform: "capitalize",
      borderColor:'#a29449',
      color:'#333',
      '&:hover':{
        background: "#fcd500",
      }
    },
  },
});
