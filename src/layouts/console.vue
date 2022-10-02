<template>
    <el-container class="common-layout">
        <el-header class="layout-header">
            <div class="logo">
                <h1 class="logo-img">LOGO</h1>
            </div>
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                <el-radio-button :label="false">expand</el-radio-button>
                <el-radio-button :label="true">collapse</el-radio-button>
            </el-radio-group>
        </el-header>

        <el-container class="layout-main">
            <el-aside :class="asideClass" class="h-full">
                <Menu :collapse="isCollapse" />
            </el-aside>

            <el-container class="page">
                <div class="page-tags">
                    <el-tag class="tag" v-for="item in 4" :key="item">{{ item }}</el-tag>
                </div>
                <el-main class="page-main">
                    <router-view />
                </el-main>
                <el-footer class="layout-footer">Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
    const isCollapse = ref(false)
    const asideClass = computed(() => {
        if (isCollapse.value) {
            return 'layout-aside-collapse'
        }
        return 'layout-aside'
    })
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
        border-bottom: 1px solid var(--el-border-color);

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
    }

    .layout-aside-collapse {
        width: 60px;
        height: 100%;
    }

    .layout-main {
        height: 100%;
        overflow: auto;
    }

    .page-main {
        display: flex;
        padding: 15px;
        background: #f3f7fb;
    }

    .page-tags {
        display: flex;
        width: 100%;
        height: 40px;
        padding: 8px 15px;
        border-bottom: 1px solid var(--el-border-color);
        box-sizing: border-box;
        align-items: center;

        .tag {
            padding: 0 10px;
            margin-right: 10px;
        }
    }

    .layout-footer {
        background: green;
    }
</style>
