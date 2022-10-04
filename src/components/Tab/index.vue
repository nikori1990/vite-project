<template>
    <el-tabs
        v-model="meta.title"
        type="card"
        class="demo-tabs"
        closable
        @tab-click="clickTab"
        @tab-remove="removeTab"
        @tab-change="changeTab"
    >
        <el-tab-pane
            v-for="item in tagList"
            :key="item.name"
            :label="item.name"
            :name="item.name"
        />
    </el-tabs>
</template>
<script setup lang="ts">
    import type { TabsPaneContext, TabPanelName } from 'element-plus'

    import { useTagViewStore } from '@/store/tagView'
    const tagView = useTagViewStore()
    const { tagList, meta } = storeToRefs(tagView)

    const router = useRouter()

    const clickTab = ({ paneName }: TabsPaneContext) => {
        if (paneName === meta.value.title) {
            return
        }
        tagList.value.forEach((tag) => {
            if (tag.name === paneName) {
                router.push(tag.path)
            }
        })
    }

    const removeTab = (tabName: TabPanelName) => {
        tagView.removeTag(tabName)
    }

    const changeTab = (tabName: TabPanelName) => {
        tagList.value.forEach((tag) => {
            if (tag.name === tabName) {
                router.push(tag.path)
            }
        })
    }
</script>
<style lang="scss" scoped>
    ::v-deep .el-tabs {
        &__header {
            margin: 0;
        }

        &__nav {
            border: 0 !important;
        }

        &__item {
            height: 30px;
            margin: 5px;
            line-height: 28px;
            border: 1px solid var(--el-border-color-light) !important;
            border-radius: var(--el-border-radius-base);

            // color: #fff;

            // background: var(--el-color-primary);

            // border: 0 !important;
        }

        &__item:not(.is-active):hover {
            color: var(--el-color-primary);
            background-color: var(--el-color-primary-light-9);
            border-color: var(--el-color-primary-light-7);
            outline: none;
        }

        &__item.is-active {
            color: #fff;
            background: var(--el-color-primary);

            &:hover {
                background: var(--el-color-primary-light-3);
            }
        }
    }
</style>
