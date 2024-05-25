import type { NextPageWithLayout } from "next";

import { getLayout } from "@/components/layouts";
import { SongListPageComponent } from "@/components/pages/index/SongListPageComponent";

const Home: NextPageWithLayout = () => {
  return <SongListPageComponent />;
};

Home.getLayout = getLayout;
export default Home;
