<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, i) in meta.breadcrumbList" :key="i">
            {{ item.name }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script setup lang="ts">
    type Props = {
        meta: Meta
    }

    defineProps<Props>()
</script>
<style scoped></style>
