import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import styled from "styled-components";
import { logo, menuIcon, mobileLogo } from "../../assets/imgs";
import IconButton from "@mui/material/IconButton";
import { Avatar } from "@mui/material";

const StyledWrapper = styled.div`
  .MuiAppBar-root {
    .MuiToolbar-root {
      padding: 8px 16px;
      min-height: auto;
    }
  }
  .logo {
    .desktop-logo {
      height: 42px;
      width: 210px;
    }
    .mobile-logo {
      height: 34px;
      width: 34px;
    }
  }
  .action-wrapper {
    position: fixed;
    top: 0;
    left: -270px;
    min-height: 100vh;
    background-color: #1b295f;
    flex-direction: column;
    width: 270px;
    z-index: 2;
    transition: all 0.4s ease-out;
    .MuiLink-root {
      color: #ffffff;
      font-weight: 500;
      padding: 8px 16px;
      position: relative;
      width: 100%;
      transition: all 0.4s ease-out;
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 2px;
        height: 0;
        transform: translateY(-50%);
        transition: all 0.4s ease-out;
        background-color: #ff7629;
        opacity: 0;
      }
      &:hover,
      &:focus,
      &.active {
        &:after {
          height: 100%;
          opacity: 1;
        }
      }
      & span {
        display: block;
        white-space: nowrap;
      }
    }
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s ease-out;
  }
  .menu-toggle {
    margin-right: -8px;
    .MuiAvatar-root {
      height: 24px;
      width: 24px;
    }
    &:hover,
    &:focus {
      background-color: #263a87;
    }
  }

  // Responsive Media Query
  @media (min-width: 600px) {
    .MuiAppBar-root {
      .MuiToolbar-root {
        padding: 12px 24px;
      }
    }
  }
  @media (min-width: 900px) {
    .MuiAppBar-root {
      .MuiToolbar-root {
        padding: 20px 24px;
      }
    }
    .action-wrapper {
      position: relative;
      top: auto;
      left: auto;
      width: auto;
      min-height: auto;
      background-color: transparent;
      flex-direction: row;
      .MuiButton-root {
        margin-left: 16px;
      }
      .MuiLink-root {
        &:after {
          display: none;
        }
        & span {
          position: relative;
          &:before,
          &:after {
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 2px;
            height: 0;
            transition: all 0.4s ease-out;
            background-color: #ff7629;
            opacity: 0;
          }
          &:before {
            left: -12px;
          }
          &:after {
            right: -12px;
          }
        }
        &:hover,
        &:focus,
        &.active {
          & span {
            &:before,
            &:after {
              height: 16px;
              opacity: 1;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .action-wrapper {
      .MuiLink-root {
        padding: 8px 24px;
      }
      .MuiButton-root {
        margin-left: 24px;
      }
    }
  }
  @media (min-width: 1536px) {
    .MuiAppBar-root {
      .MuiToolbar-root {
        padding: 20px 100px;
      }
    }
    .action-wrapper {
      .MuiLink-root {
        padding: 8px 30px;
      }
      .MuiButton-root {
        margin-left: 30px;
      }
    }
  }
`;
const Header: React.FC = () => {
  const toggleMenu = () => {
    if (document.body.classList.contains("toggle-sidebar")) {
      document.body.classList.remove("toggle-sidebar");
    } else {
      document.body.classList.add("toggle-sidebar");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        document.body.classList.add("add-header-bg");
      }
      if (window.scrollY < 20) {
        document.body.classList.remove("add-header-bg");
      }
    });
  }, []);

  return (
    <StyledWrapper>
      <AppBar position="fixed">
        <Toolbar
          disableGutters
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Link href="#" title="Logo" className="logo">
            <Avatar
              src={logo}
              alt="Logo"
              variant="square"
              className="desktop-logo"
              sx={{ flexGrow: 1, display: { xs: "none", lg: "block" } }}
            />
            <Avatar
              src={mobileLogo}
              alt="Logo"
              variant="square"
              className="mobile-logo"
              sx={{ flexGrow: 1, display: { xs: "block", lg: "none" } }}
            />
          </Link>
          <IconButton
            className="menu-toggle"
            onClick={toggleMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <Avatar src={menuIcon} alt="Menu Toggle" variant="square" />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start", md: "center" },
            }}
            className="action-wrapper"
          >
            <Link href="#" title="Home" className="active">
              <span>Home</span>
            </Link>
            <Link href="#" title="Services">
              <span>Services</span>
            </Link>
            <Link href="#" title="Pricing">
              <span>Pricing</span>
            </Link>
            <Link href="#" title="Case Studies">
              <span>Case Studies</span>
            </Link>
            <Link href="#" title="Blog">
              <span>Blog</span>
            </Link>
            <Link href="#" title="About Us">
              <span>About Us</span>
            </Link>
            <Link
              href="#"
              title="Contact us"
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <span>Contact us</span>
            </Link>
            <Button
              variant="contained"
              color="info"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <span>Contact us</span>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <div
        className="overlay"
        onClick={() => document.body.classList.remove("toggle-sidebar")}
      />
    </StyledWrapper>
  );
};
export default Header;
