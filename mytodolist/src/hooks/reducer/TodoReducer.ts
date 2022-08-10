import { TodoType, ActionType } from 'src/types/index';

export const todoReducer = (
  state: TodoType[],
  action: ActionType
): TodoType[] => {
  switch (action.type) {
    case 'CREATE':
      state.push(action.todo);
      console.log(state);
      return state;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
