<template>
    <div class="app-footer">
        <div class="links">
            <a href="https://courses.cs.ut.ee/"> <img width="400" height="90" src="../assets/courses.png"
                                                    title="Courses environment"> </a>
            <a href="https://ois2.ut.ee/"> <img width="320" height="90" src="../assets/ois.svg"
                                                title="Õppeinfosüsteem"> </a>
        </div>
    </div>
</template>

<style scoped>
    .app-footer {
        /* padding: 30px 0; /
        / margin-top: 10px; */
        background-color: #607D8B;
        height: 100px;
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .app-footer .links {
        display: flex;
        justify-content: center;
        margin: auto;
        color: #acd7ff;
        font-size: 11px;
    }
</style>