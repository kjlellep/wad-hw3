<template>
    <div id="profile-container" class="tab active">
        <div id="profile">
            <div class="avatar">
                <img src="../assets/me.png" id="picture" alt="My picture">
            </div>
            <div class="info">
                <ul>
                    <li id="name"> {{ name }} </li>
                    <li id="birthdate"> {{ birthdate }} </li>
                    <li id="faculty"> {{ faculty }} </li>
                </ul>
            </div>
            <div id="gpa">
                <strong> {{ gpa }} </strong>
            </div>
            <div class="clear-fix"></div>
        </div>
    </div>
</template>

<script>
import User from '../assets/User.js'
const usr = new User("Clark", "Kent", "10/01/1990", "Software Engineering", 3);

    export default {
        data() {
            return {
                name: usr.getName(),
                birthdate: usr.getBirthday(),
                faculty: usr.getFaculty()
            }        
        },
<<<<<<< HEAD

=======
>>>>>>> 6aec7113da124173e6feef0427f57423036c20f8
        computed: {
            gpa: function() {
                return usr.calcGrade(this.courseArray);
            }
        },
<<<<<<< HEAD
        
=======
>>>>>>> 6aec7113da124173e6feef0427f57423036c20f8
        props: {
            courseArray: Array,
        },
    }
</script>

<style scoped>

    li {
        margin-top: 15px;
    }

    #profile {
        padding-bottom: 10px;
        margin-bottom: 10px;
    }

    #profile div:not(.clear-fix) {
        height: 190px;
        float: left;
        position: relative;
    }

    #profile .avatar {
        width: 35%;
        text-align: center;
    }

    #profile .avatar img {
        width: 200px;
        margin-top: 5%;
    }

    #profile .info {
        width: 45%;
    }

    #picture {
        border-radius: 7.5vw;
    }

    #profile #gpa {
        width: 20%;
    }

    #profile #gpa strong {
        position: absolute;
        height: 60px;
        margin: 100px -25px;
        font-size: 60px;
        line-height: 60px;
        text-align: center;
    }

    .clear-fix {
        clear: both;
    }

    .info {
        padding-top: 20px;
        font-size: 22px;
    }
</style>