const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    workoutType: {
        type: String,
        required: true
    },
    targetHoursPerWeek: {
        type: Number,
        required: true
    },
    targetCaloriesPerWeek: {
        type: Number,
        required: true
    },
});

const Goal = mongoose.model('Goal', goalSchema);
module.exports = Goal;
