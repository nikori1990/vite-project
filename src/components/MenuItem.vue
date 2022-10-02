<template>
    <el-sub-menu v-if="menu?.children?.length" :index="menu.path">
        <template #title>
            <el-icon>
                <svg-icon :icon-class="menu.icon"></svg-icon>
            </el-icon>
            <span>{{ menu.name }}</span>
        </template>

        <MenuItem v-for="subMenu in menu?.children" :key="subMenu.id" :menu="subMenu" />
    </el-sub-menu>
    <el-menu-item v-else :index="menu.path">
        <!-- <el-icon><component :is="`${menu.icon}`" /></el-icon> -->
        <el-icon>
            <svg-icon :icon-class="menu.icon"></svg-icon>
        </el-icon>
        <span>{{ menu.name }}</span>
    </el-menu-item>
</template>

<script setup lang="ts">
    type Props = {
        menu: Menu
    }
    defineProps<Props>()
</script>

<script lang="ts">
    export default {
        name: 'MenuItem',
    }
</script>
<style scoped></style>
