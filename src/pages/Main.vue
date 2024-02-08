<script>

export default  {
    components: {},
    props: {
        propsTemplate: {
            type: Function,
            required: true,
        },
        },
    data() {
        return {
        
        }
    },
    methods: {

    },
}
</script>

<template>
    <h1>Welcome</h1>

    <router-link to="/about">About project.</router-link>
    <router-link to="/posts">Posts list.</router-link>
</template>

<style scoped lang='sass'>
    @import '../assets/constants.sass'

</style>