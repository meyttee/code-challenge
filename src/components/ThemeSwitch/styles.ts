import { Box, styled } from "@mui/material";

const IconWrapper = styled(Box)(({ theme }) => ({
  boxShadow: "1px 1px 1px black",
  width: "20px",
  height: "20px",
  bgcolor: theme.palette.grey[500],
  borderRadius: "50%",
}));

export { IconWrapper };
