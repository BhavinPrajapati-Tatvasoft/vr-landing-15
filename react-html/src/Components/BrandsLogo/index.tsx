import { Avatar, Container, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Link from "@mui/material/Link";
import {
  brandLogo1,
  brandLogo2,
  brandLogo3,
  brandLogo4,
  brandLogo5,
  brandLogo6,
} from "../../assets/imgs";
import ScrollAnimation from "react-animate-on-scroll";
import { Box } from "@mui/system";

const StyledWrapper = styled.div`
  .brand-logo-wrapper {
    padding: 10px 0;
    .MuiLink-root {
      display: block;
      text-align: center;
      padding: 10px 8px;
      &:hover {
        .MuiAvatar-root {
          transform: scale(1.2);
        }
      }
      .MuiAvatar-root {
        transition: all 0.4s ease-in-out;
        transform: scale(1);
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  // Responsive Media Query
  @media (min-width: 600px) {
    .brand-logo-wrapper {
      padding: 20px 0;
    }
  }
  @media (min-width: 900px) {
    .brand-logo-wrapper {
      padding: 40px 0;
      .MuiLink-root {
        padding: 18px 8px;
      }
    }
  }
  @media (min-width: 1200px) {
    .brand-logo-wrapper {
      padding: 60px 0;
    }
  }
  @media (min-width: 1536px) {
    .brand-logo-wrapper {
      padding: 80px 0;
    }
  }
`;
const BrandsLogo: React.FC = () => {
  return (
    <StyledWrapper>
      <Container maxWidth="xl">
        <Box className="brand-logo-wrapper">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4} md={2}>
              <ScrollAnimation animateIn="fadeIn">
                <Link href="#" title="Brand Logo">
                  <Avatar
                    src={brandLogo1}
                    alt="Brand Logo"
                    variant="square"
                    className="img-fluid"
                  />
                </Link>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={4} md={2}>
              <ScrollAnimation animateIn="fadeIn">
                <Link href="#" title="Brand Logo">
                  <Avatar
                    src={brandLogo2}
                    alt="Brand Logo"
                    variant="square"
                    className="img-fluid"
                  />
                </Link>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={4} md={2}>
              <ScrollAnimation animateIn="fadeIn">
                <Link href="#" title="Brand Logo">
                  <Avatar
                    src={brandLogo3}
                    alt="Brand Logo"
                    variant="square"
                    className="img-fluid"
                  />
                </Link>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={4} md={2}>
              <ScrollAnimation animateIn="fadeIn">
                <Link href="#" title="Brand Logo">
                  <Avatar
                    src={brandLogo4}
                    alt="Brand Logo"
                    variant="square"
                    className="img-fluid"
                  />
                </Link>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={4} md={2}>
              <ScrollAnimation animateIn="fadeIn">
                <Link href="#" title="Brand Logo">
                  <Avatar
                    src={brandLogo5}
                    alt="Brand Logo"
                    variant="square"
                    className="img-fluid"
                  />
                </Link>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={4} md={2}>
              <ScrollAnimation animateIn="fadeIn">
                <Link href="#" title="Brand Logo">
                  <Avatar
                    src={brandLogo6}
                    alt="Brand Logo"
                    variant="square"
                    className="img-fluid"
                  />
                </Link>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledWrapper>
  );
};
export default BrandsLogo;
