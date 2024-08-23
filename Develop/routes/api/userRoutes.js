const router = require('express').Router();
const {
  getUsers,
  getSingleuser,
  createuser,
  deleteuser,
  addThought,
  removeThought,
} = require('../../controllers/userController');

// /api/Users
router.route('/').get(getUsers).post(createuser);

// /api/Users/:userId
router.route('/:userId').get(getSingleuser).delete(deleteuser);

// /api/Users/:userId/Thoughts
router.route('/:userId/Thoughts').post(addThought);

// /api/Users/:userId/Thoughts/:ThoughtId
router.route('/:userId/Thoughts/:ThoughtId').delete(removeThought);

module.exports = router;
