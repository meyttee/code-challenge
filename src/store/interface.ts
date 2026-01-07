import type { store } from "./store";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type TaskStatusFilter = "all" | "completed" | "active";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TasksState {
  items: Task[];
  filter: TaskStatusFilter;
}

interface AddTaskPayload {
  title: string;
  description: string;
}

interface ReorderPayload {
  activeId: string;
  overId: string;
}

export type {
  TasksState,
  TaskStatusFilter,
  Task,
  RootState,
  AppDispatch,
  ReorderPayload,
  AddTaskPayload,
};
