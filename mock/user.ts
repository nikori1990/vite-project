import { MockMethod } from 'vite-plugin-mock'
import { success, error } from './helper'
import users from './data/user'

export default [
    {
        url: '/api/user/login',
        method: 'post',
        response: ({ body }: { body: any }) => {
            const { username, password } = body
            const checkUser = users.find((item) => item.username === username)
            if (!checkUser) {
                return error('用户名不存在')
            }
            if (checkUser.password !== password) {
                return error('密码不正确')
            }
            return success({ token: checkUser.token }, { msg: 'SUCCESS' })
        },
    },
] as MockMethod[]
