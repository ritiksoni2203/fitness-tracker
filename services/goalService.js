const Goal = require('../models/goalModel');

module.exports = {
  createGoal: async (userId, workoutType, targetHoursPerWeek, targetCaloriesPerWeek) => {
    const newGoal = await Goal.create({
      userId,
      workoutType,
      targetHoursPerWeek,
      targetCaloriesPerWeek,
    });
    return newGoal;
  },

  getGoalsByUserId: async (userId) => {
    const goal = await Goal.find({ userId })
    return goal;
  },

  updateGoal: async (id, workoutType, targetHoursPerWeek, targetCaloriesPerWeek) => {
    const updatedGoal = await Goal.findByIdAndUpdate(
        id,
        { workoutType, targetHoursPerWeek, targetCaloriesPerWeek },
        { new: true }
      );
    return updatedGoal;
  },

  deleteGoal: async (id) => {
    const deletedGoal = await Goal.findByIdAndDelete(id);
    return deletedGoal;
  },
};
