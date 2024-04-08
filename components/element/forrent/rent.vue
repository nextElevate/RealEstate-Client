<template>
    <div class="property-2 row column-space color-6">
        <div class="col-xl-4 col-md-6 wow fadeInUp" v-for="(item, index) in rentdata" :key="index">
            <div class="property-box">
                <div class="property-image blue">
                    <swiper :loop="true" :space-between="0" :modules="setting" class="property-slider color-6"
                        :pagination="{ clickable: true }" navigation>
                        <swiper-slide v-for="img in item.image" :key="img">
                            <a href="javascript:void(0)" class="bg-size background"
                                :style="'background-image: url(' + img + ');'">
                                <img :src="img" class="bg-img d-none" alt="" />
                            </a>
                        </swiper-slide>
                    </swiper>
                    <div class="labels-left" v-if="item.label">
                        <div v-if="item.label[0]?.vip === true">
                            <span class="label label-dark">VIP</span>
                        </div>
                        <div v-if="item.label[1]?.isNew === true">
                            <span class="label label-success">НОВА ОБЯВА</span>
                        </div>
                    </div>
                    <div class="seen-data">
                        <Icon name="material-symbols:android-camera-outline" />
                        <span>{{ item.image.length }}</span>
                    </div>
                    <div class="overlay-property-box">
                        <nuxt-link to="javascript:void(0)" class="effect-round" data-bs-toggle="tooltip"
                            data-bs-placement="left" title="compare" @click="compare(item)">
                            <Icon name="material-symbols:shuffle" />
                        </nuxt-link>
                        <nuxt-link to="javascript:void(0)" class="effect-round like added" data-bs-toggle="tooltip"
                            data-bs-placement="left" title="wishlist" @click="wishlist(item)">
                            <Icon
                                :name="fill?.find((ele) => ele._id == item._id) ? 'ph:heart-straight-fill' : 'ph:heart-straight-thin'"
                                class="text-black" />
                        </nuxt-link>
                    </div>
                </div>
                <ElementPropertyDetails :item="item" color="color-6" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSidebarfilterStore } from '~/store/sidebarfilter'
import { Navigation, Pagination } from 'swiper';
import type { rent } from '~/static/data/types/letestforrent'
interface FetchResponse {
    data: {
        value: {
            LatestPropertyData: rent[]
        }
    }
}
declare function useFetch(url: string): Promise<FetchResponse>;
let fill = ref<rent[]>([])
let setting = [Navigation, Pagination]
let store = useSidebarfilterStore();
let compareproduct = ref<rent[]>([])
let favproduct = ref<rent[]>([])
function compare(value: rent) {
    compareproduct.value.push(value)
    store.compare(compareproduct.value)
}
function wishlist(value: rent) {
    favproduct.value.push(value)
    store.wishlist(favproduct.value)

}

const { data: rent } = await useFetch('http://localhost:3030/property/last-rent')


const rentdata = <rent[]>rent;

onMounted(() => {
    if (!process.client) return;

    const storedData = localStorage.getItem('wishlist');
    if (storedData) {
        try {
            const parsedData: rent[] = JSON.parse(storedData);
            fill.value = parsedData;
        } catch (error) {
            console.error('Error parsing wishlist data:', error);
        }
    }
})
</script>
