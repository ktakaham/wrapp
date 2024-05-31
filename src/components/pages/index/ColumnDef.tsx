import EditIcon from "@mui/icons-material/Edit";
import { Box, Typography } from "@mui/material";
import type { GridColDef } from "@mui/x-data-grid";
import Link from "next/link";

import { pagesPath } from "../../../utils/$path";

export const columns: (isMobile: boolean) => GridColDef[] = (isMobile) => [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "songName",
    headerName: "曲名",
    width: isMobile ? 230 : 400,
    align: "left",
    headerAlign: "left",
    renderCell: (params) => (
      <Link href={pagesPath.posts._postId(params.id).$url()} style={{ textDecorationColor: 'grey' }}>
        <Box component="a" sx={{ cursor: "pointer", display: "flex", alignItems: "center", height: "100%" }}>
          <Typography fontSize={16} sx={{ ml: 0 }}>{params.value}</Typography>
        </Box>
      </Link>
    ),
  },
  {
    field: "link",
    type: "actions",
    width: 30,
    resizable: false,
    renderCell: (params) => (
      <Link href={pagesPath.p.post._postId(params.id).$url()}>
        <Box component="a" sx={{ cursor: "pointer" }}>
          <EditIcon sx={{ fontSize: "large", mr: 0.5, color: 'grey' }} />
        </Box>
      </Link>
    ),
  },
];
