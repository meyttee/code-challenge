import { useEffect } from "react";
import { Switch, useColorScheme } from "@mui/material";

import { IconWrapper } from "./styles";
import { MoonIcon, SunIcon } from "../icons";

const ThemeSwitch = () => {
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    if (mode === "system") {
      setMode("dark");
      localStorage.setItem("mui-mode", "dark");
    }
  }, [mode]);

  return (
    <Switch
      title={mode}
      checked={mode === "dark"}
      onChange={() => setMode(mode === "dark" ? "light" : "dark")}
      slots={{
        thumb: ({ ownerState }) => (
          <IconWrapper>
            {ownerState.checked ? <MoonIcon /> : <SunIcon />}
          </IconWrapper>
        ),
      }}
    />
  );
};

export default ThemeSwitch;
