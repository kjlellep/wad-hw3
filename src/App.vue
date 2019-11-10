<template>
    <main id="app">
        <app-header></app-header>
        <section id="container">
            <section id="main">
                <div class="content">
                    <app-profile :courseArray="array"></app-profile>     
                    <app-courses></app-courses>                   
                </div>
                <app-controls @buttonclicked="changeTab($event)"></app-controls>
            </section>
        </section>
        <app-footer></app-footer>
    </main>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                array: [1,2,3],
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
