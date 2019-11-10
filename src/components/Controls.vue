<template>
    <div>
        <button @click="ClickedProfile" id="profile-button" class="pill" :class="{'pill-active': pActive}">Profile</button>
        <button @click="ClickedCourses" id="courses-button" class="pill" :class="{'pill-active': cActive}">Courses</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pActive: true,
            cActive: false
        }
    },
    methods: {
        ClickedProfile() {
            this.$emit('button-clicked', 0);
            this.cActive = false;
            this.pActive = true;
        },
        ClickedCourses() {
            this.$emit('button-clicked', 1);
            this.cActive = true;
            this.pActive = false;
        }
    }
}
</script>

<style scoped>
    .pill {
        width: 16%;
        font-size: 15px;
        border: 1px solid #cbcbcb;
        background-color: #eaeaea;
        padding: 10px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-top: none;
        margin-top: -1px;
        outline: none !important;
    }

    .pill-active {
        background-color: #ffffff;
        border-top: 1px solid #ffffff;
    }

    .pill:hover {
        cursor: pointer;
        color: rgb(5, 20, 231);
    }
</style>
