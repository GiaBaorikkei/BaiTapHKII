import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@reduxjs/toolkit/query';
import { Todo } from '../../interface';

interface TodosState {
  todos: Todo[];
  error: string | null;
}

const initialState: TodosState = {
  todos: [
    { id: 1, text: 'Quét nhà', completed: false },
    { id: 2, text: 'Giặt quần áo', completed: false },
  ],
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<Todo>) {
        state.todos.push(action.payload);
        state.error = null;
      },
      prepare(text: string) {
        return {
          payload: {
            id: Date.now(),
            text,
            completed: false,
          },
        };
      },
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setError } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos.todos;
export const selectError = (state: RootState) => state.todos.error;

export default todosSlice.reducer;
