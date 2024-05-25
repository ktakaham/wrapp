import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material/";
import { DataGrid } from "@mui/x-data-grid";

import { useGetSongListQuery } from "@/utils/apollo/generated";
import { useDisplayHeight } from "@/utils/hooks/displayHeight";

import { SongSearch } from "../SongSearch";
import { columns } from "./ColumnDef";

export const SongListPageComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { dataGridHeight } = useDisplayHeight();
  const { data, loading } = useGetSongListQuery({
    fetchPolicy: "cache-and-network",
  });

  const result =
    data?.songs.map((row) => {
      return {
        id: row.song_id,
        songName: row.title,
      };
    }) || [];

  return (
    <Container maxWidth="sm">
      <Typography variant="h1" color="primary" fontSize={30} mt={3} align="center">
        ワーシップソング
      </Typography>
      <SongSearch />
      <Box sx={{ height: dataGridHeight, mt: 1, mb: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <DataGrid
          rows={result}
          columns={columns(isMobile)}
          autoPageSize={true}
          loading={loading}
          hideFooter={true}
          paginationMode="server"
          sx={{
            borderRadius: 3,
            backgroundColor: "white",
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
      </Box>
    </Container>
  );
};

