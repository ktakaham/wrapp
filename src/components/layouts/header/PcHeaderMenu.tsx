import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

import { ThemeToggle } from "@/components/elements/button/ThemeButton";

import { pagesPath } from "../../../utils/$path";

export const PcHeaderMenu = () => {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
    height: '64px',
    backgroundColor: 'linear-gradient(45deg, #6a1b9a, #8e24aa)',
    position: 'sticky',
    top: 0,
    zIndex: 1100,
  };

  const buttonStyle = {
    color: 'white',
    textTransform: 'none'
  };

  const themeToggleStyle = {
    position: 'absolute',
    right: '20px'
  };

  return (
    <>
      <Box sx={headerStyle}>
        <Button sx={{ flexGrow: 1, marginRight: '5px' }}>
          <Link href={pagesPath.$url().pathname} style={{ textDecoration: 'none' }}>
            <Typography variant="h6" sx={{ color: 'white' }}>
              ワーシップ
            </Typography>
          </Link>
        </Button>
        <Box sx={{ display: 'flex', gap: '1px', flexGrow: 1 }}>
          <Button sx={buttonStyle}>
            <Link href={pagesPath.$url().pathname} color="inherit" style={{ textDecoration: 'none' }}>
              <Typography fontSize="14px" sx={{ color: 'white' }}>
                一覧
              </Typography>
            </Link>
          </Button>
          <Button sx={buttonStyle}>
            <Link href={pagesPath.p.post.$url().pathname} color="inherit" style={{ textDecoration: 'none' }}>
              <Typography fontSize="14px" sx={{ color: 'white' }}>
                新規追加
              </Typography>
            </Link>
          </Button>
        </Box>
      </Box >
      <Box sx={themeToggleStyle}>
        <ThemeToggle />
      </Box>
    </>
  );
};
