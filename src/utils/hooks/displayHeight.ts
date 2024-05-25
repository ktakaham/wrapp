import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useDisplayHeight = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const headerHeight = isMobile ? 56 : 64; // モバイルとデスクトップでヘッダーの高さを変更
  const footerHeight = 220; // フッターの高さを固定
  const dataGridHeight = `calc(100vh - ${headerHeight + footerHeight + 20}px)`; // 20pxは余白

  return { headerHeight, footerHeight, dataGridHeight };
};
