import { PageState } from './interface/pageState'

import { TabPanelName } from 'element-plus'

const homeTag: Tag = {
    name: '首页',
    path: '/',
    closable: false,
}

export const usePageStore = defineStore('pageStore', {
    state(): PageState {
        return {
            tagList: <Tag[]>[homeTag],
            meta: <Meta>{},
        }
    },
    actions: {
        addTag(tag: Tag): void {
            if (this.tagList.every((item) => item.name !== tag.name)) {
                this.tagList.push(tag)
            }
        },
        removeTag(tagName: TabPanelName): void {
            this.tagList.forEach((item, index) => {
                if (item.name === tagName) {
                    this.tagList.splice(index, 1)
                    if (this.meta.title === tagName) {
                        this.meta.title = this.tagList[index - 1].name
                    }
                }
            })
        },
        setMeta(meta: Meta): void {
            this.meta = meta
        },
    },
})
