import type { Task } from "@/store";

interface SortableTaskRowProps {
  id: string;
  task: Task;
  onToggle: () => void;
}

export type { SortableTaskRowProps };
