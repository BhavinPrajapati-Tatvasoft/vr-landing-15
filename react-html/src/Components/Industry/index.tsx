import React, { useRef } from "react";
import styled from "styled-components";
import { Avatar, Container, Grid, Tab, Tabs } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  arrowLeftIcon,
  arrowRightIcon,
  awardIconBlue,
  clockIconBlue,
  goalIconBlue,
  happyFaceIconBlue,
  increasingIconBlue,
  lockIconBlue,
  meetingImg,
  slideImg1,
  slideImg2,
  slideImg3,
} from "../../assets/imgs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ScrollAnimation from "react-animate-on-scroll";
const StyledWrapper = styled.section`
  padding: 20px 0 0;
  .MuiTabs-root {
    overflow: visible;
    .MuiTabs-indicator {
      display: none;
    }
    .MuiTabs-scroller {
      overflow: visible !important;
      padding-top: 16px;
    }
    .MuiTab-root {
      background-color: #ffffff;
      min-width: auto;
      padding: 8px;
      overflow: visible;
      box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.11);
      transition: all 0.4s ease-in-out;
      &:not(:last-child) {
        margin-right: 6px;
      }
      &:hover,
      &:focus,
      &.Mui-selected {
        background-color: #3031a5;
        .MuiAvatar-root {
          filter: brightness(0) invert(1);
        }
      }
      &.Mui-selected {
        &:after {
          opacity: 1;
        }
      }
      &:hover,
      &:focus {
        .MuiAvatar-root {
          transform: scale(1.2);
        }
      }
      &:after {
        content: "";
        height: 0;
        width: 0;
        display: inline-block;
        vertical-align: middle;
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 4px solid #0000;
        border-right: 4px solid #0000;
        border-top: 8px solid;
        border-top-color: #3031a5;
        transition: all 0.4s ease-in-out;
        opacity: 0;
        z-index: -1;
      }
      .MuiAvatar-root {
        height: 24px;
        margin: 0 auto;
        width: 24px;
        transition: all 0.4s ease-in-out;
        transform: scale(1);
      }
    }
  }
  .panel-wrapper {
    overflow: hidden;
    padding: 10px;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.11);
  }
  .tab-content {
    padding-top: 10px;
    padding-bottom: 20px;
  }
  .slider-wrapper {
    .heading {
      font-weight: 700;
      padding-bottom: 10px;
    }
  }
  .slider-content {
    position: relative;
  }
  .slide-wrapper {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .slick-slide {
    padding: 0 5px;
  }
  .inner-content {
    text-align: center;
    margin-top: 60px;
    padding: 20px 20px 30px;
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.49) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.49) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.49) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#7d000000',GradientType=0 ); /* IE6-9 */
    .MuiTypography-body1 {
      text-transform: uppercase;
      font-size: 15px;
      color: #fff;
      line-height: 20px;
      padding-bottom: 0;
      font-weight: 700;
    }
    .MuiTypography-h3 {
      color: #fff;
      padding-bottom: 0;
      font-weight: 700;
    }
  }
  .arrow-btn {
    display: inline-flex;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.11);
    position: absolute;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
    background-color: #fff;
    .MuiButton-root {
      padding: 0;
    }
    .next-arrow {
      &:after {
        content: "";
        position: absolute;
        height: 40px;
        width: 1px;
        background-color: #e0e0e0;
        top: 50%;
        transform: translateY(-50%);
        left: -1px;
      }
    }
  }
  // Responsive Media Query
  @media (min-width: 600px) {
    padding: 38px 0 0;
    .MuiTabs-root {
      &:not(:last-child) {
        margin-right: 16px;
      }
      .MuiTabs-scroller {
        padding-top: 24px;
      }
      .MuiTab-root {
        padding: 14px;
        &:after {
          bottom: -10px;
          border-left-width: 10px;
          border-right-width: 10px;
          border-top-width: 16px;
        }
        .MuiAvatar-root {
          height: 38px;
          width: 38px;
        }
      }
    }
    .panel-wrapper {
      padding: 20px;
    }
    .tab-content {
      padding-top: 20px;
      padding-bottom: 40px;
    }
    .slider-wrapper {
      .heading {
        text-align: center;
        padding-bottom: 16px;
      }
    }
    .slick-slide {
      padding: 0 8px;
    }
    .inner-content {
      margin-top: 120px;
      padding: 30px 20px 40px;
      .MuiTypography-body1 {
        padding-bottom: 8px;
      }
    }
    .arrow-btn {
      bottom: -30px;
      .MuiButton-root {
        padding: 10px;
      }
    }
  }
  @media (min-width: 900px) {
    padding: 58px 0 0;
    .MuiTabs-root {
      .MuiTab-root {
        padding: 22px;
        &:not(:last-child) {
          margin-right: 30px;
        }
        .MuiAvatar-root {
          height: 68px;
          width: 68px;
        }
      }
    }
    .panel-wrapper {
      padding: 38px 30px;
    }
    .tab-content {
      padding-top: 40px;
      padding-bottom: 60px;
    }
    .slider-wrapper {
      .heading {
        padding-bottom: 20px;
      }
    }
    .slick-slide {
      padding: 0 15px;
    }
    .inner-content {
      margin-top: 200px;
      padding: 42px 20px 60px;
    }
    .arrow-btn {
      bottom: -34px;
      .MuiButton-root {
        padding: 14px;
      }
    }
  }
  @media (min-width: 1200px) {
    padding: 78px 0 40px;
    .MuiTabs-root {
      .MuiTab-root {
        padding: 46px;
      }
    }
    .panel-wrapper {
      padding: 48px 35px;
    }
    .tab-content {
      padding-bottom: 80px;
    }
    .slider-wrapper {
      .heading {
        padding-bottom: 30px;
      }
    }
    .inner-content {
      margin-top: 264px;
      padding: 42px 20px 80px;
    }
    .arrow-btn {
      bottom: -40px;
      .MuiButton-root {
        padding: 20px;
      }
    }
  }
  @media (min-width: 1536px) {
    padding: 88px 0 40px;
    .slider-wrapper {
      .heading {
        padding-bottom: 40px;
      }
    }
  }
`;

// Tabs
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="tab-content"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box className="panel-wrapper">{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Slider
const Industry: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const settings = {
    infinite: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 1.68,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const customSlider = useRef<Slider | null>(null);

  return (
    <StyledWrapper>
      {/* Industry Tabs Start */}
      <Container maxWidth="xl">
        <ScrollAnimation animateIn="fadeIn">
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: { xs: "start", sm: "space-between" },
              alignItems: { xs: "start", sm: "center" },
            }}
          >
            <Grid item sm={6} md={5}>
              <Typography
                variant="h2"
                sx={{
                  pb: { xs: 2, sm: 0 },
                  fontWeight: 700,
                }}
              >
                Best Pratices from Industy Experts
              </Typography>
            </Grid>
            <Grid item sm={6} md={4}>
              <Typography
                variant="body1"
                sx={{
                  pb: 0,
                }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content.
              </Typography>
            </Grid>
          </Grid>
        </ScrollAnimation>
        <Box sx={{ width: "100%" }}>
          <Box>
            <ScrollAnimation animateIn="fadeIn">
              <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  icon={
                    <Avatar title="Lock" src={lockIconBlue} variant="square" />
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  icon={
                    <Avatar title="Lock" src={clockIconBlue} variant="square" />
                  }
                  {...a11yProps(1)}
                />
                <Tab
                  icon={
                    <Avatar
                      title="Lock"
                      src={increasingIconBlue}
                      variant="square"
                    />
                  }
                  {...a11yProps(2)}
                />
                <Tab
                  icon={
                    <Avatar
                      title="Lock"
                      src={happyFaceIconBlue}
                      variant="square"
                    />
                  }
                  {...a11yProps(3)}
                />
                <Tab
                  icon={
                    <Avatar title="Lock" src={awardIconBlue} variant="square" />
                  }
                  {...a11yProps(4)}
                />
                <Tab
                  icon={
                    <Avatar title="Lock" src={goalIconBlue} variant="square" />
                  }
                  {...a11yProps(5)}
                />
              </Tabs>
            </ScrollAnimation>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid container spacing={2} sx={{ alignItems: { md: "center" } }}>
              <Grid item sm={6} md="auto">
                <Avatar
                  src={meetingImg}
                  className="img-fluid"
                  variant="square"
                  sx={{
                    height: "auto",
                    width: "auto",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </Grid>
              <Grid item xs>
                <ScrollAnimation animateIn="fadeIn">
                  <Typography
                    variant="h3"
                    sx={{ pb: { xs: 1, md: 2 }, fontWeight: 700 }}
                  >
                    We Provide 100% safety of your all data
                  </Typography>
                  <Typography variant="body1" sx={{ pb: { xs: 2, md: 3 } }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </Typography>
                  <Typography variant="body1" sx={{ pb: { xs: 0, md: 3 } }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Typography>
                  <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                    Explore More
                  </Button>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container spacing={2} sx={{ alignItems: { md: "center" } }}>
              <Grid item sm={6} md="auto">
                <Avatar
                  src={meetingImg}
                  className="img-fluid"
                  variant="square"
                  sx={{ height: "auto", width: "auto" }}
                />
              </Grid>
              <Grid item xs>
                <ScrollAnimation animateIn="fadeIn">
                  <Typography
                    variant="h3"
                    sx={{ pb: { xs: 1, md: 2 }, fontWeight: 700 }}
                  >
                    We Provide 100% safety of your all data
                  </Typography>
                  <Typography variant="body1" sx={{ pb: { xs: 2, md: 3 } }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </Typography>
                  <Typography variant="body1" sx={{ pb: { xs: 0, md: 3 } }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Typography>
                  <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                    Explore More
                  </Button>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container spacing={2} sx={{ alignItems: { md: "center" } }}>
              <Grid item sm={6} md="auto">
                <Avatar
                  src={meetingImg}
                  className="img-fluid"
                  variant="square"
                  sx={{ height: "auto", width: "auto" }}
                />
              </Grid>
              <Grid item xs>
                <ScrollAnimation animateIn="fadeIn">
                  <Typography
                    variant="h3"
                    sx={{ pb: { xs: 1, md: 2 }, fontWeight: 700 }}
                  >
                    We Provide 100% safety of your all data
                  </Typography>
                  <Typography variant="body1" sx={{ pb: { xs: 2, md: 3 } }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </Typography>
                  <Typography variant="body1" sx={{ pb: { xs: 0, md: 3 } }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Typography>
                  <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                    Explore More
                  </Button>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Grid container spacing={2} sx={{ alignItems: { md: "center" } }}>
              <Grid item sm={6} md="auto">
                <Avatar
                  src={meetingImg}
                  className="img-fluid"
                  variant="square"
                  sx={{ height: "auto", width: "auto" }}
                />
              </Grid>
              <Grid item xs>
                <ScrollAnimation animateIn="fadeIn">
                  <Typography
                    variant="h3"
                    sx={{ pb: { xs: 1, md: 2 }, fontWeight: 700 }}
                  >
                    We Provide 100% safety of your all data
                  </Typography>
                  <Typography variant="body1" sx={{ pb: { xs: 2, md: 3 } }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </Typography>
                  <Typography variant="body1" sx={{ pb: { xs: 0, md: 3 } }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Typography>
                  <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                    Explore More
                  </Button>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Grid container spacing={2} sx={{ alignItems: { md: "center" } }}>
              <Grid item sm={6} md="auto">
                <Avatar
                  src={meetingImg}
                  className="img-fluid"
                  variant="square"
                  sx={{ height: "auto", width: "auto" }}
                />
              </Grid>
              <Grid item xs>
                <ScrollAnimation animateIn="fadeIn">
                  <Typography
                    variant="h3"
                    sx={{ pb: { xs: 1, md: 2 }, fontWeight: 700 }}
                  >
                    We Provide 100% safety of your all data
                  </Typography>
                  <Typography variant="body1" sx={{ pb: { xs: 2, md: 3 } }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </Typography>
                  <Typography variant="body1" sx={{ pb: { xs: 0, md: 3 } }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Typography>
                  <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                    Explore More
                  </Button>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Grid container spacing={2} sx={{ alignItems: { md: "center" } }}>
              <Grid item sm={6} md="auto">
                <Avatar
                  src={meetingImg}
                  className="img-fluid"
                  variant="square"
                  sx={{ height: "auto", width: "auto" }}
                />
              </Grid>
              <Grid item xs>
                <ScrollAnimation animateIn="fadeIn">
                  <Typography
                    variant="h3"
                    sx={{ pb: { xs: 1, md: 2 }, fontWeight: 700 }}
                  >
                    We Provide 100% safety of your all data
                  </Typography>
                  <Typography variant="body1" sx={{ pb: { xs: 2, md: 3 } }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </Typography>
                  <Typography variant="body1" sx={{ pb: { xs: 0, md: 3 } }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Typography>
                  <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                    Explore More
                  </Button>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
      </Container>
      {/* Industry Tabs End */}
      {/* Industry Slider Start */}
      <div className="slider-wrapper">
        <ScrollAnimation animateIn="fadeIn">
          <Typography
            variant="h2"
            className="heading"
            sx={{ pl: { xs: 2, sm: 0 } }}
          >
            Best Pratices from Industy Experts
          </Typography>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div className="slider-content">
            <Slider {...settings} ref={customSlider}>
              <Box
                className="slide-wrapper"
                sx={{ backgroundImage: `url(${slideImg1})` }}
              >
                <Box className="inner-content">
                  <Typography variant="body1">Technology</Typography>
                  <Typography variant="h3">Innovative Surface</Typography>
                </Box>
              </Box>
              <Box
                className="slide-wrapper"
                sx={{ backgroundImage: `url(${slideImg2})` }}
              >
                <Box className="inner-content">
                  <Typography variant="body1">Technology</Typography>
                  <Typography variant="h3">Innovative Surface</Typography>
                </Box>
              </Box>
              <Box
                className="slide-wrapper"
                sx={{ backgroundImage: `url(${slideImg3})` }}
              >
                <Box className="inner-content">
                  <Typography variant="body1">Technology</Typography>
                  <Typography variant="h3">Innovative Surface</Typography>
                </Box>
              </Box>
              <Box
                className="slide-wrapper"
                sx={{ backgroundImage: `url(${slideImg1})` }}
              >
                <Box className="inner-content">
                  <Typography variant="body1">Technology</Typography>
                  <Typography variant="h3">Innovative Surface</Typography>
                </Box>
              </Box>
              <Box
                className="slide-wrapper"
                sx={{ backgroundImage: `url(${slideImg2})` }}
              >
                <Box className="inner-content">
                  <Typography variant="body1">Technology</Typography>
                  <Typography variant="h3">Innovative Surface</Typography>
                </Box>
              </Box>
              <Box
                className="slide-wrapper"
                sx={{ backgroundImage: `url(${slideImg3})` }}
              >
                <Box className="inner-content">
                  <Typography variant="body1">Technology</Typography>
                  <Typography variant="h3">Innovative Surface</Typography>
                </Box>
              </Box>
            </Slider>
            <div className="arrow-btn">
              <Button
                className="prev-arrow"
                onClick={() => customSlider?.current?.slickPrev()}
              >
                <Avatar src={arrowLeftIcon} title="Left Icon" />
              </Button>
              <Button
                className="next-arrow"
                onClick={() => customSlider?.current?.slickNext()}
              >
                <Avatar src={arrowRightIcon} title="Right Icon" />
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {/* Industry Slider End */}
    </StyledWrapper>
  );
};
export default Industry;
