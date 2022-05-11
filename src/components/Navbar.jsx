import React from "react";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import EmojiPeopleTwoToneIcon from "@mui/icons-material/EmojiPeopleTwoTone";
// import { Search } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "darkred",
});

const Search = styled("div") (({theme}) => ({
  backgroundColor: "white",
}))

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display: {xs:"none", sm:"block"}}} >SOCIAL MEDIA</Typography>
        <EmojiPeopleTwoToneIcon sx={{display: {xs:"block", sm:"none"}}} />
        <Search>Search</Search>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
