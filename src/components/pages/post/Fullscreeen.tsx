import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { ToggleButton } from "@mui/material";
import type { FullScreenHandle } from "react-full-screen";

type Props = {
  handle: FullScreenHandle;
};

export const ScreenToggle = ({ handle }: Props) => {
  return (
    <ToggleButton
      value="left"
      aria-label="left aligned"
      size="small"
      disableRipple
      selected={handle.active ? true : false}
      onChange={handle.active ? handle.exit : handle.enter}
    >
      {handle.active ? <CloseFullscreenIcon /> : <OpenInFullIcon />}
    </ToggleButton>
  );
};
