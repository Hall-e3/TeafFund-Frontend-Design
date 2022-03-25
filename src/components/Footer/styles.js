import { makeStyles } from "@mui/styles";

export default makeStyles({
  appbar: {
    "& .MuiAppBar-root": {
      background: "#fcd500",
      bottom: 0,
    },
    margin: "60px",
  },
  container: {
    display: "flex",
    "& .MuiTypography-root": {
      wordSpacing: "wordWrap",
      display: "block",
      width: "42%",
    },
    marginBottom:'-40px'
  },
  right: {
    "& .MuiButton-contained": {
      background: "#173145",
      "&:hover": {
        background: "#008caa",
      },
      fontSize: 20,
      textTransform: "capitalize",
      fontWeight: "600",
      alignText: "center",
      padding: "15px 100px",
      borderRadius: "6px",
    },
    marginLeft: "2%",
  },
  left: {
    "& .MuiButton-outlined": {
      "&:hover": {
        background: "#008caa",
        color: "#fff",
      },
      fontSize: 20,
      textTransform: "capitalize",
      fontWeight: "400",
      alignText: "center",
      color: "#111",
      padding: "13px 45px",
      borderRadius: "6px",
      border: "2px solid #333",
    },
    marginRight: "2%",
  },
});
