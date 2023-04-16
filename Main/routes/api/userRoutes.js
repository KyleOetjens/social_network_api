const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addThought,
  removeThought,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/students/:studentId/assignments
router.route('/:userId/thoughts').post(addThought);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

router.route(`/:userId/friends/:friendId`).post(addFriend).delete(removeFriend)
module.exports = router;
