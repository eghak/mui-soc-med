import React from "react";
import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
} from "@mui/material";
import Food1 from "../assets/food1.jpeg";
import Food2 from "../assets/food2.jpeg";
import Food3 from "../assets/food3.jpeg";
import Food4 from "../assets/food3.jpeg";
import Food5 from "../assets/food4.jpeg";
import Food6 from "../assets/food5.jpeg";

const Rightbar = () => {
  const itemData = [
    {
      img: Food1,
      title: "Food1"
    },
    {
      img: Food2,
      title: "Food2"
    },
    {
      img: Food3,
      title: "Food3"
    },
    {
      img: Food4,
      title: "Food4"
    },
    {
      img: Food5,
      title: "Food5"
    },
    {
      img: Food6,
      title: "Food5"
    },
  ];

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={300} sx={{mt: "20px", mb:"20px"}} >
          Friends
        </Typography>

        <AvatarGroup total={7}>
          <Avatar
            alt="Amy Brown"
            src="https://randomuser.me/api/portraits/women/40.jpg"
          />
          <Avatar
            alt="Nathan Sharp"
            src="https://randomuser.me/api/portraits/men/69.jpg"
          />
          <Avatar
            alt="Cynthia Wu"
            src="https://randomuser.me/api/portraits/women/27.jpg"
          />
          <Avatar
            alt="Bob Benton"
            src="https://randomuser.me/api/portraits/men/21.jpg"
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={300} sx={{mt: "20px", mb:"20px"}} >
          Newest Photos
        </Typography>

        <ImageList sx={{ width: 500, height: "auto" }} cols={3} rowHeight={150} gap={3} >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
