import { Box } from "@mui/material";

import { Footer } from "./Footer";
import { Header } from "./header/Header";

export const getLayout = (page: React.ReactElement) => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ minHeight: `calc(100vh - 190px)` }}>
        {page}
      </Box>
      <Footer />
    </>
  );
};
