import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { CircularProgress, Container, TextField, Typography } from "@mui/material";
import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import * as yup from "yup";

import { useGetSongQuery, useInsertSongMutation } from "@/utils/apollo/generated";

export const PostPageComponent: NextPage = () => {
  const router = useRouter();
  const pid = router.query.postId;
  const [registerSong, { loading: insertSongLoading }] = useInsertSongMutation();

  const schema = yup.object({
    postId: yup.number().required(),
    title: yup.string().required(),
    content: yup.string().required(),
    content_chord: yup.string().required(),
  });

  const useFormMethods = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { handleSubmit, register, reset } = useFormMethods;

  const postId = Array.isArray(pid) ? pid[0] : pid;
  const { data, loading: getSongLoading } = useGetSongQuery({
    fetchPolicy: "network-only",
    variables: {
      song_id: Number(Array.isArray(postId) ? postId[0] : postId)
    },
    onCompleted: (val) => {
      if (!data) return
      reset({
        postId: val.songs[0].song_id,
        title: val.songs[0].title,
        content: val.songs[0].content,
        content_chord: val.songs[0].content_chord
      })
    }
  });

  const onSubmit = async (values: any) => {
    await registerSong({
      variables: {
        song_id: values.postId,
        title: values.title,
        content: values.content,
        content_chord: values.content_chord
      },
      onCompleted: (val) => {
        reset({
          postId: val.insert_songs_one?.song_id,
          title: val.insert_songs_one?.title,
          content: val.insert_songs_one?.content
        })
        toast.success('登録が完了しました。'); // 登録完了時のtoast
      },
      onError: (e) => {
        console.error(e);
        toast.error('登録に失敗しました。'); // エラー時のtoast
      },
    });
  };

  if (getSongLoading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <>
      <Head>
        <title>投稿ページ</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container sx={{ mt: 2, pb: 4 }}>
        <FormProvider {...useFormMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography align="left" variant="h5" color="primary">
              曲番号
            </Typography>
            <TextField
              required
              margin="normal"
              {...register("postId")}
              type="number"
              fullWidth
            />
            <Typography mt={2} align="left" variant="h5" color="primary">
              曲名
            </Typography>
            <TextField
              required
              {...register("title")}
              margin="normal"
              fullWidth
              multiline
            />
            <Typography align="left" variant="h5" color="primary" mt={2}>
              歌詞
            </Typography>
            <TextField
              required
              {...register("content")}
              margin="normal"
              fullWidth
              multiline
              rows={8}
            />
            <Typography align="left" variant="h5" color="primary" mt={2}>
              歌詞コード
            </Typography>
            <TextField
              required
              {...register("content_chord")}
              margin="normal"
              fullWidth
              multiline
              rows={8}
            />
            <LoadingButton
              type="submit"
              color="primary"
              variant="outlined"
              loading={insertSongLoading}
              sx={{ width: 150, margin: "0 auto", mb: 10, display: "flex" }}
            >
              登録
            </LoadingButton>
          </form>
        </FormProvider>
      </Container>
    </>
  );
};