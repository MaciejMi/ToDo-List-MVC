const express = require('express')

const router = express.Router()

const tasksControllers = require('../controllers/tasks')

router.get('/', tasksControllers.getTask)

router.get('/add-task', tasksControllers.getAddTasks)

router.post('/add-task', tasksControllers.postAddTasks)

module.exports = router
