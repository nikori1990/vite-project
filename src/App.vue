<template>
    <div>
        {{ person }}
    </div>
    <div>
        {{ person2 }}
    </div>
    <button @click="change">修改</button>
    <button @click="change2">修改2</button>

    <div>
        <input v-model="firstName" type="text" />
        <input v-model="lastName" type="text" />

        <div>
            {{ name }}
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref, reactive, computed } from 'vue'

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
</script>
<style scoped></style>
