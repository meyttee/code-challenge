import { Typography, Box, Card, Grid } from "@mui/material";

import { TaskForm } from "../Form";
import { TaskList } from "../List";
import { TaskFilters } from "../Filter";
import { ThemeSwitch } from "../ThemeSwitch";
import { Wrapper } from "./styles";

const TaskPage = () => {
  return (
    <Box width="100%" height="100dvh">
      <ThemeSwitch />
      <Wrapper>
        <Card sx={{ padding: 3 }}>
          <Grid container justifyContent="center" alignItems="center" gap={3}>
            <Typography variant="h4" textAlign="center">
              Task Manager
            </Typography>
            <TaskForm />
            <TaskFilters />
            <TaskList />
          </Grid>
        </Card>
      </Wrapper>
    </Box>
  );
};

export default TaskPage;
