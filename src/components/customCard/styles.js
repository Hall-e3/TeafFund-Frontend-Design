import { makeStyles } from "@mui/styles";

export default makeStyles({
  cardDown: {
    "& .MuiCard-root": {
      height: 300,
      backgroundColor: "#173145",
      borderRadius: "10px",
    },
    "& .MuiTypography-h5": {
      display: "block",
      width: "80%",
      color: "#fcd500",
    },
    "& .MuiTypography-h6": {
      display: "block",
      width: "100%",
      color: "#fff",
    },
    "& .MuiTypography-root": {
      fontWeight: "bold",
      fontSize: 26,
    },
    "& .MuiButton-contained": {
      fontWeight: "bold",
      fontSize: 20,
      textTransform: "capitalize",
      background: "#fcd500",
      color: "#111",
      textAlign: "center",
      "&:hover": {
        color: "#fff",
        background: "#008caa",
      },
      marginBottom: "20px",
      margin: "auto",
      width: "100%",
      padding: "12px 0px 12px 0px",
    },
  },
  cardPie: {
    "& .MuiCard-root": {
      height: "80vh",
      borderRadius: "10px",
      right: "14%",
      position: "absolute",
      marginTop: "-11%",
      padding: "35px",
    },
    "& .MuiTypography-h3": {
      fontWeight: "bold",
      fontSize: 42,
      margin: "auto",
      marginBottom: "20px",
    },
    "& .MuiTypography-subtitle1": {
      fontWeight: "400",
      fontSize: 20,
      margin: "auto",
      marginBottom: "40px",
    },
    "& .MuiTypography-subtitle2": {
      fontWeight: "bold",
      fontSize: 20,
      margin: "auto",
    },
  },
  customCard: {
    "& .MuiCard-root": {
      height: "40vh",
      borderRadius: "10px",
      right: "14%",
      position: "absolute",
      marginTop: "-4.5%",
      padding: "50px",
    },
    "& .MuiTypography-h3": {
      fontWeight: "600",
      fontSize: 42,
      marginBottom: "30px",
      width: "100%",
    },
    "& .MuiTypography-body2": {
      fontWeight: "400",
      fontSize: 22,
      marginBottom: "40px",
      width: "110%",
    },
    "& .MuiButton-contained": {
      fontWeight: "bold",
      fontSize: 20,
      textTransform: "capitalize",
      background: "#008caa",
      color: "#fff",
      textAlign: "center",
      "&:hover": {
        color: "#fff",
        background: "#173145",
      },
      marginBottom: "20px",
      width: "70%",
      padding: "12px 0px 12px 0px",
    },
  },
  cardImage: {
    "& .MuiTypography-h5": {
      fontWeight: "bold",
      fontSize: 25,
    },
    "& .MuiSvgIcon-root": {
      color: "#008caa",
      marginTop: "2%",
      fontSize: 25,
      fontWeight: "bold",
    },
    "& .MuiTypography-body2": {
      fontSize: 19,
    },
    "& .MuiCard-root": {
      borderRadius: "10px",
    },
  },
  cardImage1: {
    "& .MuiTypography-h5": {
      fontWeight: "bold",
      fontSize: 25,
      width: "90%",
    },
    "& .MuiSvgIcon-root": {
      color: "#008caa",
      marginBottom: "-1%",
      fontSize: 25,
      fontWeight: "bold",
      marginLeft: "1%",
    },
    "& .MuiTypography-body2": {
      fontSize: 19,
    },
    "& .MuiCard-root": {
      borderRadius: "10px",
    },
  },
  media: {
    objectFit: "contain",
    width: " 140%",
    marginWidth: "150px",
    marginLeft: "-6% ",
    marginTop: "-10%",
    transition: " transform .45s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: {
    transition: "box-shadow .3s",
    "&:hover": {
      boxShadow: "10px 10px 10px rgba(33,33,33,.2)",
    },
  },
  cardPayment: {
    "& .MuiCard-root": {
      height: "50vh",
      borderRadius: "10px",
      position: "absolute",
      marginTop: "-6.5%",
      padding: "10px 70px 0px 10px",
      background: "#173145",
    },
    "& .MuiTypography-h3": {
      fontWeight: "bold",
      fontSize: 42,
      marginBottom: "30px",
      width: "100%",
      color: "#fcd500",
    },
    "& .MuiTypography-h6": {
      fontWeight: "bold",
      fontSize: 19,
      marginBottom: "20px",
      width: "120%",
      color:'#fff'
    },
    "& .MuiButton-contained": {
      fontWeight: "bold",
      fontSize: 20,
      textTransform: "capitalize",
      background: "#008caa",
      color: "#fff",
      textAlign: "center",
      "&:hover": {
        color: "#fff",
        background: "#173145",
      },
      marginBottom: "20px",
      width: "70%",
      padding: "12px 0px 12px 0px",
    },
  },
});
