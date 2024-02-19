<script>

export default  {
components: {},
props: {
    changeFunc: {
        type: Function,
        required: true,
    },
    placeholder: {
        type: String
    }
},
name: "AppInput",
data() {
    return {

    }
},
methods: {

},
}
</script>

<template>
    <input type="text" :placeholder="placeholder" @input="(event) => {changeFunc(event.target.value)}">
</template>

<style scoped lang='sass'>
    input
        height: 24rem
        padding: 0 4rem

        clip-path: polygon(0 6rem, 6rem 0, 100% 0, 100% calc(100% - 6rem), calc(100% - 6rem) 100%, 0 100%,0 6rem)
        outline: none
        border: 1rem solid #000

        &::placeholder
            font-size: 25rem
</style>