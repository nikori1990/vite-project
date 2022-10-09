<template>
    <el-row class="login-container">
        <el-col :lg="16" :md="12">
            <div class="left">
                <div>
                    <div class="welcome">欢迎光临</div>
                    <div class="text-light-50">《vue3 vite 实战商城后台开发》</div>
                </div>
            </div>
        </el-col>
        <el-col :lg="8" :md="12">
            <div class="right">
                <h2 class="welcome">欢迎回来</h2>
                <div class="flex items-center justify-center my-5 text-gray-300 space-x-2">
                    <span class="h-[1px] w-16 bg-gray-200"></span>
                    <span>账号密码登录</span>
                    <span class="h-[1px] w-16 bg-gray-200"></span>
                </div>
                <el-form :model="form" class="w-[250px]" ref="formRef" :rules="rules">
                    <el-form-item prop="username">
                        <el-input v-model="form.username" placeholder="请输入用户名">
                            <template #prefix>
                                <el-icon><i-ep-user /></el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            type="password"
                            show-password
                            v-model="form.password"
                            placeholder="请输入密码">
                            <template #prefix>
                                <el-icon><i-ep-lock /></el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="w-[250px]" type="primary" @click="onSubmit(formRef)">
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
    </el-row>
</template>
<route>
    {
        meta: {
            layout: 'login'
        }
    }
</route>
<script setup lang="ts">
    import type { FormInstance, FormRules } from 'element-plus'
    import { login } from '@/api/user'
    import { useUserStore } from '@/store/userStore'

    const form: LoginData = reactive({
        username: 'admin',
        password: '123456',
    })

    const formRef = ref<FormInstance>()

    const rules = reactive<FormRules>({
        username: [{ required: true, message: 'Please input user name', trigger: 'blur' }],
        password: [
            {
                required: true,
                message: 'Please input password',
                trigger: 'blur',
            },
        ],
    })

    // const { data, error, run } = useRequest(login, {
    //     manual: true,
    // })

    const userStore = useUserStore()
    const router = useRouter()

    if (userStore.token !== '') {
        router.push('/')
    }

    const onSubmit = async (formEl: FormInstance | undefined) => {
        if (!formEl) {
            return
        }
        await formEl.validate((valid, fields) => {
            if (valid) {
                // run(form)
                login(form).then((res: any) => {
                    console.log('res :>> ', res)
                    if (res.code === 200 && res.msg === 'SUCCESS') {
                        const { token } = res.data
                        console.log('token :>> ', token)
                        userStore.setToken(token)
                    }
                })
            } else {
                console.log('error submit!', fields)
            }
        })
    }
</script>
<style lang="scss" scoped>
    .login-container {
        @apply min-h-screen bg-indigo-500;

        .left {
            @apply h-full flex items-center justify-center;

            .welcome {
                @apply text-5xl text-light-50 font-bold mb-4;
            }
        }

        .right {
            @apply h-full bg-light-50 flex items-center justify-center flex-col;

            .welcome {
                @apply text-indigo-500 text-3xl font-bold;
            }
        }
    }
</style>
