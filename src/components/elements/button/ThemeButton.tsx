import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { Button } from "@mui/material";
import { useContext } from "react";

import { ColorModeContext } from "@/components/pages/theme";

export const ThemeToggle = () => {
    const colorMode = useContext(ColorModeContext);

    return (
        <Button
            aria-label="テーマ切り替え"
            size="small"
            onClick={colorMode.toggleColorMode}
            sx={{
                borderRadius: 10,
                minWidth: 40,
                padding: '6px',
                backgroundColor: colorMode.darkMode === "dark" ? "#333" : "#FFF",
                color: colorMode.darkMode === "dark" ? "#FFF" : "#333",
                '&:hover': {
                    backgroundColor: colorMode.darkMode === "dark" ? "#444" : "#EEE",
                }
            }}
        >
            {colorMode.darkMode === "dark" ? <NightlightIcon /> : <LightModeIcon />}
        </Button>
    );
};
