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
                    <tr>
                        <td>1</td>
                        <td>Agile software development</td>
                        <td>1</td>
                        <td>82</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>System modeling</td>
                        <td>1</td>
                        <td>85</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Object-oriented programming</td>
                        <td>2</td>
                        <td>99</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Estonian Level A2</td>
                        <td>2</td>
                        <td>65</td>
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
            name: "",
            semester: "",
            grade: "",
            course: new Course(this.name, this.semester, this.grade),
        }
    },
    methods: {
        addClicked() {
            document.getElementById('input-form').classList.toggle("add-course");
        },
        saveClicked() {
            this.course = new Course();
            alert("save clicked");
        },
        cancelClicked() {
            alert("cancel clicked");
        },
        
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