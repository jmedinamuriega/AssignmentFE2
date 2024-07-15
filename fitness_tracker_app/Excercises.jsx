import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExercise, deleteExercise } from './slices/exerciseSlice';

const Exercises = () => {
  const exercises = useSelector((state) => state.exercises.exercises);
  const dispatch = useDispatch();
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  const handleAddExercise = () => {
    dispatch(addExercise({ type, duration, calories }));
    setType('');
    setDuration('');
    setCalories('');
  };

  return (
    <div>
      <h1>Exercises</h1>
      <div>
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="number"
          placeholder="Duration (in minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          type="number"
          placeholder="Calories Burned"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <button onClick={handleAddExercise}>Add Exercise</button>
      </div>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.type} - {exercise.duration} minutes - {exercise.calories} calories
            <button onClick={() => dispatch(deleteExercise(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercises;
