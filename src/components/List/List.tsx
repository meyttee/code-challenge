import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Typography } from "@mui/material";
import { DndContext, closestCenter, type DragEndEvent } from "@dnd-kit/core";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { deleteTask, reorderTasks, toggleTask } from "@/store";

import { TaskItem } from "../Item";
import { TaskContainer } from "./styles";

const TaskList = () => {
  const dispatch = useAppDispatch();
  const { items, filter } = useAppSelector((state) => state.tasks);

  const filteredItems = items.filter((task) =>
    filter === "completed"
      ? task.completed
      : filter === "active"
        ? !task.completed
        : true,
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    dispatch(
      reorderTasks({
        activeId: String(active.id),
        overId: String(over!.id),
      }),
    );
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={filteredItems.map((task) => task.id)}
        strategy={verticalListSortingStrategy}
      >
        <TaskContainer container>
          {filteredItems.length ? (
            filteredItems.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={() => dispatch(toggleTask(task.id))}
                onDelete={() => dispatch(deleteTask(task.id))}
              />
            ))
          ) : (
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              No tasks to show.
            </Typography>
          )}
        </TaskContainer>
      </SortableContext>
    </DndContext>
  );
};

export default TaskList;
