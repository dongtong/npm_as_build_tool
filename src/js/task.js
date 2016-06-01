function Task(title, weight) {
	this.title = title;
	this.weight = weight;
}

Task.prototype.toString = function () {
	return "Title: " + this.title + " - weight: " + this.weight;
};

module.exports = Task;