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
    <div>
        <h2>About</h2>
        <p>Text about App</p>
    </div>
</template>

<style scoped lang='sass'>
    @import '../assets/constants.sass'
    
    h2
        color: $primary-color

</style>