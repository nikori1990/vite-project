import { RouteMeta } from "vue-router"

interface Meta extends RouteMeta {
    title: string
    keepAlive: boolean
    breadcrumbList: Breadcrumb[]
}
