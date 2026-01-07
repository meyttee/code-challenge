import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type {
  AddTaskPayload,
  ReorderPayload,
  Task,
  TasksState,
  TaskStatusFilter,
} from "./interface";

const initialState: TasksState = {
  items: [],
  filter: "all",
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<AddTaskPayload>) => {
      const newTask: Task = {
        id: new Date().getTime().toString(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };
      state.items.push(newTask);
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.items.find((t) => t.id === action.payload);
      if (task?.id) {
        task.completed = !task.completed;
      }
    },

    setFilter: (state, action: PayloadAction<TaskStatusFilter>) => {
      state.filter = action.payload;
    },

    reorderTasks: (state, action: PayloadAction<ReorderPayload>) => {
      const { activeId, overId } = action.payload;
      if (activeId === overId) return;

      const items = state.items;
      const oldIndex = items.findIndex((t) => t.id === activeId);
      const newIndex = items.findIndex((t) => t.id === overId);
      if (oldIndex === -1 || newIndex === -1) return;

      const [moved] = items.splice(oldIndex, 1);
      items.splice(newIndex, 0, moved);
    },
  },
});

export const { addTask, toggleTask, setFilter, reorderTasks, deleteTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
