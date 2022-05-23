import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { MoreVert, Favorite, Share, FavoriteBorder } from "@mui/icons-material";

const Feed = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const openMore = Boolean(anchorEl);

  const handleCLick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box flex={4} p={2}>
      {/* Card 1 */}
      <Card sx={{ m: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "skyblue" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert
                onClick={handleCLick}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={openMore ? "true" : undefined}
              />
            </IconButton>
          }
          title="Yummy Burger And Fries"
          subheader="May 20, 2002"
        />

        <Menu
          id="basic menu" //has to be the same with aria-controls
          anchorEl={anchorEl}
          open={openMore}
          onClose={handleClose}
        >
          <MenuItem>Save Link</MenuItem>
          <MenuItem>Hide</MenuItem>
          <MenuItem>Report</MenuItem>
        </Menu>

        <CardMedia
          component="img"
          height="10%"
          image="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=pexels-robin-stickel-70497.jpg&fm=jpg"
          alt="Burger"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This is the best burger in the universe.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>

      {/* Card 2 */}
      <Card sx={{ m: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
              M
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert
                onClick={handleCLick}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={openMore ? "true" : undefined}
              />
            </IconButton>
          }
          title="Delicious Sushi"
          subheader="May 20, 2002"
        />

        <Menu
          id="basic menu" //has to be the same with aria-controls
          anchorEl={anchorEl}
          open={openMore}
          onClose={handleClose}
        >
          <MenuItem>Save Link</MenuItem>
          <MenuItem>Hide</MenuItem>
          <MenuItem>Report</MenuItem>
        </Menu>

        <CardMedia
          component="img"
          height="10%"
          image="https://images.pexels.com/photos/3620705/pexels-photo-3620705.jpeg?cs=srgb&dl=pexels-vinicius-benedit-3620705.jpg&fm=jpg"
          alt="Sushi"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            The most delicious sushi in the world.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>

      {/* Card 3 */}
      <Card sx={{ m: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "pink" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert
                onClick={handleCLick}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={openMore ? "true" : undefined}
              />
            </IconButton>
          }
          title="Tasty Cheesecake"
          subheader="May 20, 2002"
        />

        <Menu
          id="basic menu" //has to be the same with aria-controls
          anchorEl={anchorEl}
          open={openMore}
          onClose={handleClose}
        >
          <MenuItem>Save Link</MenuItem>
          <MenuItem>Hide</MenuItem>
          <MenuItem>Report</MenuItem>
        </Menu>

        <CardMedia
          component="img"
          height="10%"
          image="https://images.pexels.com/photos/219293/pexels-photo-219293.jpeg?cs=srgb&dl=pexels-freestocksorg-219293.jpg&fm=jpg"
          alt="Cheesecake"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Tasty Cheesecake!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Feed;
