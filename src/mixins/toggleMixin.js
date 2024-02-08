export default {
    props: {
        header: {
            type: String,
        },
        close: {
            type: Function,
            required: true,
        },
    },
}