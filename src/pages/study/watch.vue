<template>
    <div class="flex-col w-full">
        <h1>watch</h1>
        <el-row :gutter="20">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">message</span>
            <el-input class="w-50 m-2" v-model="message" type="text" />
        </el-row>
        <el-row :gutter="20">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">message2</span>
            <el-input class="w-50 m-2" v-model="message2" type="text" />
        </el-row>
        <el-row :gutter="20">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">message3</span>
            <el-input class="w-50 m-2" v-model="message3.nav.bar.name" type="text" />
        </el-row>
        <el-row :gutter="20">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">reactive</span>
            <el-input class="w-50 m-2" v-model="message4.nav.bar.name" type="text" />
        </el-row>
        <el-row :gutter="20">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">reactive2</span>
            <el-input class="w-50 m-2" v-model="message5.name" type="text" />
            <el-input class="w-50 m-2" v-model="message5.age" type="text" />
        </el-row>

        <el-divider />

        <h1>watchEffect</h1>

        <el-row :gutter="20">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">effective</span>
            <el-input class="w-50 m-2" v-model="effective" type="text" />
        </el-row>
        <el-row :gutter="20">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">effective2</span>
            <el-input class="w-50 m-2" v-model="effective2" type="text" />
        </el-row>
        <el-button @click="stopWatchEffective">Stop watchEffect</el-button>
    </div>
</template>
<route>
    {
        meta: {
            layout: 'console',
            keepAlive: true,
            title: 'watch',
            breadcrumbList: [{
                name: 'study',
                path: '/study'
            }, {
                name: 'watch',
                path: '/watch'
            }]
        }
    }
</route>
<script setup lang="ts">
    const message = ref<string>('')
    const message2 = ref<string>('')

    const message3 = ref({
        nav: {
            bar: {
                name: 'niko',
            },
        },
    })

    const message4 = reactive({
        nav: {
            bar: {
                name: 'reactive',
            },
        },
    })

    const message5 = reactive({
        name: '1',
        age: 0,
    })

    watch([message, message2], (newVal, oldVal) => {
        console.log('newVal :>> ', newVal)
        console.log('oldVal :>> ', oldVal)
    })

    // deep and immediate
    watch(
        message3,
        (newVal, oldVal) => {
            console.log('newVal :>> ', newVal)
            console.log('oldVal :>> ', oldVal)
        },
        {
            deep: true,
            immediate: true,
        }
    )

    // reactive no need deep
    watch(message4, (newVal, oldVal) => {
        console.log('newVal :>> ', newVal)
        console.log('oldVal :>> ', oldVal)
    })

    watch(
        () => message5.name,
        (newVal, oldVal) => {
            console.log('newVal :>> ', newVal)
            console.log('oldVal :>> ', oldVal)
        }
    )

    const effective = ref<string>('haha')
    const effective2 = ref<string>('hehe')

    const stop = watchEffect((onInvalidData) => {
        console.log('effective.value :>> ', effective.value)
        console.log('effective2.value :>> ', effective2.value)

        onInvalidData(() => {
            console.log('before :>> ')
        })
    })

    const stopWatchEffective = () => stop()
</script>
<style scoped></style>
