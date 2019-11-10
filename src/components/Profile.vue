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
        computed: {
            gpa: function() {
                return usr.calcGrade(this.courseArray);
            }
        },
        props: {
            courseArray: Array,
        },
    }
</script>

<style scoped>
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
        width: 180px;
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
        width: 100%;
        height: 60px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto auto;
        font-size: 60px;
        line-height: 60px;
        text-align: center;
    }

    .clear-fix {
        clear: both;
    }

    .info {
        font-size: 22px;
    }
</style>