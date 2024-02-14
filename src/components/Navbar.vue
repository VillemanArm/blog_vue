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
            <div class="navbar__logo" @click="$router.push('/')">Vue 3</div>
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

        color: $secondary-color

        background-color: #325450

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
            color: $secondary-color

</style>