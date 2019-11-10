<template>
    <div id="courses-container" style="display: none;">
        <h1 class="title">Courses</h1>
            <table id="courses">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course Title</th>
                        <th>Semester</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="course in courseArray" v-bind:key="course.getTitle()">
                        <td> {{ courseArray.indexOf(course) + 1 }} </td>
                        <td> {{ course.getTitle() }} </td>
                        <td> {{ course.getSemester() }} </td>
                        <td> {{ course.getGrade() }} </td>
                    </tr>
                </tbody>
            </table>
        <br>
        <br>
        <div>
            <button @click="addClicked" id="add-course-button" class="blue-button">+</button>
            <span id="input-form" class="add-course">
                <input class="input" type="text" placeholder="Course title" id="title">
                <input class="input" type="number" min="1" max="8" placeholder="Semester" id="semester">
                <input class="input" type="number" min="0" max="100" placeholder="Grade" id="grade">
                <button @click="saveClicked" class="green-button" id="save-course">Save</button>
                <button @click="cancelClicked" class="grey-button" id="cancel-course">Cancel</button>
            </span>
        </div>
    </div>
</template>

<script>
import Course from '../assets/Course.js'

    export default {
        data() {
            return {
                emptyTitle: "",
                emptySemester: "",
                emptyGrade: "",
                courseArray: [new Course("Object-oriented programming", 2, 90), new Course("Programming", 1, 70), new Course("Software Testing", 4, 55), new Course("English C1", 1, 95)],
            }
        },
        methods: {        
            addItem(course) {
                this.courseArray.push(course);
            },

            addClicked() {
                document.getElementById('input-form').classList.toggle("add-course");
                document.getElementById('title').value = this.emptyTitle;
                document.getElementById('semester').value = this.emptySemester;
                document.getElementById('grade').value = this.emptyGrade;
            },

            saveClicked() {
                let a = document.getElementById('title').value;
                let b = document.getElementById('semester').value;
                let c = document.getElementById('grade').value;
                if (a != null && a != "", b != null && b != "", c != null && c != "") {
                    let newCourse = new Course(document.getElementById('title').value, document.getElementById('semester').value, document.getElementById('grade').value);
                    this.addItem(newCourse);
                    this.$emit('gradeAdded', this.courseArray);
                }
            },

            cancelClicked() {
                document.getElementById('title').value = this.emptyTitle;
                document.getElementById('semester').value = this.emptySemester;
                document.getElementById('grade').value = this.emptyGrade;
            }
        }
    }
</script>

<style scoped>
    table {
        width: 100%;
        border-collapse: collapse;
    }

    table th {
        padding: 8px 12px;
        text-align: left;
        border: 1px solid #cbcbcb;
        background-color: #03A9F4;
        color: #ffffff;
    }

    table td {
        padding: 8px 12px;
        border: 1px solid #cbcbcb;
    }

    .input {
        border: 1px solid #cccccc;
        padding: 10px 20px;
        min-width: 135px;
    }

    .add-course {
        display: none;
    }
    
</style>