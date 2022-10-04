<template>
    <div>父子组件传参</div>
</template>
<route>
    {
        meta: {
            layout: 'console',
            keepAlive: true,
            title: '父子组件传参',
            breadcrumbList: [{
                name: 'study',
                path: '/study'
            }, {
                name: '父子组件传参',
                path: '/prop'
            }]
        }
    }
</route>
<script setup lang="ts"></script>
<style scoped></style>
