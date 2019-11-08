export default class User {

	constructor(firstname, lastname, birthday, faculty, gpa){
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

	setGpa(newGpa) {
		this.gpa = newGpa;
	}

	getGpa() {
		return this.gpa;
	}
}