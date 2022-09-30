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
            <el-button @click="inc">element-plus:{{ counter.number }}</el-button>
            <n-button>naive-ui:{{ counter.number }}</n-button>
        </div>

        <!-- transition -->
        <div>
            <el-button @click="flag = !flag">动画效果</el-button>
        </div>
        <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
        >
            <div class="animate" v-show="flag"></div>
        </transition>

        <!-- transition-group -->
        <div>
            <n-button @click="list.push(list.length + 1)">add</n-button>
            <n-button @click="list.pop()">pop</n-button>
        </div>
        <div class="wrap">
            <transition-group
                enter-active-class="animate__animated animate__bounceIn"
                leave-active-class="animate__animated animate__bounceOut"
            >
                <div class="item" v-for="item in list" :key="item"> {{ item }}</div>
            </transition-group>
        </div>

        <div> pos: {{ x }}, {{ y }} </div>

        <!-- 按需引入, components下的组件 -->
        <login />
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
    // import { ElButton, ElInput } from 'element-plus' 已经按需引入
    import { useMouse } from '@vueuse/core'

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

    const inc = () => {
        counter.inc()
    }

    const flag = ref<boolean>(true)
    const list = ref<number[]>([1, 2, 3, 4, 5, 6])

    const { x, y } = useMouse()
</script>
<style scoped lang="scss">
    div {
        margin: 10px 0;
    }

    .animate {
        width: 200px;
        height: 200px;
        background: linear-gradient(red, yellow, blue);
    }

    .wrap {
        display: flex;
        flex-wrap: wrap;
        word-break: break-all;
        border: 1px solid #ccc;

        .item {
            margin: 10px;
        }
    }
</style>
