import { Container, Grid, Paper, Typography } from "@mui/material";
import { CustomButton } from "../customButton/CustomButton";
import {
  CustomCard,
  CustomCardDown,
  CustomCardImage,
  CustomCardImage1,
  CustomCardPayment,
  CustomCardPie,
} from "../customCard/CustomCard";
import Image1 from "../../assets/images/Afghanistan-CampaignPageBanner-GivingWidget-CreditTearfundPartner.jpg";
import Image2 from "../../assets/images/TheGreatFashionFastLandingPageBannerCampaignBannerVariant1AW.jpg";
import Image3 from "../../assets/images/Lent-Devotional-2022-LandingPage-Banner.jpg";
import Image4 from "../../assets/images/CampaignsHubPage-IraqChildren-Overview.jpg";
import Image5 from "../../assets/images/Stories-Overview-RS117871-CreditTomPriceTearfund.jpg";
import Image6 from "../../assets/images/GetInvolved-Overview-RS96344-CreditTomPriceTearfund.jpg";
import Image7 from "../../assets/images/AboutUs_Overview_RS95870_CreditTomPriceTearfund.jpg";
import Image8 from "../../assets/images/DonatePage-SmilingChild-Overview.jpg";
import email from "../../assets/images/SubscribeTo-Email.svg";
import useStyles from "./styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LaunchIcon from "@mui/icons-material/Launch";

export default function HomeContent() {
  const classes = useStyles();
  return (
    <div>
      <div style={{ marginTop: "96px" }} />
      <main className={classes.main}>
        <CustomCard
          title="Recover Together from Covid-19"
          subtitle="Join us today in standing alongside those living in poverty and helping them to start over again"
          button={<CustomButton text="Please donate now" />}
        />
      </main>
      <main className={classes.main1}>
        <Container style={{ marginTop: "-2%" }}>
          <div style={{ marginBottom: "10px" }}>
            <Typography variant="h3" gutterBottom textAlign="center">
              Join us and play your part
            </Typography>
          </div>
          <div
            style={{
              borderBottom: "5px solid #008caa",
              width: "5%",
              margin: "auto",
            }}
          />
          <div>
            <Typography variant="h4" gutterBottom textAlign="center">
              God is calling all of us to play our part and bring an end to
              extreme poverty and injustice.
            </Typography>
          </div>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={5}
          >
            <CustomCardImage1
              title="Afghanistan Crisis Appeal"
              subtitle="People forced from their homes by conflict need support now. Your donation will help save lives."
              cardImage={Image1}
            />

            <CustomCardImage1
              title="Reverse fast fashion with The Great Fashion Fast "
              subtitle="Wear just ten items of clothing from the month of March, get sponsored, and help tackle the climate crisis."
              cardImage={Image2}
            />

            <CustomCardImage1
              title="Get your free Lent Devotional"
              subtitle="One: Bite-sized daily reflections, prayers and poems to help draw nearer to God as we approach Easter."
              cardImage={Image3}
            />
          </Grid>
        </Container>
      </main>
      <main className={classes.main2}>
        <Container>
          <Grid container spacing={5} style={{ marginTop: "-10%" }}>
            <div className={classes.div2}>
              <Typography variant="h4" gutterBottom textAlign="center">
                What to do
              </Typography>
            </div>
            <div className={classes.div2}>
              <Typography variant="h5" gutterBottom textAlign="center">
                Tearfund is a Christain charity that partners with churches in
                more than 50 of the world's poorest countries. We tackle poverty
                through sustainable development, responding to diasters, and
                challenging injustice. We believe an end to extreme poverty is
                possible.
              </Typography>
            </div>
            <div className={classes.div2}>
              <CustomButton text="About us" variant="outlined" />
            </div>
          </Grid>
        </Container>
      </main>
      <main className={classes.main3}>
        <Container style={{ marginTop: "-10%" }}>
          <div>
            <Typography variant="h3" gutterBottom textAlign="center">
              Find out more
            </Typography>
          </div>
          <div
            style={{
              borderBottom: "5px solid #fcd500",
              width: "4%",
              margin: "auto",
            }}
          />
          <div>
            <Typography variant="h4" gutterBottom textAlign="center">
              Discover more about Tearfund and how you can get involved with our
              work around the world.
            </Typography>
          </div>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            style={{ display: "flex" }}
            spacing={5}
          >
            <CustomCardImage
              title="Campaigns"
              subtitle="Play your part in Tearfund's latest appeals, activities, events, fundraisers and opportunities to speak out."
              cardImage={Image4}
            />

            <CustomCardImage
              title="Stories"
              subtitle="Read stories from Tearfund's work responding to diasters and helping people lift themselves out of poverty."
              cardImage={Image5}
            />

            <CustomCardImage
              title="Get involved"
              subtitle="There are many ways that you can get involved, speak out, and take action to release people from poverty."
              cardImage={Image6}
            />

            <CustomCardImage
              title="About us"
              subtitle="Find out about Tearfund, our vision, mission, values, and story, and meet our executive team and board."
              cardImage={Image7}
            />

            <CustomCardImage
              title="Donate now"
              subtitle="Your support will make a huge difference to struggling families across the world"
              cardImage={Image8}
            />
          </Grid>
        </Container>
      </main>
      <main className={classes.main4}>
        <CustomCardPie
          title="Where your money goes"
          subtitle="We're committed to making sure your donation has the biggest possible impact for those in greatest need."
          subtitle1="Select the numbers below to see how every pound you donate is used."
          buttonText="Read more about where your money goes"
        />
      </main>

      <main className={classes.main5}>
        <div>
          <Typography variant="h3" textAlign="center">
            <span style={{ color: "#fcd500" }}>1 in 10</span> people are living
            in extreme poverty. Help more people break free.
          </Typography>
        </div>
      </main>
      <main className={classes.main6}>
        <CustomCardPayment
          title="Donate now"
          subtitle="Help lift more people out of extreme poverty."
          button={<CustomButton type="submit" text="Please donate" />}
        />
      </main>
      <main className={classes.main7}>
        <Container>
          <Grid item style={{ marginTop: "-20px" }}>
            <Paper>
              <div style={{ paddingLeft: "46%" }}>
                <img src={email} alt="email icon" className={classes.media1} />
              </div>
              <div>
                <Typography variant="h4" gutterBottom textAlign="center">
                  Get our email updates
                </Typography>
              </div>
              <div>
                <Typography variant="h5" textAlign="center" gutterBottom>
                  Learn about our work and stay in touch with all things
                  Tearfund. Hear about our news, activities and appeals by
                  email.
                </Typography>
              </div>
              <div style={{ marginTop: "30px" }}>
                <CustomButton text="Sign up now" />
              </div>
            </Paper>
          </Grid>
        </Container>
      </main>
      <main className={classes.main8}>
        <Grid
          container
          direction="row"
          spacing={10}
          style={{ marginTop: "-13%", marginRight: "18px", marginLeft: "18px" }}
        >
          <Grid item>
            <div className={classes.titleDiv}>
              <Typography variant="h4" gutterBottom>
                Useful links
              </Typography>
            </div>
            <div className={classes.items}>
              <Typography variant="subtitle1" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Media
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Jobs
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                FAQs
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <Grid item>
              <div className={classes.titleDiv}>
                <Typography variant="h4" gutterBottom>
                  Our policies
                </Typography>
              </div>
              <div className={classes.items}>
                <Typography variant="subtitle1" gutterBottom>
                  Safeguarding
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Privacy
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Standards
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Terms and conditions
                </Typography>
                <Typography variant="subtitle1">
                  Diversity and inclusion
                </Typography>
                <Typography variant="subtitle1">See all policies</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <div>
              <div className={classes.divflex}>
                <Typography variant="h5">The Well</Typography>
                <ArrowForwardIosIcon />
              </div>
              <Typography gutterBottom variant="caption">
                A powerful initiative working with Black Christains in the Uk
              </Typography>
            </div>
            <div>
              <div className={classes.divflex}>
                <Typography variant="h5" gutterBottom>
                  We are Tearfund
                </Typography>
                <LaunchIcon />
              </div>
              <Typography gutterBottom variant="caption">
                A movement of young people who are determined to end poverty
              </Typography>
            </div>
            <div>
              <div className={classes.divflex}>
                <Typography variant="h5" gutterBottom>
                  Tearfund Learn
                </Typography>
                <LaunchIcon />
              </div>
              <Typography variant="caption">
                Resources and tools to equip those working to end poverty
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <CustomCardDown
              title="Poverty is not God's plan.
               You are."
              subtitle="Support our work and change lives."
              button={<CustomButton text="Donate now" />}
            />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
