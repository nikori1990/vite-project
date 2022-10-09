<template>
    <el-container class="common-layout">
        <el-header class="layout-header">
            <div class="logo">
                <a class="logo-img" href="/">By-Admin</a>
            </div>
            <div class="collapse-box">
                <el-icon v-show="!isCollapse" @click="isCollapse = !isCollapse">
                    <i-ep-fold />
                </el-icon>
                <el-icon v-show="isCollapse" @click="isCollapse = !isCollapse">
                    <i-ep-expand />
                </el-icon>
            </div>
            <Breadcrumb :meta="meta" />
        </el-header>

        <el-container class="layout-main">
            <el-aside :class="asideClass" class="h-full">
                <Menu :collapse="isCollapse" />
            </el-aside>

            <el-container class="page">
                <Tab />
                <el-main class="page-main">
                    <router-view v-slot="{ Component }">
                        <keep-alive v-if="meta.keepAlive">
                            <component :is="Component"></component>
                        </keep-alive>
                        <component :is="Component" v-else />
                    </router-view>
                </el-main>
                <el-footer class="layout-footer">Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
    import { usePageStore } from '@/store/pageStore'
    import { RouteMeta } from 'vue-router'

    const isCollapse = ref(false)
    const asideClass = computed(() => {
        if (isCollapse.value) {
            return 'layout-aside-collapse'
        }
        return 'layout-aside'
    })

    const pageStore = usePageStore()
    const { meta } = storeToRefs(pageStore)

    const route = useRoute()

    const initDataToPageStore = (meta: RouteMeta) => {
        pageStore.setMeta(meta as Meta)
    }

    watch(
        () => route.meta,
        (meta) => {
            initDataToPageStore(meta)
        },
        { immediate: true }
    )
</script>

<style lang="scss" scoped>
    .common-layout {
        height: 100%;
        overflow: hidden;
    }

    .layout-header {
        display: flex;

        // background: #fafafa;
        align-items: center;
        border-bottom: 1px solid var(--el-border-color-light);

        .logo {
            display: flex;
            align-items: center;
            width: 200px;
            height: 100%;

            .logo-img {
                margin: 0;
                font-size: 24px;
                font-weight: bold;
                color: var(--el-color-primary);
                cursor: pointer;
            }
        }
    }

    .layout-aside {
        width: 220px;
        height: 100%;
        border-right: 1px solid var(--el-border-color-light);
    }

    .layout-aside-collapse {
        width: 60px;
        height: 100%;
        border-right: 1px solid var(--el-border-color-light);
    }

    .layout-main {
        height: 100%;
        overflow: auto;
    }

    .collapse-box {
        display: flex;
        margin-right: 20px;
        font-size: 20px;
        cursor: pointer;
        align-items: center;
        justify-content: center;

        &:hover {
            color: var(--el-color-primary);
        }
    }

    .page-main {
        display: flex;
        padding: 15px;
        background: #f3f3f3;
    }

    .page-tags {
        display: flex;
        width: 100%;
        height: 40px;
        padding: 8px 15px;
        box-sizing: border-box;
        align-items: center;

        .tag {
            padding: 0 10px;
            margin-right: 10px;
        }
    }

    .layout-footer {
        display: flex;
        align-items: center;
        height: 40px;
        color: #fff;
        background: var(--el-color-primary);
    }
</style>
