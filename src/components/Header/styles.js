import { makeStyles } from "@mui/styles";

export default makeStyles({
  divflex: {
    display: "flex",
    margin: "18px",
  },
  div1flex: {
    display: "flex",
    marginLeft: "14%",
    "& .MuiTypography-subtitle1": {
      fontSize: 20,
      fontWeight: "bold",
    },
    alignContent: "center",
    alignItems: "center",
  },
  divTypo: {
    flex: 1,
    "&:hover": {
      background: "#fcd500",
    },
  },
  divimage: {
    marginLeft: "-18%",
  },
  div: {
    "& .MuiSvgIcon-root": {
      color: "#008caa",
      fontSize: 40,
      fontWeight: "bold",
      marginTop: "-3px",
    },
    display: "flex",
    paddingRight: "14px",
    paddingLeft: "14px",
    "&:hover": {
      background: "#AEC6CF",
    },
  },
  buttons: {
    "& .MuiButton-contained": {
      fontSize: 20,
      textTransform: "capitalize",
      fontWeight: "600",
      alignText: "center",
      color: "#111",
      background: "#fcd500",
      "&:hover": {
        background: "#173145",
        color: "#fff",
      },
      border: "2px solid #333",
      padding: "14px 20px",
      marginLeft: "8px",
      borderRadius: "8px",
    },
    "& .MuiSvgIcon-root": {
      fontSize: 30,
      "&:hover": {
        color: "#fff",
      },
    },
    "& .MuiButton-outlined": {
      marginRight: "8px",
      marginLeft: "20px",
      padding: "8px 6px",
      background: " #AEC6CF",
      borderRadius: "8px",
      "&:hover": {
        background: "#173145",
      },
      "& .MuiSvgIcon-root": {
        color: "#008caa",
        fontSize: 40,
        "&:hover": {
          color: "#fff",
        },
      },
    },
  },
});
