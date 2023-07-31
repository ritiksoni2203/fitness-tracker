const Workout = require('../models/workoutModel');

module.exports = {
  getAllWorkouts: async () => {
    const workouts = await Workout.find();
    return workouts;
  },

  createWorkout: async (userId, workoutType, duration, caloriesBurned, date) => {
    const newWorkout = await Workout.create({ userId, workoutType, duration, caloriesBurned, date });
    return newWorkout;
  },

  updateWorkout: async (id, userId, workoutType, duration, caloriesBurned, date) => {
    const updatedWorkout = await Workout.findByIdAndUpdate(
        id,
        { userId, workoutType, duration, caloriesBurned, date },
        { new: true }
      );
    return updatedWorkout;
  },

  deleteWorkout: async (id) => {
    const deletedWorkout = await Workout.findByIdAndDelete(id);
    return deletedWorkout;
  },
};
