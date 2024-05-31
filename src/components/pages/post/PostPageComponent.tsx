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
  Divider,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import parse from "html-react-parser";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

const YouTubeEmbed = ({ title }: { title: string }) => {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    if (title) {
      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title}&type=video&maxResults=6&key=AIzaSyAsCGpyOCighthp44r4G7CMGbp7vhqmS5k`)
        .then(response => response.json())
        .then(data => setVideos(data.items || []));
    }
  }, [title]);

  return (
    <Box sx={{ m: 2, maxWidth: '100%' }}>
      <Grid container spacing={2}>
        {videos.map((video) => (
          <Grid item xs={12} md={4} xl={3} key={video.id.videoId} >
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

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
      const formattedText = song?.content.replace(/\\n|\n|\r/gi, "<br />") || "";
      setContent(formattedText);
    }
  }, [data]);

  const adjustFontSize = (delta: number) => {
    setFontSize((prevFontSize) => prevFontSize + delta);
  };

  const toggleChord = () => {
    if (data?.songs) {
      const song = data.songs[0];
      const formattedText = song?.content.replace(/\\n|\n|\r/gi, "<br />") || "";
      const formattedChord = song?.content_chord.replace(/\\n|\n|\r/gi, "<br />") || "";
      setContent(content === formattedText ? formattedChord : formattedText);
    }
  };

  return (
    <>
      <Head>
        <title>{data?.songs[0]?.title || ''}</title>
      </Head>
      <Box sx={{ mb: 10 }}>
        <FullScreen handle={handle}>
          <Card sx={{ m: 2, bgcolor: "background.paper", borderRadius: 2 }}>
            <CardHeader
              action={
                <Stack direction="row" spacing={1}>
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <ScreenToggle handle={handle} />
                  </Box>
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
              title={<Typography variant="h5" fontSize={fontSize}>{loading ? <Skeleton width="40%" /> : data?.songs[0]?.title}</Typography>}
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
            <Link href={pagesPath.$url()} passHref style={{ textDecorationColor: "grey" }}>
              <Typography sx={{ fontSize: 16, cursor: "pointer" }}>TOPページに戻る</Typography>
            </Link>
          </Box>
        </FullScreen>
        <Divider sx={{ mt: 5 }} />
        <Box sx={{ m: 2 }}>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            YouTube検索結果
          </Typography>
          <YouTubeEmbed title={data?.songs[0]?.title || ''} />
          <Typography variant="body2" sx={{ mt: 2 }}>
            こちらは「{data?.songs[0]?.title || 'この曲'}」のYouTube検索結果です。
          </Typography>
        </Box>
      </Box>
    </>
  );
};
