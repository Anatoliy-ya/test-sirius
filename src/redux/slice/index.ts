import { PayloadAction, combineReducers, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserState {
  isAuthenticated: boolean;
  email: string;
}

const initialState: UserState = {
  isAuthenticated: false,
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<string>) => {
      state.email = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state: UserState) => {
      state.isAuthenticated = false;
      state.email = '';
    },
  },
});

const selectedPath = createSlice({
  name: 'selectedPath',
  initialState: 'home',
  reducers: {
    setSelectedPath: (state, action: PayloadAction<string>) => action.payload,
  },
});

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  selectedPath: selectedPath.reducer,
});

export const { login, logout } = userSlice.actions;
export const { setSelectedPath } = selectedPath.actions;

export const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated;
export const selectUserEmail = (state: RootState) => state.user.email;
export const selectSelectedPath = (state: RootState) => state.selectedPath;
