import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Card, Grid, Typography } from "@mui/material";
import useStyles from "./styles";
export const CustomMonthTab = () => {
  const [value, setValue] = React.useState("1");
  const [showActive, setShowActive] = React.useState(false);
  const [color, setColor] = React.useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setColor("#008caa");
  };
  const handleClick = () => {
    setShowActive(true);
  };
  const classes = useStyles({ color, value});
  return (
    <Box sx={{ width: "100%", typography: "body1" }} className={classes.tabs}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Monthly" value="1" />
            <Tab label="Once" value="2" onClick={handleClick} />
          </TabList>
        </Box>
        {showActive ? (
          <TabPanel value="2" className={classes.tabs}>
            <Grid
              container
              component={Card}
              style={{ height: "30vh", width: "40%" }}
            >
              <div>
                <Typography gutterBottom>
                  If you can manage it , a small monthly donation can provide
                  long-term support for communities and enable even more people
                  to lift themselves out of poverty.
                </Typography>
                <Typography gutterBottom>Not this time, thanks</Typography>
              </div>
            </Grid>
          </TabPanel>
        ) : null}
      </TabContext>
    </Box>
  );
};

export const CustomMoneyTab = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="£7" value="1" />
            <Tab label="£12" value="2" />
            <Tab label="£15" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" className={classes.tabs}>
          <Grid container style={{ height: "30vh", width: "40%" }}>
            <div>
              <Typography gutterBottom>
                £7 a month over a year could provide a family with the items
                needed to set up a safe home
              </Typography>
            </div>
          </Grid>
        </TabPanel>
        <TabPanel value="2" className={classes.tabs}>
          <Grid container style={{ height: "30vh", width: "40%" }}>
            <div>
              <Typography gutterBottom>
                £12 a month over a year could provide a wellbeing support to
                someone traumatised by conflict
              </Typography>
            </div>
          </Grid>
        </TabPanel>
        <TabPanel value="3" className={classes.tabs}>
          <Grid container style={{ height: "30vh", width: "40%" }}>
            <div>
              <Typography gutterBottom>
                £15 a month over a year could provide hand washing stations for
                one latrine block
              </Typography>
            </div>
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
};
