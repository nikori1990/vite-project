<template>
    <div class="flex-col w-full">
        <div>
            <el-row :gutter="20">
                <span class="ml-3 w-35 text-gray-600 inline-flex items-center">firstName</span>
                <el-input class="w-50 m-2" v-model="firstName" type="text" />
            </el-row>
            <el-row :gutter="20">
                <span class="ml-3 w-35 text-gray-600 inline-flex items-center">lastName</span>
                <el-input class="w-50 m-2" v-model="lastName" type="text" />
            </el-row>

            <div> {{ firstName }} --- {{ lastName }} </div>
            <div>{{ name }}</div>
            <div>{{ getName }}</div>
        </div>

        <el-divider />

        <div>
            <el-table :data="tableData" :border="true">
                <el-table-column prop="name" label="name" align="center" />
                <el-table-column label="num" align="center">
                    <template #default="scope">
                        <el-button @click="addAndSub(scope.row, false)">-</el-button>
                        {{ scope.row.num }}
                        <el-button @click="addAndSub(scope.row, true)">+</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="price" label="price" align="center" />
                <el-table-column fixed="right" label="Operations" width="150">
                    <template #default="scope">
                        <el-button link type="primary" size="small" @click="del(scope.$index)">
                            Delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div> total: {{ total }} </div>
        </div>
    </div>
</template>
<route>
    {
        meta: {
            layout: 'console',
            keepAlive: true,
            title: 'computed',
            breadcrumbList: [{
                name: 'study',
                path: '/study'
            }, {
                name: 'computed',
                path: '/computed'
            }]
        }
    }
</route>
<script setup lang="ts">
    const firstName = ref('')
    const lastName = ref('')

    const name = computed(() => {
        return `${firstName.value} --- ${lastName.value}`
    })

    const getName = computed({
        get() {
            return `${firstName.value} --- ${lastName.value}`
        },
        set() {
            firstName.value + lastName.value
        },
    })

    interface Shop {
        name: string
        num: number
        price: number
    }

    const tableData = reactive<Shop[]>([
        {
            name: 'aaaa',
            num: 1,
            price: 100,
        },
        {
            name: 'bbbb',
            num: 2,
            price: 200,
        },
        {
            name: 'cccc',
            num: 3,
            price: 300,
        },
    ])

    const addAndSub = (item: Shop, type: boolean): void => {
        if (item.num > 1 && !type) {
            item.num--
        }
        if (item.num < 99 && type) {
            item.num++
        }
    }

    const del = (index: number) => {
        tableData.splice(index, 1)
    }

    const total = computed(() => {
        return tableData.reduce((prev, next) => {
            return prev + next.num * next.price
        }, 0)
    })
</script>
<style scoped></style>
