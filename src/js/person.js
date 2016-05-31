class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	toString() {
		return `name is ${this.name} and age is ${this.age}`;
	}
}

export default Person;