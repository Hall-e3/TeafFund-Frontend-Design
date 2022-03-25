import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import { CustomButton } from "../customButton/CustomButton";
import useStyles from "./styles";
export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, background: "#fcd500", padding: "80px" }}
    >
      <Toolbar>
        <Grid
          style={{ display: "flex" }}
          container
          justifyContent="space-evenly"
          spacing={1}
          className={classes.container}
        >
          <Grid item xs={6}>
            <Typography
              color="#111"
              variant="subtitle1"
              style={{
                width: "60%",
                fontSize: 18,
                fontWeight: "100",
                marginLeft: "25%",
              }}
            >
              We use cookies to provide you with personalised content and ensure
              that we give you the best experience on our website. You can
              choose which cookies you're happy for us to use.
            </Typography>
          </Grid>

          <Grid style={{ display: "flex" }} item xs={6}>
            <div className={classes.left}>
              <CustomButton text="Manage Preferences" variant="outlined" />
            </div>
            <div className={classes.right}>
              <CustomButton text="Accept All" variant="contained" />
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
