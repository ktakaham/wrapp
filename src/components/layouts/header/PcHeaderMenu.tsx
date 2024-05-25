import { Box, Button, Link, Typography } from "@mui/material";

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
    zIndex: 1100
  };

  const buttonStyle = {
    color: 'white',
    textTransform: 'none'
  };

  return (
    <Box sx={headerStyle}>
      <Typography variant="h6" sx={{ flexGrow: 1, color: 'white', marginRight: '20px' }}>
        ワーシップ
      </Typography>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Button sx={buttonStyle}>
          <Link href={pagesPath.$url().pathname} underline="none" color="inherit">一覧</Link>
        </Button>
        <Button sx={buttonStyle}>
          <Link href={pagesPath.p.post.$url().pathname} underline="none" color="inherit">
            新規追加
          </Link>
        </Button>
      </Box>
    </Box>
  );
};
