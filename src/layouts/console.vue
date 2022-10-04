<template>
    <el-container class="common-layout">
        <el-header class="layout-header">
            <div class="logo">
                <h1 class="logo-img">LOGO</h1>
            </div>
            <div class="collapse-box">
                <el-icon v-show="!isCollapse" @click="isCollapse = !isCollapse">
                    <i-ep-fold />
                </el-icon>
                <el-icon v-show="isCollapse" @click="isCollapse = !isCollapse">
                    <i-ep-expand />
                </el-icon>
            </div>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="(item, i) in meta.breadcrumbList" :key="i">
                    {{ item.name }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>

        <el-container class="layout-main">
            <el-aside :class="asideClass" class="h-full">
                <Menu :collapse="isCollapse" />
            </el-aside>

            <el-container class="page">
                <!-- <div class="page-tags">
                    <el-tag class="tag" v-for="item in 4" :key="item">{{ item }}</el-tag>
                </div> -->
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
    import { useTagViewStore } from '@/store/tagView'

    const isCollapse = ref(false)
    const asideClass = computed(() => {
        if (isCollapse.value) {
            return 'layout-aside-collapse'
        }
        return 'layout-aside'
    })

    const tagViewStore = useTagViewStore()

    const { meta } = storeToRefs(tagViewStore)
    // console.log('meta :>> ', meta)

    const route = useRoute()

    const initDataToStore = () => {
        const { meta } = route
        tagViewStore.setMeta(meta)
    }

    watch(
        () => [route.path],
        () => {
            initDataToStore()
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
                color: blue;
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
        height: 40px;
        color: #fff;
        background: var(--el-color-primary);
    }
</style>
