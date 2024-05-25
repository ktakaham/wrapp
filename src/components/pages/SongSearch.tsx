import SearchIcon from "@mui/icons-material/Search";
import { Button, Stack, TextField } from "@mui/material/";
import router from "next/router";
import { useState } from "react";

import { pagesPath } from "@/utils/$path";

export const SongSearch = () => {
  const [textValue, setTextValue] = useState("");

  const handleButtonClick = () => {
    router.push(pagesPath.posts._postId(textValue).$url());
  };

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
  };

  return (
    <Stack direction="row">
      <TextField
        label="番号検索"
        margin="normal"
        fullWidth
        value={textValue}
        onChange={handleTextFieldChange}
        sx={{
          "& label": { paddingLeft: (theme) => theme.spacing(2) },
          "& input": { paddingLeft: (theme) => theme.spacing(3.5) },
          "& fieldset": {
            paddingLeft: (theme) => theme.spacing(2.5),
            borderRadius: 5,
          },
        }}
        inputProps={{
          type: "number",
          inputMode: "numeric",
          pattern: "[0-9]*",
        }}
      />
      <Button
        variant="contained"
        aria-label="番号検索"
        onClick={handleButtonClick}
        sx={{ borderRadius: 10, height: 55, width: 50, mt: 1.7, ml: 1 }}
      >
        <SearchIcon fontSize="large" />
      </Button>
    </Stack>
  );
};
