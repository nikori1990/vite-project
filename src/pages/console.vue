<template>
    <div class="page-content">
        {{ data }}
        <div class="card" v-for="item in 1000" :key="item">
            <h3>{{ item }}</h3>
        </div>
    </div>
</template>
<route>
    {
        meta: {
            layout: 'console'
        }
    }
</route>
<script setup lang="ts">
    import { useRequest } from 'vue-request'
    import { getMenuList } from '@/api/menu'

    // 请求接口 /api/get
    const { data, loading, run } = useRequest(getMenuList)
</script>
<style lang="scss" scoped>
    .page-content {
        width: 100%;

        .card {
            @apply bg-purple-500 text-light-50 p-2 m-2 rounded;

            h1 {
                height: 20px;
                line-height: 20px;
            }
        }
    }
</style>
