export default class Course {

	constructor(title, semester, grade){
		this.title = title;
		this.semester = semester;
		this.grade = grade;
	}

	getTitle() {
		return this.title;
	}

	getSemester() {
		return this.semester;
	}

	getGrade() {
		return this.grade;
	}

}