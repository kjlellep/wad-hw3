<template>
    <main id="app">
        <app-header></app-header>
        <section id="container">
            <section id="main">
                <div class="content">
                    <app-profile></app-profile>
                        <div id="courses-container" class="tab">
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
                                <button id="add-course-button" class="blue-button">+</button>
                                <span id="add-course">
                                    <input class="input" type="text" placeholder="Course title" id="title">
                                    <input class="input" type="number" min="1" max="8" placeholder="Semester" id="semester">
                                    <input class="input" type="number" min="0" max="100" placeholder="Grade" id="grade">
                                    <button class="green-button" id="save-course">Save</button>
                                    <button class="grey-button" id="cancel-course">Cancel</button>
                                </span>
                            </div>
                        </div>
                </div>
                <app-controls @buttonClicked="changeTab($event)"></app-controls>
            </section>
        </section>
        <app-footer></app-footer>
    </main>
</template>

<script>

    export default {
        name: 'app',
        data () {
            
        },
        methods: {
            changeTab(event) {
                if (event == 0) {
                    document.getElementById("profile-container").style.display = "block";
                    document.getElementById("courses-container").style.display = "none";
                } else if (event == 1) {
                    document.getElementById("profile-container").style.display = "none";
                    document.getElementById("courses-container").style.display = "block";
                }
            }
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
        font-family: Cambria, sans-serif;
    }

    html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background-color: #eaeaea;
    }

    main {
        position: relative;
        min-height: 100%;
        padding-bottom: 110px;
    }

    .clear-fix {
        clear: both;
    }

    .info {
        font-size: 22px;
    }

    #container {
        width: 80%;
        max-width: 900px;
        min-width: 320px;
        padding: 15px;
        background-color: #ffffff;
        margin: 0 auto;
    }
    
    .content {
        padding: 10px;
    }

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

    .content .tab {
        display: none;
    }

    .content .tab.active {
        display: block;
    }

    .blue-button {
        background-color: #2196F3;
        color: #ffffff;
        border: none;
        padding: 10px 20px;
    }

    .green-button {
        background-color: #69f378;
        color: #ffffff;
        border: none;
        padding: 10px 10px;
    }

    .grey-button {
        background-color: #e1e8e6;
        color: #ffffff;
        border: none;
        padding: 10px 20px;
    }

    .input {
        border: 1px solid #cccccc;
        padding: 10px 20px;
        min-width: 135px;
    }

    #add-course {
        display: none;
    }
</style>
