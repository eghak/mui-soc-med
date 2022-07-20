import React, { useState } from "react";

import {
  Tooltip,
  Fab,
  Modal,
  Box,
  Stack,
  Typography,
  Avatar,
  styled,
  TextField,
  ButtonGroup,
  Button,
} from "@mui/material";

import {
  Add as AddIcon,
  EmojiEmotions,
  Image,
  VideoCameraBack,
  PersonAdd,
  DateRange,
} from "@mui/icons-material";

const Add = () => {
  const [open, setOpen] = useState(false);

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{
          position: "sticky",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} //or you can also create a styled component instead of using sx.
      >
        <Box
          width={400}
          height={250}
          bgcolor={"background.default"}
          color={"text.primary"}
          padding={3}
          justifyContent="center"
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Add Post
          </Typography>
          <UserBox>
            <Avatar
              alt="John"
              sx={{ width: 30, height: 30 }}
              src="https://randomuser.me/api/portraits/men/4.jpg"
            />
            <Typography variant="span" fontWeight={500}>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's your status?"
            variant="standard"
            sx={{ width: "100%" }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions sx={{ color: "#F7B928" }} />
            <Image color="success" />
            <VideoCameraBack color="error" />
            <PersonAdd color="primary" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
