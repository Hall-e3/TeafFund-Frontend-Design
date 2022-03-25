import { makeStyles } from "@mui/styles";
import backImage from "../../assets/images/RecoverTogether_TopBanner_RS129727_CreditArletteBashiziTearfund.jpg";
import backImage2 from "../../assets/images/MapGraphic_Homepage_MissionStatement_Desktop.png";
import backImage4 from "../../assets/images/whereyourmoneygoes_nigeria.jpeg";
import backImage6 from "../../assets/images/DonatePage-SmilingChild-Overview.jpg";
// import backImage7 from "../../assets/images/SubscribeTo_Tablet.png";
import backImage8 from "../../assets/images/Footer_Desktop.png";
export default makeStyles({
  main: {
    backgroundImage: `url(${backImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "300px",
    padding: "240px",
  },
  main1: {
    height: "600px",
    padding: "100px",
    "& .MuiTypography-h3": {
      fontWeight: "bold",
      fontSize: 42,
      color: "#111",
    },
    "& .MuiTypography-h4": {
      fontWeight: "400",
      fontSize: 27,
      marginTop: "30px",
      color: "#333",
      marginBottom: "40px",
      display: "block",
      width: "78%",
      margin: "auto",
    },
  },
  main2: {
    // backgroundImage: `url(${backImage2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100px",
    padding: "200px",
    background: "#fcd500",
    "& .MuiTypography-h5": {
      fontWeight: "400",
      fontSize: 22,
      width: "100%",
      margin: "auto",
      marginTop: "20px",
      marginBottom: "40px",
    },
    "& .MuiTypography-h4": {
      fontWeight: "bold",
      fontSize: 42,
      marginTop: "20px",
    },
  },
  div2: {
    margin: "auto",
    "& .MuiButton-outlined": {
      fontWeight: "bold",
      fontSize: 20,
      textTransform: "capitalize",
      color: "#173145",
      textAlign: "center",
      border: "2px solid #333",
      "&:hover": {
        background: "#173145",
        color: "#fff",
      },
      padding: "15px 140px 15px 140px",
    },
  },
  main3: {
    background: "#173145",
    height: "850px",
    padding: "200px",
    "& .MuiTypography-h3": {
      fontWeight: "bold",
      fontSize: 42,
      color: "#fff",
    },
    "& .MuiTypography-h4": {
      fontWeight: "400",
      fontSize: 25,
      marginTop: "30px",
      color: "#fff",
      marginBottom: "40px",
      display: "block",
      width: "70%",
      margin: "auto",
    },
  },
  main4: {
    backgroundImage: `url(${backImage4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "395px",
    padding: "300px",
    background: "#fcd500",
  },
  main5: {
    height: "100px",
    padding: "100px",
    backgroundColor: "#173145",
    "& .MuiTypography-h3": {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 53,
      width: "70%",
      margin: "auto",
    },
  },
  main6: {
    backgroundImage: `url(${backImage6})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "200px",
    padding: "200px",
    background: "#fcd500",
  },
  main7: {
    // backgroundImage: `url(${backImage7})`,
    // left: 0,
    // top: 0,
    // position: "absolute",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    height: "400px",
    padding: "100px",
    background: "#008caa",
    "& .MuiButton-contained": {
      fontWeight: "bold",
      fontSize: 20,
      textTransform: "capitalize",
      background: "#173145",
      color: "#fff",
      textAlign: "center",
      "&:hover": {
        color: "#fff",
        background: "#008caa",
      },
      marginLeft: "40%",
      width: "20%",
      padding: "12px 0px 12px 0px",
      marginBottom: "20px",
    },
    "& .MuiTypography-h4": {
      fontWeight: "bold",
      fontSize: 42,
      marginTop: "20px",
    },
    "& .MuiTypography-h5": {
      fontWeight: "400",
      fontSize: 26,
      width: "75%",
      margin: "auto",
      marginTop: "20px",
    },
    "& .MuiSvgIcon-root": {
      margin: "auto",
    },
    "& .MuiPaper-root": {
      borderRadius: "12px",
      width: "116%",
      height: "50vh",
      marginLeft: "-7%",
    },
  },
  media1: {
    marginTop: "45px",
  },

  main8: {
    // backgroundImage: `url(${backImage8})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "200px",
    padding: "200px",
    background: "#fcd500",
    "& .MuiTypography-root": {
      cursor: "pointer",
    },
    "& .MuiTypography-h4": {
      fontSize: 25,
      fontWeight: "bold",
    },
    "& .MuiSvgIcon-root": {
      opacity: 0.5,
      fontWeight: "bold",
      fontSize: 25,
      marginRight: "4px",
    },
    "& .MuiTypography-caption": {
      fontSize: "1rem",
      lineHeight: "1.625rem",
      width: "60%",
      display: "block",
      opacity: "0.6",
      marginBottom: "30px",
    },
    marginBottom: "40px",
  },
  titleDiv: {
    borderBottom: "1px solid #333",
    marginBottom: "18px",
  },
  items: {
    display: "block",
    "& .MuiTypography-subtitle1": {
      marginBottom: "18px",
    },
  },
  divflex: {
    "& .MuiTypography-h5": {
      fontSize: 20,
      fontWeight: "bold",
      marginRight: "2px",
      marginBottom: "8px",
      "&:hover": {
        borderBottom: "2px solid #111",
      },
    },
    display: "flex",
  },
});
