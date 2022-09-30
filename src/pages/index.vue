<template>
    <div>
        <h1>Index </h1>
        <div>
            {{ person }}
        </div>
        <div>
            {{ person2 }}
        </div>
        <el-button @click="change">修改</el-button>
        <el-button @click="change2">修改2</el-button>

        <div>
            <el-input v-model="firstName" type="text" />
            <el-input v-model="lastName" type="text" />

            <div>
                {{ name }}
            </div>
        </div>

        <div>
            counter: {{ counter.number }}
            <el-button @click="inc">Inc</el-button>
        </div>
    </div>
</template>

<route>
  {
    meta: {
      layout: 'test'
    }
  }
</route>

<script setup lang="ts">
    // const env = ref(import.meta.env)
    // console.log('env', env.value)
    import { ElButton, ElInput } from 'element-plus'

    import { useCounterStore } from '../stores/counter'

    const counter = useCounterStore()

    type P = {
        name: string
        age: number
    }
    const person = ref<P>({ name: 'niko', age: 20 })

    const person2 = reactive({ name: 'niko', age: 21 })

    const change = () => {
        person.value.name = 'haha'
    }
    const change2 = () => {
        person2.name = 'hehe'
    }

    const firstName = ref('')
    const lastName = ref('')

    const name = computed(() => {
        return firstName.value + lastName.value
    })

    const components = [ElButton]

    const inc = () => {
        counter.inc()
    }
</script>
<style scoped></style>
