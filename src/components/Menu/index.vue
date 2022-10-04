<template>
    <el-scrollbar>
        <el-menu
            :collapse="collapse"
            @open="handleOpen"
            @close="handleClose"
            class="menu"
            :collapse-transition="false">
            <MenuItem v-for="menu in data" :key="menu.id" :menu="menu" :collapse="collapse" />
        </el-menu>
    </el-scrollbar>
</template>

<script setup lang="ts">
    import { useRequest } from 'vue-request'
    import { getMenuList } from '@/api/menu'

    interface Props {
        collapse: boolean
    }

    const props = withDefaults(defineProps<Props>(), { collapse: false })

    // 请求接口 /api/get
    const { data, loading, run } = useRequest(getMenuList)

    const handleOpen = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
</script>

<style lang="scss" scoped>
    .menu {
        border-right: 0;
    }
</style>
