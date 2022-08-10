import TodoType from './todo';

interface ActionType {
  type: string;
  todo: TodoType;
}

export default ActionType;
