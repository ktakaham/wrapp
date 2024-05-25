import { AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material";

import { PcHeaderMenu } from "./PcHeaderMenu";
import { SpHeaderMenu } from "./SpHeaderMenu";

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="sticky">
      <Toolbar>
        {isMobile ? <SpHeaderMenu /> : <PcHeaderMenu />}
      </Toolbar>
    </AppBar>
  );
};
