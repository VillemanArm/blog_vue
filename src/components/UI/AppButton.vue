<script>
    export default {
        components: {},
        name: "AppButton", // 1. создаем поле с имененм компонента
        data() {
            return {}
        },
        methods: {},
    }
</script>

<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped lang="sass">
    @import "../../assets/constants.sass"

    button
        padding: 4rem 10rem
        box-sizing: border-box

        text-transform: uppercase

        background-color: transparent
        outline: 0
        border: 3rem solid $primary-color
        border-radius: 12rem
        cursor: pointer
        color: $primary-color

        &:hover
            color: $secondary-color
            background-color: $primary-color
</style>
