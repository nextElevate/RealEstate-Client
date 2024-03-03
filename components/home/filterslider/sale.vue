<template>
    <section class="property-section slick-between slick-shadow property-color-6">
        <div class="container">
            <div class="row ratio_landscape">
                <div class="col">
                    <div class="title-1 color-6">
                        <span class="label label-gradient color-6">{{ 'Sale' }}</span>
                        <h2>{{ 'Latest For Sale' }}</h2>
                        <hr />
                    </div>
                    <div class="listing-hover-property row">
                        <ElementForsaleSale1 :data="letestforsale" color=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useurl } from '~/composable/apiurl'

interface propertydata {
  title:string;
  propertyStatus:string;
  label:string[];
  price: string;
  bed: number;
  bath: number;
  balcony: number;
  area: number;
  id: string;
  img: string;
  date: string;
}
interface FetchResponse {
    data: {
        value: {
            LatestForSalePropertyData: propertydata[]
        }
    }
}
declare function useFetch(url: string): Promise<FetchResponse>
let { data } = await useFetch(useurl + '/data/property.json')
let letestforsale = <propertydata[]>data.value.LatestForSalePropertyData
</script>

<style lang="scss" scoped></style>