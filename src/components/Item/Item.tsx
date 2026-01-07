import { CSS } from "@dnd-kit/utilities";
import type { CSSProperties } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { Checkbox, Grid, IconButton } from "@mui/material";

import { DeleteIcon, GrabIcon } from "../icons";
import type { TaskItemProps } from "./interface";
import { Container, TaskTypography } from "./styles";

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? "0.5" : 1,
    width: "100%",
  };

  return (
    <Container container ref={setNodeRef} style={style} {...attributes}>
      <Checkbox checked={task.completed} onClick={onToggle} />
      <Grid container width="100%" flexDirection="column">
        <TaskTypography variant="h6" isCompeleted={task.completed}>
          {task.title}
        </TaskTypography>
        <TaskTypography variant="caption" isCompeleted={task.completed}>
          {task.description}
        </TaskTypography>
      </Grid>
      <IconButton onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
      <IconButton {...listeners} sx={{ cursor: "grab" }}>
        <GrabIcon />
      </IconButton>
    </Container>
  );
};

export default TaskItem;
