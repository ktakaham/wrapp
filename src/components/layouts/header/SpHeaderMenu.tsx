import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import router from 'next/router';
import { useState } from "react";

export const SpHeaderMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => (event: React.MouseEvent | React.KeyboardEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: {
          xs: "flex",
          sm: "none",
        },
      }}
    >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <List>
          <ListItem key={1} disablePadding>
            <ListItemButton onClick={() => {
              router.push('/');
            }}>
              <ListItemText primary="ワーシップ" />
            </ListItemButton>
          </ListItem>
          <ListItem key={2} disablePadding>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemText primary="新規追加" onClick={() => {
                router.push('/p/post/');
              }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

