<template>
    <swiper :breakpoints="breakpoints" :slidesPerView="4" :loop="true" :spaceBetween="50"
        class="property-4 arrow-gradient arrow-right list-property">
        <swiper-slide v-for="(item, index) in alldata" :key="index">
            <div class="property-box">
                <div class="property-image">
                    <nuxt-link to="javascript:void(0)" class="background bg-size"
                        :style="'background-image:url(' + item.image[0] + ')'">
                        <img :src="item.image[0]" alt="" class="bg-img d-none">
                    </nuxt-link>
                    <div class="overlay-property">
                        <div class="overlay-box">
                            <h4>{{ item.propertyStatus }}</h4>
                            <p class="font-roboto">{{ truncateDescription(item.description) }}</p>
                            <nuxt-link :to="'/property/single-property-8/' + item.sku"
                                @click="getimg(item.image[0])">Прочети повечв</nuxt-link>
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
                                <span class="turgi1" v-if="i.name == 'home'">Turgi1</span>
                                <span class="turgi2" v-else>Turgi2</span>
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

interface Property {
    area: string,
    commisionSum: number,
    construction: string;
    constructionDate: number;
    description: string;
    image: Array<string>;
    ownerPrice: number;
    price: number;
    propertyStatus: string;
    propertyType: string;
    street: string;
    streetNumber: string;
    entranceNumber: string,
    apartmentNumber: string,
    buildingFloorCount: number,
    currencyType: string,
    floor: number
    sku: number;
    _id: string,
    createdAt: string;

}

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
let { data: icon }: FetchResponse = await useFetch("https://sheltos-vue.vercel.app" + '/data/looking-icon.json')
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
    1500: {
        slidesPerView: 3
    },
}
const alldata = ref<Property[]>([]);

const fetchData = async () => {
    const { data, error } = await useFetch('http://localhost:3030/property/last-three/')
    if (error.value) {
        console.error('Error fetching properties:', error.value)
    } else {
        alldata.value = data.value
        console.log('Received properties data:', data.value)
    }
}
onMounted(fetchData)

const truncateDescription = (description: string) => {
    const periodIndex = description.indexOf('.');
    return periodIndex !== -1 ? description.substring(0, periodIndex + 1) : description;
};
console.log("all-data", alldata)
function getimg(value: string) {
    let img = useCookie('img')
    img.value = value
}
</script>