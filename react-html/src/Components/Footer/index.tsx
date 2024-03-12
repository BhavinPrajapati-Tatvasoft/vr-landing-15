import { Avatar, Grid, List, ListItem } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Link from "@mui/material/Link";
import {
  callIcon,
  envelopIcon,
  faceBookIcon,
  instagramIcon,
  locationIcon,
  logo,
  twitterIcon,
} from "../../assets/imgs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ScrollAnimation from "react-animate-on-scroll";

const StyledWrapper = styled.footer`
  padding-top: 20px;
  font-size: 14px;
  line-height: 20px;
  background-color: #16255c;
  color: #d1d4df;
  .MuiLink-root {
    position: relative;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    color: #d1d4df;
    &:hover,
    &:focus {
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.4s ease-in-out;
      background-color: #ff7629;
    }
  }
  .top-part {
    padding: 0 16px 8px;
  }
  .logo {
    padding-bottom: 20px;
    &:after {
      display: none;
    }
    .MuiAvatar-root {
      height: 42px;
      width: 210px;
      display: block;
    }
  }
  .MuiList-root {
    padding: 0;
    .MuiListItem-root {
      &:not(:last-child) {
        padding-bottom: 8px;
      }
      padding: 0;
    }
  }
  .social-links {
    display: inline-flex;
    align-items: center;
    .MuiLink-root {
      display: block;
      border-radius: 50%;
      transition: all 0.4s ease-in-out;
      &:hover,
      &:focus {
        background-color: #ff7629;
      }
      &:after {
        display: none;
      }
      &:not(:last-child) {
        margin-right: 20px;
      }
      .MuiAvatar-root {
        height: 24px;
        width: 24px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  .copyright {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 16px 12px;
    font-size: 0.8125rem;
    line-height: 1.125rem;
    border-top: 1px solid #fff3;
    .MuiTypography-body1 {
      font-size: 13px;
      line-height: 18px;
    }
  }
  .contact-link {
    display: inline-flex;
    align-items: center;
    .MuiAvatar-root {
      height: 20px;
      width: 20px;
      margin-right: 10px;
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: 20px;
    }
    .MuiTypography-caption {
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: calc(100% - 20px);
      max-width: calc(100% - 20px);
    }
  }
  .link-heading {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 500;
    color: #fff;
    padding-bottom: 8px;
  }
  .link-wrapper {
    display: flex;
    align-items: center;
    .MuiLink-root {
      display: block;
      overflow: visible;
      &:first-child {
        margin-right: 16px;
      }
      &:last-child {
        margin-left: 16px;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          left: -16px;
          height: 13px;
          top: 50%;
          width: 1px;
          background-color: #d1d4df;
          transform: translateY(-50%);
        }
      }
    }
  }
  // Responsive Media Query
  @media (min-width: 600px) {
    font-size: 15px;
    line-height: 20px;
    padding-top: 30px;
    .MuiList-root {
      .MuiListItem-root {
        &:not(:last-child) {
          padding-bottom: 16px;
        }
      }
    }
    .copyright {
      flex-direction: row;
    }
  }
  @media (min-width: 900px) {
    padding-top: 50px;
    .top-part {
      padding-left: 40px;
      padding-right: 40px;
    }
    .link-heading {
      padding-bottom: 20px;
    }
    .copyright {
      padding: 20px 40px;
    }
  }
  @media (min-width: 1200px) {
    padding-top: 56px;
    .top-part {
      padding-left: 60px;
      padding-right: 60px;
    }
    .MuiList-root {
      .MuiListItem-root {
        &:not(:last-child) {
          padding-bottom: 27px;
        }
      }
    }
    .copyright {
      padding: 26px 60px;
    }
  }
  @media (min-width: 1536px) {
    .top-part {
      padding-left: 100px;
      padding-right: 100px;
    }
    .copyright {
      padding: 26px 100px;
    }
  }
`;
const Footer: React.FC = () => {
  return (
    <StyledWrapper>
      {/* Top Part Start */}
      <Box className="top-part">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={{ pb: 2 }}>
            <ScrollAnimation animateIn="fadeIn">
              <Link href="#" title="Logo" className="logo">
                <Avatar src={logo} alt="Logo" variant="square" />
              </Link>
              <List>
                <ListItem className="pb-0">
                  <Typography
                    variant="body1"
                    className="contact-link"
                    sx={{ pb: 0, mb: { lg: 3, sm: 2, xs: 1 } }}
                  >
                    <Avatar src={locationIcon} alt="Address" />
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: { xs: "14px", sm: "15px" },
                        lineHeight: "20px",
                      }}
                    >
                      2307 Beverley Rd, New York
                    </Typography>
                  </Typography>
                </ListItem>
                <ListItem className="pb-0">
                  <Link
                    href="callto:+(0712)81979555"
                    title="Call"
                    className="contact-link"
                    sx={{ mb: { lg: 3, sm: 2, xs: 1 } }}
                  >
                    <Avatar src={callIcon} alt="Call" />
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: { xs: "14px", sm: "15px" },
                        lineHeight: "20px",
                      }}
                    >
                      + (0712) 819 79 555
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="mailto:company@gmail.com"
                    title="Mail"
                    className="contact-link"
                    sx={{ pb: 0 }}
                  >
                    <Avatar src={envelopIcon} alt="Mail" />
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: { xs: "14px", sm: "15px" },
                        lineHeight: "20px",
                      }}
                    >
                      Company@gmail.com
                    </Typography>
                  </Link>
                </ListItem>
              </List>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={6} sm sx={{ pb: 2 }}>
            <ScrollAnimation animateIn="fadeIn">
              <Typography variant="body1" className="link-heading">
                Quick Links
              </Typography>
              <List>
                <ListItem>
                  <Link title="Home" href="#">
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link title="Service" href="#">
                    Service
                  </Link>
                </ListItem>
                <ListItem>
                  <Link title="Pricing" href="#">
                    Pricing
                  </Link>
                </ListItem>
                <ListItem>
                  <Link title="About Us" href="#">
                    About Us
                  </Link>
                </ListItem>
                <ListItem>
                  <Link title="Contact Us" href="#">
                    Contact Us
                  </Link>
                </ListItem>
              </List>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={6} sm sx={{ pb: 2 }}>
            <ScrollAnimation animateIn="fadeIn">
              <Typography variant="body1" className="link-heading">
                Features
              </Typography>
              <List>
                <ListItem>
                  <Link title="Finance Pricing" href="#">
                    Finance Pricing
                  </Link>
                </ListItem>
                <ListItem>
                  <Link title="Finance – Solution" href="#">
                    Finance – Solution
                  </Link>
                </ListItem>
                <ListItem>
                  <Link title="Services" href="#">
                    Services
                  </Link>
                </ListItem>
                <ListItem>
                  <Link title="Portfolio" href="#">
                    Portfolio
                  </Link>
                </ListItem>
              </List>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={6} sm sx={{ pb: 2 }}>
            <ScrollAnimation animateIn="fadeIn">
              <Typography variant="body1" className="link-heading">
                Resources
              </Typography>
              <List>
                <ListItem>
                  <Link title="FAQs" href="#">
                    FAQs
                  </Link>
                </ListItem>
                <ListItem>
                  <Link title="Our Team" href="#">
                    Our Team
                  </Link>
                </ListItem>
                <ListItem>
                  <Link title="Gallery" href="#">
                    Gallery
                  </Link>
                </ListItem>
                <ListItem>
                  <Link title="Blog" href="#">
                    Blog
                  </Link>
                </ListItem>
                <ListItem>
                  <Link title="Portfolio" href="#">
                    Portfolio
                  </Link>
                </ListItem>
              </List>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={6} sm sx={{ pb: 2, textAlign: { md: "end" } }}>
            <ScrollAnimation animateIn="fadeIn">
              <Typography variant="body1" className="link-heading">
                Let's Connect
              </Typography>
              <div className="social-links">
                <Link href="#" title="Facebook">
                  <Avatar src={faceBookIcon} alt="Facebook" />
                </Link>
                <Link href="#" title="Twitter">
                  <Avatar src={twitterIcon} alt="Twitter" />
                </Link>
                <Link href="#" title="Instagram">
                  <Avatar src={instagramIcon} alt="Instagram" />
                </Link>
              </div>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Box>
      {/* Top Part End */}
      {/* Copyright Start */}
      <Box className="copyright">
        <Box className="link-wrapper" sx={{ pb: { xs: 2, sm: 0 } }}>
          <Link href="#" title="Privacy Policy">
            Privacy Policy
          </Link>
          <Link href="#" title="Terms &amp; Condition">
            Terms &amp; Condition
          </Link>
        </Box>
        <Typography variant="body1" sx={{ pb: 0 }}>
          Copyright © 2021. All Rights Reserved By Company
        </Typography>
      </Box>
      {/* Copyright End */}
    </StyledWrapper>
  );
};
export default Footer;
