<script>
    export default {
        components: {},
        props: {
            options: {
                type: Array,
                default: [],
            },
            changeFunc: {
                type: Function,
                required: true,
            },
            defaultLabel: {
                type: String,
                default: 'select from list'
            }

        },
        name: "AppSelect",
        data() {
            return {}
        },
        methods: {},
    }
</script>

<template>
    <select
        @change="(event) => {
                changeFunc(event.target.value)
            }
        "
    >
        <option disabled value="" default selected>{{defaultLabel}}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.name }}
        </option>
    </select>
</template>

<style scoped lang="sass">
    select 
        height: 24rem

        clip-path: polygon(0 6rem, 6rem 0, 100% 0, 100% calc(100% - 6rem), calc(100% - 6rem) 100%, 0 100%,0 6rem)
        outline: none
        cursor: pointer
</style>
