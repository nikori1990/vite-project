<template>
    <!-- <ais-instant-search :search-client="searchClient" index-name="demo_ecommerce">
        <ais-search-box />
        <ais-hits>
            <template #item="{ item }">
                <h2>{{ item.name }}</h2>
            </template>
        </ais-hits>
    </ais-instant-search> -->
    <router-view />
</template>

<script>
    import algoliasearch from 'algoliasearch/lite'
    import 'instantsearch.css/themes/satellite-min.css'

    export default {
        data() {
            return {
                searchClient: algoliasearch('B1G2GM9NG0', 'aadef574be1f9252bb48d4ea09b5cfe5'),
            }
        },
    }
</script>

<style>
    body {
        /* padding: 1em; */

        /* font-family: sans-serif; */
    }
</style>
