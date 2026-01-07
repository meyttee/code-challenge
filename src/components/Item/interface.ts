import type { Task } from "@/store";

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

export type { TaskItemProps };
