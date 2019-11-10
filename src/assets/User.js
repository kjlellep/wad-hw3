export default class User {

	constructor(firstname, lastname, birthday, faculty, gpa) {
		this.firstName = firstname;
		this.lastName = lastname;
		this.birthDay = birthday;
		this.faculty = faculty;
		this.gpa = gpa;
	}

	getName() {
		return this.firstName + " " + this.lastName;
	}

	getBirthday() {
		return this.birthDay;
	}
	
	getFaculty() {
		return this.faculty;
	}

	getGpa() {
		return this.gpa;
	}

	setGpa(newGpa) {
		this.gpa = newGpa;
	}

	static convertGrade(grade) {
		if (grade > 90) {
			return 4;
		} else if (grade > 80) {
			return 3;
		} else if (grade > 70) {
			return 2;
		} else if (grade > 60) {
			return 1;
		} else if (grade > 50) {
			return 0.5;
		} else {
			return 0;
		}
	}
		
	calcGrade(courseArray) {

		let sum = 0;
		courseArray.forEach(function(item) {
			sum += User.convertGrade(item.getGrade());
		})

		return Math.round((sum / courseArray.length) * 100) / 100;
	}        

}