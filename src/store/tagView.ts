import { tagsViewState } from './interface/tagView'

import { TabPanelName } from 'element-plus'
import { RouteMeta } from 'vue-router'

export const useTagViewStore = defineStore('tagView', {
    state(): tagsViewState {
        return {
            tag: '',
            tagList: [],
            meta: {},
        }
    },
    actions: {
        setTag(tagName: string) {
            this.tag = tagName
        },
        addTag(tag: Tag) {
            if (this.tagList.every((item) => item.name !== tag.name)) {
                this.tagList.push(tag)
            }
            this.tag = tag.name
        },
        removeTag(tagName: TabPanelName) {
            this.tagList.forEach((item, index) => {
                if (item.name === tagName) {
                    this.tagList.splice(index, 1)
                    if (this.tag === tagName) {
                        if (index > 0) {
                            this.tag = this.tagList[index - 1].name
                        } else if (this.tagList.length > 0) {
                            this.tag = this.tagList[0].name
                        } else {
                            this.tag = ''
                        }
                    }
                }
            })
        },
        setMeta(meta: RouteMeta) {
            this.meta = meta
        },
    },
})
