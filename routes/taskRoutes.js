const express = require("express");
const router = express.Router();
const {
	getAllTasks,
	createNewTask,
	updateTask,
	deleteTask,
} = require("../controllers/tasksControllers");
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);

router
	.route("/")
	.get(getAllTasks)
	.post(createNewTask)
	.patch(updateTask)
	.delete(deleteTask);

module.exports = router;
