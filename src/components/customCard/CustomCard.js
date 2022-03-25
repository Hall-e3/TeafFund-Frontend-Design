import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useStyles from "./styles";
import {
  CustomMoneyTab,
  CustomMonthTab,
} from "../customTabsButton/CustomCircleTabs";
export const CustomCardImage1 = ({
  cardImage,
  cardImageAlt,
  title,
  subtitle,
  button,
  ...others
}) => {
  const classes = useStyles();
  return (
    <Grid
      {...others}
      item
      xs={12}
      sm={12}
      md={4}
      className={classes.cardImage1}
    >
      <Card
        sx={{
          maxWidth: 450,
          height: 500,
          border: "2px solid #707070",
          cursor: "pointer",
        }}
        className={classes.card}
      >
        <CardContent>
          <img src={cardImage} alt={cardImageAlt} className={classes.media} />
          <div style={{ marginTop: "30px", marginBottom: "20px" }}>
            <Typography gutterBottom variant="h5">
              {title}
              <ArrowForwardIosIcon fontSize="small" />
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            {subtitle}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export const CustomCardImage = ({
  cardImage,
  cardImageAlt,
  title,
  subtitle,
  button,
  ...others
}) => {
  const classes = useStyles();
  return (
    <Grid {...others} item xs={12} sm={12} md={4} className={classes.cardImage}>
      <Card sx={{ maxWidth: 400, height: 455 }}>
        <CardContent>
          <img src={cardImage} alt={cardImageAlt} className={classes.media} />
          <div
            style={{ display: "flex", marginTop: "30px", marginBottom: "10px" }}
          >
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <ArrowForwardIosIcon fontSize="small" />
          </div>
          <Typography variant="body2" color="textSecondary">
            {subtitle}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export const CustomCard = ({ title, subtitle, button, ...others }) => {
  const classes = useStyles();
  return (
    <Grid {...others} item xs={12} sm={12} className={classes.customCard}>
      <Card sx={{ maxWidth: 420 }}>
        <CardContent>
          <Typography variant="h3" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {subtitle}
          </Typography>
        </CardContent>
        <CardActions>{button}</CardActions>
      </Card>
    </Grid>
  );
};

export const CustomCardDown = ({
  cardImage,
  cardImageAlt,
  title,
  subtitle,
  button,
  ...others
}) => {
  const classes = useStyles();
  return (
    <Grid {...others} item xs={12} sm={12} className={classes.cardDown}>
      <Card sx={{ maxWidth: 260, padding: "20px" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {subtitle}
            </Typography>
          </CardContent>
          <CardActions>{button}</CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
export const CustomCardPie = ({
  title,
  subtitle,
  subtitle1,
  buttonText,
  ...others
}) => {
  const classes = useStyles();
  return (
    <Grid {...others} item xs={12} sm={12} className={classes.cardPie}>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography variant="h3" component="div" gutterBottom>
            {title}
          </Typography>
          <div
            style={{
              borderBottom: "5px solid #333",
              marginBottom: "20px",
              width: "10%",
            }}
          ></div>
          <Typography variant="subtitle1" gutterBottom>
            {subtitle}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {subtitle1}
          </Typography>

          <div>
            <Button
              style={{
                borderRadius: "50%",
                border: "14px solid blue",
              }}
            >
              <IconButton style={{ padding: "30px" }}>78p</IconButton>
            </Button>
            <Button
              style={{
                borderRadius: "50%",
                border: "14px solid blue",
              }}
            >
              <IconButton style={{ padding: "30px" }}>11p</IconButton>
            </Button>
            <Button
              style={{
                borderRadius: "50%",
                border: "14px solid blue",
              }}
            >
              <IconButton style={{ padding: "30px" }}>11p</IconButton>
            </Button>
          </div>
        </CardContent>
        <CardActions>
          <Typography>{buttonText}</Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export const CustomCardPayment = ({ title, subtitle, button, ...others }) => {
  const classes = useStyles();
  return (
    <Grid {...others} item xs={12} sm={12} className={classes.cardPayment}>
      <Card sx={{ maxWidth: 400, padding: "20px" }}>
        <CardContent>
          <div>
            <Typography gutterBottom variant="h3" component="div">
              {title}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {subtitle}
            </Typography>
          </div>
          <div>
            <CustomMonthTab />
            <CustomMoneyTab />
          </div>
        </CardContent>
        <CardActions>
          <div>
            <form>
              <TextField
                variant="standard"
                placeholder="£ other amount"
              ></TextField>
            </form>
            {button}
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
};
