import type { TaskStatusFilter } from "@/store";

const filters: { label: string; value: TaskStatusFilter }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];

export { filters };
