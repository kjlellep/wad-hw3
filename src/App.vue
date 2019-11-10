<template>
    <main id="app">
        <app-header></app-header>
<<<<<<< HEAD
            <section id="container">
                <section id="main">
                    <div class="content">
                        <app-profile :courseArray="array"></app-profile>     
                        <app-courses @load-courses="updateArray($event)"></app-courses>                   
                    </div>
                    <app-controls @button-clicked="changeTab($event)"></app-controls>
                </section>
=======
        <section id="container">
            <section id="main">
                <div class="content">
                    <app-profile :courseArray="array"></app-profile>     
                    <app-courses @load-courses="updateArray($event)"></app-courses>                   
                </div>
                <app-controls @button-clicked="changeTab($event)"></app-controls>
>>>>>>> 6aec7113da124173e6feef0427f57423036c20f8
            </section>
        <app-footer></app-footer>
    </main>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                array: [],
            }
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
            },
<<<<<<< HEAD
            
=======
>>>>>>> 6aec7113da124173e6feef0427f57423036c20f8
            updateArray(array) {
                this.array = array;
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

    * {
        box-sizing: border-box;
        font-family: 'Muli', cursive, sans-serif;
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

</style>
