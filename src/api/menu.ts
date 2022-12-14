import http from '@/api/http'

export function getMenuList() {
    return http.get<Menu[]>('/api/v1/menus')
}
