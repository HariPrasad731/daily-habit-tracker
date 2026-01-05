export const calculateTotalMinutes = (workouts = []) => {
  return workouts.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0
  );
};
