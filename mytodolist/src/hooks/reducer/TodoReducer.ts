import { TodoType, ActionType } from 'src/types/index';

export const todoReducer = (
  state: TodoType[],
  action: ActionType
): TodoType[] => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
