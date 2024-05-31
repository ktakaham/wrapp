import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import Link from 'next/link';
import router from 'next/router';
import { useState } from "react";

import { ThemeToggle } from "@/components/elements/button/ThemeButton";
import { pagesPath } from '@/utils/$path';

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
        alignItems: "center",
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
      <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center", ml: -5 }}>
        <Link href={pagesPath.$url().pathname} style={{ textDecoration: 'none', color: 'white' }}>
          ワーシップ
        </Link>
      </Typography>
      <ThemeToggle />
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
  )
};
