<script>
    import { X } from "lucide-vue-next"
    import toggleMixin from "@/mixins/toggleMixin.js"

    export default {
        name: "Modal",
        components: { X },
        mixins: [toggleMixin],
        data() {
            return {
            }
        },
        mounted() {
            document.body.style.overflow = 'hidden'
        },
        unmounted() {
            document.body.style.overflow = 'auto'
        }
    }
</script>

<template>
    <div class="modal__wrapper" @click="close(false)">
        <div @click.stop className="modal">
            <div class="modal__head">
                <h2>{{ header }}</h2>
                <div class="modal__close" @click="close(false)">
                    <X :size="36" />
                </div>
            </div>
            <div class="modal__content">
                <slot> </slot>
            </div>
        </div>
    </div>
</template>

<style scoped lang="sass">
    @import '@/assets/constants.sass'

    .modal__wrapper
        width: 100vw
        height: 100vh
        position: absolute
        top: 0
        left: 0
        display: flex
        justify-content: center
        align-items: center

        background-color: rgb(0, 0, 0, 0.5)
        overflow: hidden

    .modal
        width: 600rem
        height: 450rem
        padding: 16rem

        background-color: $background-color
        clip-path: polygon(0 10rem, 10rem 0, 100% 0, 100% calc(100% - 10rem), calc(100% - 10rem) 100%, 0 100%,0 5rem)
        

    .modal__head
        margin-bottom: 20rem
    .modal__close
        float: right
        cursor: pointer

    h2
        display: inline-block
        font-size: 32rem
</style>
