<template>
    <section class="property-section slick-between slick-shadow pt-0 search-tab-items">
        <div class="container">
            <div class="row ratio_landscape">
                <div class="col">
                    <div class="title-3 text-start">
                        <h2>{{ title }}</h2>
                        <p>{{ details }}</p>
                    </div>
                    <div class="listing-hover-property row">
                        <ElementForsaleSale1 :data="Letest_For_Sell" color=""/>
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
let title: string = 'Latest Property'
let details: string = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening.'
let { data } = await useFetch(useurl + '/data/property.json')
let Letest_For_Sell = <propertydata[]>data.value.LatestForSalePropertyData
</script>

<style lang="scss" scoped></style>