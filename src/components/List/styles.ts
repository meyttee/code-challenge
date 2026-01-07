import { Grid, styled } from "@mui/material";

const TaskContainer = styled(Grid)(() => ({
  flexDirection: "column",
  gap: 1,
  width: "100%",
  maxHeight: "30dvh",
  flexWrap: "nowrap",
  overflowX: "hidden",
  overflowY: "auto",
}));

export { TaskContainer };
