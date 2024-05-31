import { Box, Container, useMediaQuery, useTheme } from "@mui/material/";
import { DataGrid } from "@mui/x-data-grid";
import Head from "next/head";

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
    <>
      <Head>
        <title>東京チャペル ワーシップ</title>
        <meta name="description" content="グレース宣教会 東京チャペルのワーシップ曲一覧ページ" />
      </Head>
      <Container maxWidth="sm">
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
            }}
          />
        </Box>
      </Container>
    </>
  );
};

