<template>
    <div class="board__container">
        <ToDo />
        <InProgress />
        <Done />
    </div>
</template>

<script>
import ToDo from './ToDo.vue'
import InProgress from './InProgress.vue'
import Done from './Done.vue'
export default {
    name: "Board",
    components: {
        ToDo,
        InProgress,
        Done
    }
}
</script>

<style>

.board__container {
    border: solid 2px black;

    width: 100%;
    height: 500px;

    display: flex;
    flex-direction: row;

    /* margin-left: 100px; */
}

</style>