import { Grid, styled, Typography } from "@mui/material";

const TaskTypography = styled(Typography)<{
  isCompeleted: boolean;
}>(({ isCompeleted }) => ({
  textDecoration: isCompeleted ? "line-through" : "none",
  opacity: isCompeleted ? 0.5 : 1,
}));

const Container = styled(Grid)(() => ({
  flexWrap: "nowrap",
  alignItems: "center",
  gap: "8px",
}));

export { TaskTypography, Container };
