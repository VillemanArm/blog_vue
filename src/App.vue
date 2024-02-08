<script>
import Navbar from "@/components/Navbar.vue"

export default  {
    components: {Navbar},
    props: {
        // propsTemplate: {
        //     type: Function,
        //     required: true,
        // },
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
    <div class="app">
        <navbar/>
        <div class="container">
            <router-view class="router"></router-view>
        </div>
    </div>
</template>

<!-- <style href="./assets/main.sass" lang="sass"></style> -->

<style lang='sass'>
    @import '@/assets/constants.sass'
    @import '@/assets/normalize'

    // @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap')

    @font-face 
        font-family: 'Ubuntu'
        src: url('./assets/fonts/ubuntu_latin_400.woff2')
        font-style: normal
        font-weight: 400

    @font-face 
        font-family: 'Ubuntu'
        src: url('./assets/fonts/ubuntu_latin_700.woff2')
        font-style: normal
        font-weight: 700

    *
        margin: 0
        padding: 0

        box-sizing: border-box

    html
        font-size: 1px

    body
        min-height: 100vh
        font-size: 16rem
    //     background-color: $background-color
        font-family: 'Ubuntu', sans-serif
        font-weight: 400
        color: $primary-color

    img
        width: 100%
        height: 100%
        object-fit: contain

    a
        text-decoration: none


</style>