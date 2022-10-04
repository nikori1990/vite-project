<template>
    <div class="flex-col w-full">
        <div class="toolbar"> </div>
        <el-form :inline="true" :model="formInline" class="search-box rounded">
            <el-form-item label="Approved by">
                <el-input v-model="formInline.user" placeholder="Approved by" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select v-model="formInline.region" placeholder="Activity zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Query</el-button>
            </el-form-item>
        </el-form>
        <div class="flex-col w-full flex-1 bg-light-50 p-3 rounded shadow-light-100">
            <el-table
                :data="tableData"
                table-layout="fixed"
                :header-cell-style="headerCellStyle"
                :border="true"
            >
                <el-table-column type="index" width="50">
                    <template #header>
                        <el-icon>
                            <i-ep-more />
                        </el-icon>
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
            </el-table>
        </div>
    </div>
</template>
<route>
    {
        meta: {
            layout: 'console',
            keepAlive: true,
            title: '用户管理',
            breadcrumbList: [{
                name: '系统管理',
                path: '/system'
            }, {
                name: '用户管理',
                path: '/user'
            }],
        }
    }
</route>
<script setup lang="ts">
    const formInline = reactive({
        user: '',
        region: '',
    })

    const headerCellStyle = () => {
        return {
            // background: 'var(--el-color-primary)',
            // color: '#fff',
        }
    }

    const tableData = [
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
    ]
    const onSubmit = () => {
        console.log('submit!')
    }
</script>
<style lang="scss" scoped>
    .search-box {
        @apply p-3 mb-3 pb-0 w-full;
    }
</style>
