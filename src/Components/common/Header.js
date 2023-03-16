import React, { useState } from "react";
import {
  Box,
  AppBar,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { logoURL } from "../../Constants/Constant";
import {
  Menu as MenuIcon,
  BookmarkAdd,
  ExpandMore,
  Exposure,
} from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";
import { useNavigate } from "react-router-dom";
import { routePath } from "../../Constants/route";

const StyledToolBar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;
  & > * {
    padding: 0 16px;
  }
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      font-weight: 600;
      font-size: 14px;
    }
  }
  & > p {
    font-weight: 600;
    font-size: 14px;
  }
`;

const InputSearchField = styled(InputBase)`
  background: #ffffff;
  height: 30px;
  width: 55%;
  border-radius: 5px;
`;

const Logo = styled("img")({
  width: 64,
});

const Header = () => {
  const [open, setOpen] = useState();

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const navigate = useNavigate();

  return (
    <>
      <AppBar style={{ minHeight: 56 }} position="static">
        <StyledToolBar>
          <Logo src={logoURL} alt="" onClick={() => navigate(routePath.home)} />
          <Box onClick={handleClick}>
            <MenuIcon />
            <Typography>Menu</Typography>
          </Box>
          <HeaderMenu open={open} handleClose={handleClose} />
          <InputSearchField />
          <Typography>
            IMDB <Box component="span">Pro</Box>
          </Typography>
          <Box>
            <BookmarkAdd />
            <Typography>Watchlist</Typography>
          </Box>
          <Typography>Sign Up</Typography>
          <Box>
            <Typography>EN</Typography>
            <ExpandMore />
          </Box>
        </StyledToolBar>
      </AppBar>
    </>
  );
};

export default Header;
