<template>
    <component :is="$antIcons[type]" />
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        }
    },
    name: "p-icon"
}
</script>