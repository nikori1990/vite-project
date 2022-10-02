<template>
    <svg aria-hidden="true" class="svg-icon" :style="{ 'font-size': `${size}px` }">
        <use :xlink:href="symbolId" :fill="color" />
    </svg>
</template>

<script setup lang="ts">
    interface Props {
        iconClass: string
        color?: string
        size?: string
    }

    const props = withDefaults(defineProps<Props>(), { size: '16' })
    const symbolId = computed(() => `#icon-${props.iconClass}`)
</script>
<style scope>
    .svg-icon {
        width: 1em;
        height: 1em;
        overflow: hidden;
        vertical-align: -0.15em;
        fill: currentcolor;
    }
</style>
