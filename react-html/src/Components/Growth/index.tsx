import React from "react";
import styled from "styled-components";
import {
  Avatar,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { macBookAir, rightIndicatorIcon } from "../../assets/imgs";
import Button from "@mui/material/Button";
import ScrollAnimation from "react-animate-on-scroll";

const StyledWrapper = styled.section`
  overflow: hidden;
  position: relative;
  background-color: #fafafa;
  padding: 20px 0;
  & > .MuiAvatar-root {
    max-width: 100%;
    height: auto;
    width: 100%;
  }
  .MuiList-root {
    padding: 0;
    padding-bottom: 12px;
    .MuiListItem-root {
      padding: 0;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        top: 5px;
        left: 0;
        background: url(${rightIndicatorIcon}) center no-repeat;
        height: 12px;
        width: 12px;
      }
      &:not(:last-child) {
        padding-bottom: 8px;
      }
      .MuiTypography-root {
        padding-bottom: 0;
        padding-left: 20px;
      }
    }
  }
  // Responsive Media Query
  @media (min-width: 600px) {
    padding: 30px 0;
    .MuiList-root {
      padding-bottom: 20px;
      .MuiListItem-root {
        &:not(:last-child) {
          padding-bottom: 10px;
        }
      }
    }
  }
  @media (min-width: 900px) {
    padding: 70px 0;
    & > .MuiAvatar-root {
      position: absolute;
      top: 78px;
      left: calc(50% + 74px);
      max-width: calc(50%);
      display: block;
    }
    .MuiList-root {
      padding-bottom: 30px;
      .MuiListItem-root {
        &:not(:last-child) {
          padding-bottom: 14px;
        }
      }
    }
  }
  @media (min-width: 1200px) {
    padding: 90px 0;
    & > .MuiAvatar-root {
      left: calc(50% + 100px);
    }
    .MuiList-root {
      padding-bottom: 32px;
      .MuiListItem-root {
        &:not(:last-child) {
          padding-bottom: 20px;
        }
      }
    }
  }
  @media (min-width: 1536px) {
    padding: 98px 0;
  }
`;
const Growth: React.FC = () => {
  return (
    <StyledWrapper>
      <Avatar
        src={macBookAir}
        variant="square"
        sx={{ mb: { sm: 1, lg: 0 }, zIndex: 1 }}
      />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={7} lg={6}>
            <ScrollAnimation animateIn="fadeInRight">
              <Typography
                variant="h2"
                sx={{ fontWeight: 700, pb: { md: 3, sm: 2, xs: 1 } }}
              >
                Boost your Growth to Next Level
              </Typography>
              <Typography variant="body1" sx={{ pb: { lg: 3, sm: 2, xs: 1 } }}>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Typography>
              <List>
                <ListItem>
                  <Typography variant="body1">
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed more-or-less
                    normal.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1">
                    Established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1">
                    It is a long established fact that a reader.
                  </Typography>
                </ListItem>
              </List>
              <Button color="secondary" variant="contained">
                Learn More
              </Button>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </StyledWrapper>
  );
};
export default Growth;
