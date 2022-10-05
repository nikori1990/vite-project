<template>
    <el-sub-menu v-if="menu?.children?.length" :index="menu.path">
        <template #title>
            <el-icon v-if="menu.icon">
                <svg-icon :icon-class="menu.icon"></svg-icon>
            </el-icon>
            <span>{{ menu.name }}</span>
        </template>

        <MenuItem
            v-for="subMenu in menu?.children"
            :key="subMenu.id"
            :menu="subMenu"
            :collapse="collapse" />
    </el-sub-menu>
    <el-menu-item v-else :index="menu.path" @click="handleClick(menu)">
        <!-- <el-icon><component :is="`${menu.icon}`" /></el-icon> -->
        <el-icon v-if="menu.icon">
            <svg-icon :icon-class="menu.icon"></svg-icon>
        </el-icon>
        <span>{{ menu.name }}</span>
    </el-menu-item>
</template>

<script setup lang="ts">
    import { usePageStore } from '@/store/pageStore'
    const pageStore = usePageStore()

    type Props = {
        menu: Menu
        collapse?: boolean
    }
    defineProps<Props>()

    const router = useRouter()
    const handleClick = (menu: Menu) => {
        const tag: Tag = {
            name: menu.name,
            path: menu.path,
        }
        pageStore.addTag(tag)
        router.push({ path: menu.path })
    }
</script>
<style scoped></style>
