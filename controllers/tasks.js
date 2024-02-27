const Task = require('../models/task')

module.exports.getTask = (req, res, next) => {
	res.render('tasks', { tasks: Task.fetchAll() })
}

module.exports.getAddTasks = (req, res, next) => {
	res.render('add-task')
}

module.exports.postAddTasks = (req, res, next) => {
	const { title, message, date } = req.body

	const task = new Task(title, message, date)
	task.save()

	res.redirect('/')
}
