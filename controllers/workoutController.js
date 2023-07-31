const workoutService = require('../services/workoutService');

module.exports = {
  getAllWorkouts: async (req, res) => {
    try {
      const workouts = await workoutService.getAllWorkouts();
      res.json(workouts);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  },

  createWorkout: async (req, res) => {
    try {
      const { userId, workoutType, duration, caloriesBurned, date } = req.body;
      const workout = await workoutService.createWorkout(userId, workoutType, duration, caloriesBurned, date);
      res.status(201).json(workout);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  },

  updateWorkout: async (req, res) => {
    try {
      const { id } = req.params;
      const { userId, workoutType, duration, caloriesBurned, date } = req.body;
      const updatedWorkout = await workoutService.updateWorkout(
        id,
        userId,
        workoutType,
        duration,
        caloriesBurned,
        date
      );
      res.json(updatedWorkout);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  },

  deleteWorkout: async (req, res) => {
    try {
      const { id } = req.params;
      await workoutService.deleteWorkout(id);
      res.json({ message: 'Workout deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  },
};
