import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import type { PropsWithChildren } from "react";

import { store } from "@/store";
import { theme } from "@/helpers";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};
export default Providers;
