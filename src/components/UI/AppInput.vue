<script>

export default  {
components: {},
props: {
    changeFunc: {
        type: Function,
        required: true,
    },
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
    <input type="text" @input="(event) => {changeFunc(event.target.value)}">
</template>

<style scoped lang='sass'>
    input
        height: 24rem
        padding: 0 4rem

        border-radius: 6rem
        outline: none
        border: 1rem solid #000
</style>