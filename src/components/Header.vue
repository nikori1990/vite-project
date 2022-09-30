<template>
    <div>
        <h1>我是{{ type }}组件</h1>
    </div>
</template>
<script setup lang="ts">
    type Props = {
        type: string
    }

    defineProps<Props>()
</script>
<style scoped></style>
