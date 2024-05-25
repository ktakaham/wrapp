import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import parse from "html-react-parser";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { useGetSongQuery } from "@/utils/apollo/generated";

import { pagesPath } from "../../../utils/$path";
import { SongSearch } from "../SongSearch";
import { ScreenToggle } from "./Fullscreeen";

const Skeletons = () => (
  <>
    <Skeleton animation="wave" />
    <Skeleton animation="wave" />
    <Skeleton animation="wave" />
  </>
);

export const PostPageComponent = () => {
  const [fontSize, setFontSize] = useState<number>(20);
  const [content, setContent] = useState<string>("");
  const router = useRouter();
  const postId = router.query.postId;
  const handle = useFullScreenHandle();

  const { data, loading } = useGetSongQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      song_id: Number(Array.isArray(postId) ? postId[0] : postId)
    }
  });

  useEffect(() => {
    if (data?.songs) {
      const song = data.songs[0];
      const formattedText = song?.content.replace(/\\n|\n/gi, "<br />") || "";
      setContent(formattedText);
    }
  }, [data]);

  const adjustFontSize = (delta: number) => {
    setFontSize((prevFontSize) => prevFontSize + delta);
  };

  const toggleChord = () => {
    if (data?.songs) {
      const song = data.songs[0];
      const formattedText = song?.content.replace(/\\n|\n/gi, "<br />") || "";
      const formattedChord = song?.content_chord.replace(/\\n|\n/gi, "<br />") || "";
      setContent(content === formattedText ? formattedChord : formattedText);
    }
  };

  return (
    <>
      <Head>
        <title>{loading ? "読み込み中..." : data?.songs[0]?.title}</title>
      </Head>
      <Box>
        <FullScreen handle={handle}>
          <Card sx={{ m: 2, bgcolor: "background.paper", borderRadius: 2 }}>
            <CardHeader
              action={
                <Stack direction="row" spacing={1}>
                  <ScreenToggle handle={handle} />
                  <ButtonGroup size="small" variant="text">
                    <Button onClick={() => adjustFontSize(-3)}>
                      <TextDecreaseIcon />
                    </Button>
                    <Button onClick={() => adjustFontSize(3)}>
                      <TextIncreaseIcon />
                    </Button>
                    <Button onClick={toggleChord}>
                      <MusicNoteIcon />
                    </Button>
                  </ButtonGroup>
                </Stack>
              }
              title={<Typography variant="h5" >{loading ? <Skeleton width="40%" /> : data?.songs[0]?.title}</Typography>}
            />
          </Card>
          <Card sx={{ m: 2, bgcolor: "background.paper", borderRadius: 2 }}>
            <CardContent>
              <Typography variant="body1" style={{ fontSize }}>
                {loading ? <Skeletons /> : parse(content || "")}
              </Typography>
            </CardContent>
          </Card>
          <Box sx={{ m: 2, textAlign: "center" }}>
            <SongSearch />
          </Box>
          <Box sx={{ m: 2, textAlign: "center" }}>
            <Link href={pagesPath.$url()} passHref>
              <Typography sx={{ fontSize: 16, cursor: "pointer" }}>TOPページに戻る</Typography>
            </Link>
          </Box>
        </FullScreen>
      </Box>
    </>
  );
};
