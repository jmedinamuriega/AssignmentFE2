import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exercises: []
};

const exerciseSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    addExercise: (state, action) => {
      state.exercises.push(action.payload);
    },
    deleteExercise: (state, action) => {
      state.exercises = state.exercises.filter(
        (exercise, index) => index !== action.payload
      );
    }
  }
});

export const { addExercise, deleteExercise } = exerciseSlice.actions;

export default exerciseSlice.reducer;
