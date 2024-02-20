<script>
import Navbar from "@/components/Navbar.vue"

export default  {
    components: {Navbar},
}
</script>

<template>
    <div class="app">
        <navbar/>
        <router-view></router-view>
    </div>
</template>

<style lang='sass'>
    @import '@/assets/constants.sass'
    @import '@/assets/normalize'

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
        font-family: 'Ubuntu', sans-serif
        font-weight: 400
        color: $primary-color       

    img
        width: 100%
        height: 100%
        object-fit: contain

    a
        text-decoration: none

        &:hover
            text-decoration: underline

    p, ul
        margin-bottom: 12rem

    .app
        min-height: 100vh

        background-color: $background-color

    
    .container
        width: 900rem
        margin: 0 auto
        font-family: Ubuntu
        box-sizing: border-box

    @media (max-width: 920px)
        html 
            font-size: 0.108695652173913vw
    
    @media (max-width: 768px)
        html 
            font-size: 0.1736111111111111vw

        .container
            width: 560rem

</style>