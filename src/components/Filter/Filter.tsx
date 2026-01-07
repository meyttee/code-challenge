import { ButtonGroup, Button } from "@mui/material";

import { setFilter } from "@/store";
import { filters } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";

const TaskFilters = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.tasks.filter);

  return (
    <ButtonGroup fullWidth variant="contained">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={currentFilter === filter.value ? "contained" : "outlined"}
          onClick={() => dispatch(setFilter(filter.value))}
        >
          {filter.label}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default TaskFilters;
