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
    <button type="button">
        <div>
            <slot></slot>
        </div>
    </button>
</template>

<style scoped lang="sass">
    @import "../../assets/constants.sass"

    button
        padding: 2rem
        box-sizing: border-box

        text-transform: uppercase

        background-color: $primary-color
        outline: 0
        border: 3rem solid $primary-color
        cursor: pointer
        color: $primary-color
        clip-path: polygon(0 10rem, 10rem 0, 100% 0, 100% calc(100% - 10rem), calc(100% - 10rem) 100%, 0 100%,0 5rem)


        &>div
            width: 100%
            height: 100%
            background-color: $background-color
            clip-path: polygon(0 7rem, 7rem 0, 100% 0, 100% calc(100% - 7rem), calc(100% - 7rem) 100%, 0 100%,0 7rem)
            
            &:hover
                color: $light-font-color
                background-color: $primary-color
</style>
