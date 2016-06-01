(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["module"], factory);
	} else if (typeof exports !== "undefined") {
		factory(module);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod);
		global.task = mod.exports;
	}
})(this, function (module) {
	"use strict";

	function Task(title, weight) {
		this.title = title;
		this.weight = weight;
	}

	Task.prototype.toString = function () {
		return "Title: " + this.title + " - weight: " + this.weight;
	};

	module.exports = Task;
});