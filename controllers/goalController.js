const goalService = require('../services/goalService');

module.exports = {
  createGoal: async (req, res) => {
    try {
      const { workoutType, targetHoursPerWeek, targetCaloriesPerWeek } = req.body;
      const userId = req.userId;
      const goal = await goalService.createGoal(userId, workoutType, targetHoursPerWeek, targetCaloriesPerWeek);
      res.status(201).json(goal);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  },

  getGoalsByUserId: async (req, res) => {
    try {
      const userId = req.userId;
      const goals = await goalService.getGoalsByUserId(userId);
      res.json(goals);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  },

  updateGoal: async (req, res) => {
    try {
      const { id } = req.params;
      const { workoutType, targetHoursPerWeek, targetCaloriesPerWeek } = req.body;
      const updatedGoal = await goalService.updateGoal(id, workoutType, targetHoursPerWeek, targetCaloriesPerWeek);
      res.json(updatedGoal);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  },

  deleteGoal: async (req, res) => {
    try {
      const { id } = req.params;
      await goalService.deleteGoal(id);
      res.json({ message: 'Goal deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  },
};
