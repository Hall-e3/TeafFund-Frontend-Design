import { Box, Typography, Toolbar, AppBar, Container } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CustomButton, IconCustomButton } from "../customButton/CustomButton";
import SearchIcon from "@mui/icons-material/Search";
import ImageLogo from "../Image/Image";
import useStyles from "./styles";

export default function Header() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="inherit">
        <Container>
          <Toolbar>
            <div className={classes.divflex}>
              <div className={classes.divimage}>
                <ImageLogo />
              </div>
              <div className={classes.div1flex}>
                <div className={classes.div}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    textAlign="center"
                  >
                    Campaigns
                  </Typography>
                  <KeyboardArrowDownIcon />
                </div>
                <div className={classes.div}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    textAlign="center"
                  >
                    Stories
                  </Typography>
                  <KeyboardArrowDownIcon />
                </div>
                <div className={classes.div}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    textAlign="center"
                  >
                    Get Involved
                  </Typography>
                  <KeyboardArrowDownIcon />
                </div>
                <div className={classes.div}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    textAlign="center"
                  >
                    About us
                  </Typography>
                  <KeyboardArrowDownIcon />
                </div>
              </div>
              <div className={classes.buttons}>
                <CustomButton icon={<SearchIcon />} variant="outlined" />
                <CustomButton text="Donate" icon={<KeyboardArrowDownIcon />} />
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
