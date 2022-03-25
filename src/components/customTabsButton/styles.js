import { makeStyles } from "@mui/styles";

export default makeStyles({
  tabs: {
    // "& .MuiTabPanel-root": {
    //   marginTop: "40px",
    // },
    "& .MuiTab-root": {
      marginTop: "10px",
      textTransform: "capitalize",
      backgroundColor: "#008caa",
      color: "#111",
      display:'flex',
      justifyContent:'center',
      
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
  },
});
