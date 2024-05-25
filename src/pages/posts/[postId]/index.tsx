import type { NextPageWithLayout } from "next";

import { getLayout } from "@/components/layouts";
import { PostPageComponent } from "@/components/pages/post/PostPageComponent";

const Home: NextPageWithLayout = () => {
  return <PostPageComponent />;
};

Home.getLayout = getLayout;
export default Home;
