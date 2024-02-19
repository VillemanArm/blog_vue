<script>

export default  {
    data() {
        return {
        
        }
    },
    methods: {

    },
}
</script>

<template>
    <div class="navbar">
        <div class="container">
            <div class="navbar__logo" @click="$router.push('/')">Blog on Vue 3</div>
            <div class="navbar__btns">
                <router-link to="/">Posts list</router-link>
                <router-link to="/about">About project</router-link>
            </div>
        </div>

    </div>

</template>

<style scoped lang='sass'>
    @import '../assets/constants.sass'

    .navbar
        height: 50rem

        color: $light-font-color

        background-color: $primary-color

        &>.container
            height: 100%
            display: flex
            justify-content: space-between
            align-items: center
                
    .navbar__logo
        cursor: pointer
    .navbar__btns
        display: flex
        gap: 16rem

        &>a
            color: $light-font-color

</style>