import { PageState } from './interface/pageState'

import { TabPanelName } from 'element-plus'

export const usePageStore = defineStore('pageStore', {
    state(): PageState {
        return {
            tagList: <Tag[]>[],
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
                        if (index > 0) {
                            this.meta.title = this.tagList[index - 1].name
                        } else if (this.tagList.length > 0) {
                            this.meta.title = this.tagList[0].name
                        } else {
                            this.meta.title = ''
                        }
                    }
                }
            })
        },
        setMeta(meta: Meta): void {
            this.meta = meta
        },
    },
})
