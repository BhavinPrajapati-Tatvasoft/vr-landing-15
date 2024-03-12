import { Avatar, Button, Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import {
  chartIconBlue,
  codiconLockIconBlue,
  cursorClickIconBlue,
  fastForwardIconBlue,
  settingsIconBlue,
} from "../../assets/imgs";

const StyledWrapper = styled.section`
  padding-top: 30px;
  padding-bottom: 10px;
  overflow: hidden;
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -24px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 24px; /* gutter size */
    background-clip: padding-box;
    .MuiLink-root {
      display: block;
      color: #000;
      box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.11);
      transition: all 0s;
      &:hover {
        color: #fff;
        .card {
          background-color: #3031a5;
          &::after {
            background-color: #ff7629;
          }
        }
        .MuiTypography-caption {
          background-color: #fff;
        }
        .MuiAvatar-root {
          filter: none;
        }
      }
    }
    .card {
      padding: 20px 10px;
      text-align: center;
      display: block;
      border: none;
      position: relative;
      border-radius: 0;
      transition: all 0.3s;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 6px;
        width: 100%;
        transition: all 0.3s;
        background-color: #3031a5;
      }
    }
    .MuiTypography-caption {
      border-radius: 50%;
      padding: 14px;
      display: inline-block;
      vertical-align: middle;
      margin-bottom: 10px;
      transition: all 0.3s;
      background-color: #3031a5;
    }
    .MuiAvatar-root {
      height: 26px;
      width: 26px;
      transition: all 0.3s;
      filter: brightness(0) invert(1);
      display: block;
    }
  }

  /* Style your items */
  .my-masonry-grid_column > .MuiBox-root {
    margin-bottom: 12px;
  }
  // Responsive Media Query
  @media (min-width: 600px) {
    padding-top: 50px;
    padding-bottom: 20px;
    .my-masonry-grid_column > .MuiBox-root {
      margin-bottom: 20px;
    }
    .my-masonry-grid_column {
      .MuiTypography-caption {
        padding: 18px;
      }
      .MuiAvatar-root {
        height: 30px;
        width: 30px;
      }
    }
  }
  @media (min-width: 900px) {
    padding-bottom: 40px;
    .my-masonry-grid_column {
      padding-left: 18px;
    }
    .my-masonry-grid_column > .MuiBox-root {
      margin-bottom: 30px;
    }
    .my-masonry-grid_column {
      .card {
        padding: 20px 16px;
      }
      .MuiTypography-caption {
        padding: 30px;
        margin-bottom: 26px;
      }
      .MuiAvatar-root {
        height: 50px;
        width: 50px;
      }
    }
  }
  @media (min-width: 1200px) {
    padding: 90px 0 50px;
    .my-masonry-grid_column {
      padding-left: 24px;
    }
    .my-masonry-grid_column > .MuiBox-root {
      margin-bottom: 40px;
    }
    .my-masonry-grid_column {
      .card {
        padding: 50px 32px 44px;
      }
      .MuiTypography-caption {
        padding: 36px;
      }
    }
  }
  @media (min-width: 1536px) {
    padding: 90px 0 60px;
  }
`;
const Solution: React.FC = () => {
  const breakpointColumnsObj = {
    default: 3,
    899: 2,
    599: 1,
  };
  return (
    <StyledWrapper>
      <Container maxWidth="xl">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <Box>
            <ScrollAnimation animateIn="fadeIn">
              <Typography
                variant="h2"
                sx={{ pb: { xs: 0.5, sm: 1, md: 3 }, fontWeight: 700 }}
              >
                Solution &amp; Focus Areas
              </Typography>
              <Typography
                variant="body1"
                sx={{ pb: { xs: 0.5, sm: 1, md: 3 } }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content.
              </Typography>
              <Button color="secondary" variant="contained">
                Explore More
              </Button>
            </ScrollAnimation>
          </Box>
          <Box>
            <Link href="#" title="Secure authentication" sx={{ mt: { md: 2 } }}>
              <ScrollAnimation animateIn="fadeIn">
                <Box className="card">
                  <Typography variant="caption">
                    <Avatar
                      variant="square"
                      src={codiconLockIconBlue}
                      alt="Secure authentication"
                    />
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ pb: { xs: 1, sm: 2 }, fontWeight: 500 }}
                  >
                    Secure authentication
                  </Typography>
                  <Typography variant="body1" sx={{ pb: 0 }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution.
                  </Typography>
                </Box>
              </ScrollAnimation>
            </Link>
          </Box>
          <Box sx={{ pt: { lg: 3 } }}>
            <Link href="#" title="Paid Subscription" sx={{ mt: { lg: 6 } }}>
              <ScrollAnimation animateIn="fadeIn">
                <Box className="card">
                  <Typography variant="caption">
                    <Avatar
                      variant="square"
                      src={cursorClickIconBlue}
                      alt="Paid Subscription"
                    />
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ pb: { xs: 1, sm: 2 }, fontWeight: 500 }}
                  >
                    Paid Subscription
                  </Typography>
                  <Typography variant="body1" sx={{ pb: 0 }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Typography>
                </Box>
              </ScrollAnimation>
            </Link>
          </Box>
          <Box>
            <Link href="#" title="Product Engineering">
              <ScrollAnimation animateIn="fadeIn">
                <Box className="card">
                  <Typography variant="caption">
                    <Avatar
                      variant="square"
                      src={settingsIconBlue}
                      alt="Product Engineering"
                    />
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ pb: { xs: 1, sm: 2 }, fontWeight: 500 }}
                  >
                    Product Engineering
                  </Typography>
                  <Typography variant="body1" sx={{ pb: 0 }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution.
                  </Typography>
                </Box>
              </ScrollAnimation>
            </Link>
          </Box>
          <Box>
            <Link href="#" title="Fast, Global Manager">
              <ScrollAnimation animateIn="fadeIn">
                <Box className="card">
                  <Typography variant="caption">
                    <Avatar
                      variant="square"
                      src={fastForwardIconBlue}
                      alt="Fast, Global Manager"
                    />
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ pb: { xs: 1, sm: 2 }, fontWeight: 500 }}
                  >
                    Fast, Global Manager
                  </Typography>
                  <Typography variant="body1" sx={{ pb: 0 }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Typography>
                </Box>
              </ScrollAnimation>
            </Link>
          </Box>
          <Box>
            <Link href="#" title="Personalised experiences">
              <ScrollAnimation animateIn="fadeIn">
                <Box className="card">
                  <Typography variant="caption">
                    <Avatar
                      variant="square"
                      src={chartIconBlue}
                      alt="Personalised experiences"
                    />
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ pb: { xs: 1, sm: 2 }, fontWeight: 500 }}
                  >
                    Personalised experiences
                  </Typography>
                  <Typography variant="body1" sx={{ pb: 0 }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution.
                  </Typography>
                </Box>
              </ScrollAnimation>
            </Link>
          </Box>
        </Masonry>
      </Container>
    </StyledWrapper>
  );
};
export default Solution;
