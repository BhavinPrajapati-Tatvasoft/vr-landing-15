import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Avatar, Container, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Typography from "@mui/material/Typography";
import { meetingBanner, topBanner } from "../../assets/imgs";
import ScrollAnimation from "react-animate-on-scroll";

const StyledWrapper = styled.div`
  .hero-banner {
    overflow: hidden;
    color: #fff;
    background-image: url(${topBanner});
    background-repeat: repeat;
    background-blend-mode: color-burn;
    background-color: #1b295f;
    padding-top: 56px;
    position: relative;
    & > .MuiAvatar-root {
      max-width: calc(100% - 30px);
      height: auto;
      width: auto;
    }
    & .slick-slider {
      padding-top: 10px;
      padding-bottom: 20px;
    }
  }
  .slick-slider {
    .slick-dots {
      padding-top: 20px;
      display: flex !important;
      li {
        position: relative;
        transition: all 0.4s ease-in-out;
        & button {
          cursor: pointer;
          border: 0;
          background-color: #0000;
          padding: 0;
          color: #fff;
          font-weight: 300;
          font-size: 14px;
          line-height: 20px;
        }
        &:not(:last-child) {
          padding-right: 20px;
          &:after {
            content: "";
            position: absolute;
            background-color: #fff;
            height: 2px;
            width: 0px;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            transition: all 0.4s ease-in-out;
          }
        }
        &.slick-active {
          padding-right: 64px;
          &:after {
            width: 44px;
          }
          & button {
            font-weight: 700;
          }
        }
      }
    }
  }
  // Responsive Media Query
  @media (min-width: 600px) {
    .hero-banner {
      padding-top: 64px;
      & > .MuiAvatar-root {
        max-width: calc(100% - 60px);
      }
      & .slick-slider {
        padding-top: 40px;
        padding-bottom: 60px;
        & p {
          padding-bottom: 30px;
        }
      }
    }
    .slick-slider {
      .slick-dots {
        padding-top: 40px;
        & li {
          & button {
            font-size: 16px;
          }
        }
      }
    }
  }
  @media (min-width: 900px) {
    .hero-banner {
      padding-top: 85px;
      & > .MuiAvatar-root {
        position: absolute;
        right: 0;
        top: 132px;
        left: 50%;
        max-width: calc(50%);
        z-index: 1;
      }
      & .slick-slider {
        padding-top: 120px;
        padding-bottom: 100px;
      }
    }
    .slick-slider {
      .slick-dots {
        padding-top: 50px;
      }
    }
  }
  @media (min-width: 1200px) {
    .hero-banner {
      .slick-slider {
        padding-top: 170px;
        padding-bottom: 116px;
      }
    }
    .slick-slider {
      .slick-dots {
        padding-top: 112px;
      }
    }
  }
  @media (min-width: 1536px) {
    .hero-banner {
      & .slick-slider {
        padding-top: 190px;
        padding-bottom: 114px;
        & p {
          font-size: 15px;
          line-height: 24px;
        }
      }
    }
  }
`;
const HeroBanner: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledWrapper>
      <div className="hero-banner">
        <Avatar variant="square" src={meetingBanner} />
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <ScrollAnimation animateIn="fadeInRight">
                <Slider {...settings}>
                  <div>
                    <Typography variant="h1" sx={{ fontWeight: "300" }}>
                      We Have World Class
                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          fontWeight: "900",
                          fontSize: "inherit",
                          lineHeight: "inherit",
                        }}
                      >
                        Team of Experts
                      </Typography>
                    </Typography>
                    <Typography variant="body1">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout the point of using Lorem Ipsum.It is a long
                      established fact that a reader will be distracted by the
                      readable content of a page.
                    </Typography>
                    <Button color="secondary" variant="contained">
                      Request a Quote
                    </Button>
                  </div>
                  <div>
                    <Typography variant="h1" sx={{ fontWeight: "300" }}>
                      We Have World Class
                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          fontWeight: "900",
                          fontSize: "inherit",
                          lineHeight: "inherit",
                        }}
                      >
                        Team of Experts
                      </Typography>
                    </Typography>
                    <Typography variant="body1">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout the point of using Lorem Ipsum.It is a long
                      established fact that a reader will be distracted by the
                      readable content of a page.
                    </Typography>
                    <Button color="secondary" variant="contained">
                      Request a Quote
                    </Button>
                  </div>
                  <div>
                    <Typography variant="h1" sx={{ fontWeight: "300" }}>
                      We Have World Class
                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          fontWeight: "900",
                          fontSize: "inherit",
                          lineHeight: "inherit",
                        }}
                      >
                        Team of Experts
                      </Typography>
                    </Typography>
                    <Typography variant="body1">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout the point of using Lorem Ipsum.It is a long
                      established fact that a reader will be distracted by the
                      readable content of a page.
                    </Typography>
                    <Button color="secondary" variant="contained">
                      Request a Quote
                    </Button>
                  </div>
                </Slider>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Container>
      </div>
    </StyledWrapper>
  );
};
export default HeroBanner;
