const express = require('express');
const goalController = require('../controllers/goalController');
const router = express.Router();

router.get('/', goalController.getGoalsByUserId);
router.post('/', goalController.createGoal);
router.put('/:id', goalController.updateGoal);
router.delete('/:id', goalController.deleteGoal);

module.exports = router;
