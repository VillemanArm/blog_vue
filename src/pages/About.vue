<script>

export default  {
}
</script>

<template>
    <section class="container">
        <h1>About this project</h1>
        <p>This is an educational project in which I tested all the functionality of Vue 3: </p>
        <ul>
            <li>- functional components </li> 
            <li>- shared components for the project </li>
            <li>- standard and custom directives </li>
            <li>- slots </li>
            <li>- state hooks </li>
            <li>- watch and computed properties </li>
            <li>- animations </li>
            <li>- mixins</li> 
            <li>- static and dynamic routing (vue-router) </li>
            <li>- global state management (vuex) </li>
        </ul>
        <p>Additionally, this application sends and receives requests from an external JSON server.</p>
    </section>
</template>

<style scoped lang='sass'>
    @import '../assets/constants.sass'
    
    h2
        color: $primary-color

    p, ul
        font-size: 18rem

    ul
        list-style-type: none

    li
        margin-left: 16rem

</style>