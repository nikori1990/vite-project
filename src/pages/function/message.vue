<template>
    <div>Message</div>
</template>
<route>
    {
        meta: {
            layout: 'console',
            keepAlive: true,
            title: '消息提示',
            breadcrumbList: [{
                name: '功能',
                path: '/function'
            }, {
                name: '消息提示',
                path: '/message'
            }],
        }
    }
</route>
<script setup lang="ts"></script>
<style scoped></style>
