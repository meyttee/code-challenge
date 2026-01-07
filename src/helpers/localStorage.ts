import type { IState } from "./interface";

const loadState = (): IState | undefined => {
  try {
    const serializedState = localStorage.getItem("task-manager-redux");
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState) as IState;
  } catch {
    return undefined;
  }
};

const saveState = (state: IState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("task-manager-redux", serializedState);
  } catch {
    throw new Error("Problem on save data!");
  }
};

export { loadState, saveState };
