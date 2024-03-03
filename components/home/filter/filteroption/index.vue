<template>
    <div class="row gx-3">
        <HomeFilterFilteroptionStatus :data="data" label="Property Status" />
        <HomeFilterFilteroptionType label="Property Type" :data="data" />
        <HomeFilterFilteroptionRooms label="Rooms" :data="data" />
        <HomeFilterFilteroptionBed label="Bed" :data="data" />
        <HomeFilterFilteroptionBath label="Bath" :data="data" />
        <HomeFilterFilteroptionAgencies label="Agencies" :data="data" />
        <HomeFilterFilteroptionPrice label="Price" />
        <HomeFilterFilteroptionArea label="Area" />
        <div class="col-lg-12">
            <nuxt-link to="/listing/grid_view/2_grid_view/left-sidebar" class="text-white btn btn-gradient color-6 mt-3 ">{{
                'Search' }}</nuxt-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useFiltersStore } from '~/store/filter.js'

const data = useFiltersStore().data

</script>

<style lang="scss" scoped></style>