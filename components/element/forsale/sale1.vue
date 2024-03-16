<template>
    <swiper
     :breakpoints="breakpoints" effect="fade" :modules="modules"  navigation :pagination="true" :slidesPerView="4" :loop="true" :spaceBetween="50"
        class="property-4 arrow-gradient  arrow-right list-property">
        <swiper-slide v-for="(item, index) in alldata"   :key="index">
            <div class="property-box">
                <div class="property-image">
                    <nuxt-link to="javascript:void(0)" class="background bg-size"
                        :style="'background-image:url(' + item.image[0] + ')'">
                        <img :src="item.image[0]" alt="" class="bg-img d-none">
                    </nuxt-link>
                    <div class="overlay-property">
                        <div class="overlay-box">
                            <h4>{{ item.propertyStatus }}</h4>
                            <p class="font-roboto truncate">{{ item.description }}</p>
                            <nuxt-link :to="'/property/single-property-8/' + item.sku"
                                @click="item.image[0]">Прочети повечв</nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <span class="label label-gradient label-lg color-4"> {{ item.currencyType === 'Евро' ? '€' : 'BGN'
                        }}{{ item.price }}</span>
                </div>
                <div class="property-details">
                    <ul class="icon-property">
                        <li v-for="(i, index) in Icons.slice(0, 2)" :key="index">
                            <div class="d-flex">
                                <div class="property-icon color-4">
                                    <svg class="property-svg">
                                        <use :xlink:href="i.icon"></use>
                                    </svg>
                                </div>
                                <span  v-if="i.name == 'home'">{{ item.construction  }}</span>
                                <span  v-else>{{  item.area }}</span>
                            </div>
                        </li>
                    </ul>
                    <ul class="icon-property mb-0">
                        <li v-for="(i, index) in Icons.slice(2, 4)" :key="index">
                            <div class="d-flex">
                                <div class="property-icon color-4">
                                    <svg class="property-svg">
                                        <use :xlink:href="i.icon"></use>
                                    </svg>
                                </div>
                                <span v-if="i.name == 'rooms'">{{ item.propertyType }} </span>
                                <span v-else>{{ item.constructionDate }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup lang="ts">
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Property} from '~/interfaces/Properties';

let modules = [Navigation, Pagination]

interface FetchResponse {
    data: {
        value: {
            classic: Icon[]
        }
    }
}
interface Icon {
    icon: string;
    name: string;
}

// TODO remove request and import it directly.If the data object is not used then remove it also
let { data: icon }: FetchResponse = await useFetch("https://sheltos-vue.vercel.app" + '/data/looking-icon.json')
console.log('icon value', icon.value)
let Icons: Icon[] = icon.value.classic

let breakpoints = {
    0: {
        slidesPerView: 1
    },
    992: {
        slidesPerView: 2
    },
    1200: {
        slidesPerView: 3
    },
  
}
const alldata = ref<Property[]>([]);

const fetchData = async () => {
    const { data, error, refresh } = await useFetch('http://localhost:3030/property/last-three/')
    if (error.value) {
        console.error('Error fetching properties:', error.value)
    } 
    if(!data.value){
       await refresh()
    }   
    alldata.value = data.value as Property[]
    console.log('Received properties data:', data.value)
}

onMounted(() => {
    fetchData()
})

</script>
<style scoped>
.truncate{
  width: 100%;
  line-height: 1.2em;
  height: auto;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>