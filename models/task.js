const tasks = []

module.exports = class Task {
	constructor(title, message, date) {
		this.title = title
		this.message = message
		this.date = date
	}

	save() {
		tasks.push(this)
	}

	static fetchAll() {
		return tasks
	}
}
