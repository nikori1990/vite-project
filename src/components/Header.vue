<template>
    <div>
        <h1>我是{{ type }}组件</h1>
    </div>
</template>
<script setup lang="ts">
    type Props = {
        type?: string
    }

    withDefaults(defineProps<Props>(), {
        type: 'Header',
    })
</script>
<style scoped></style>
