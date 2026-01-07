import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Grid, TextField, Button } from "@mui/material";

import { addTask } from "@/store";
import { useAppDispatch } from "@/hooks";

import { schema } from "./schema";
import type { formType } from "./interface";

const TaskForm = () => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit, reset } = useForm<formType>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      description: "",
      title: "",
    },
  });

  const onSubmit = (data: formType) => {
    dispatch(addTask({ ...data }));
    reset();
  };

  return (
    <Grid component="form" onSubmit={handleSubmit(onSubmit)} container gap={2}>
      <Controller
        control={control}
        name="title"
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Title"
            fullWidth
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Description"
            fullWidth
            multiline
            minRows={2}
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" fullWidth variant="contained">
        Add Task
      </Button>
    </Grid>
  );
};

export default TaskForm;
