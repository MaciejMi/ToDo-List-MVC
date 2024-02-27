module.exports.getTask = (req, res, next) => {
	res.render('tasks')
}

module.exports.getAddTasks = (req, res, next) => {
	res.render('add-task')
}

module.exports.postAddTasks = (req, res, next) => {
	const { title, message, date } = req.body
}
