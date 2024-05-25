import type { EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppPropsWithLayout } from "next/app";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

import { theme } from "@/components/pages/theme";
import { ApolloContextProvider } from "@/utils/apollo/apolloClient";

interface AppProps extends AppPropsWithLayout {
  emotionCache?: EmotionCache;
}

const App = ({ Component, pageProps }: AppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <RecoilRoot>
      <ApolloContextProvider pageProps={pageProps}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
          <Toaster />
        </ThemeProvider>
      </ApolloContextProvider>
    </RecoilRoot>
  );
};

export default App;