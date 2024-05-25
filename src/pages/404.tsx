import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPageWithLayout } from "next";
import Link from "next/link";

import { getLayout } from "@/components/layouts";
import { pagesPath } from "@/utils/$path";

const NotFoundPage: NextPageWithLayout = () => (
  <>
    <NotFound />
  </>
);
NotFoundPage.getLayout = getLayout;
export default NotFoundPage;

const NotFound = () => {
  return (
    <Box
      display="flex"
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 500,
      }}
    >
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h1" sx={{ transform: "rotate(17deg)" }}>
          404
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 4 }}>
          ページが見つかりませんでした
        </Typography>
      </Box>
      <Link href={pagesPath.$url()}>
        <Button variant="contained" sx={{ px: 4, fontWeight: "bold" }}>
          トップページ
        </Button>
      </Link>
    </Box>
  );
};
