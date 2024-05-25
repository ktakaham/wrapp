import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  height?: number | string;
  center?: boolean;
};

export const LoadingIcon = ({ height, center = false }: Props) => {
  return (
    <Box
      sx={{
        ...{
          height: height,
        },
        ...(center
          ? { display: "flex", justifyContent: "center", alignItems: "center" }
          : null),
      }}
    >
      <CircularProgress />
    </Box>
  );
};
