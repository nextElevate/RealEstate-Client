<template>
    <div v-if="property" class="tab-pane fade show active about page-section" id="about">
        <h4 class="content-title">Детайли
            <nuxt-link
                to="https://www.google.com/maps/place/New+York,+NY,+USA/@40.697488,-73.979681,8z/data=!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en"
                target="_blank">
                <i class="fa fa-map-marker-alt"></i> Виж на картата</nuxt-link>
        </h4>
        <!-- <div class="row">
            <div class="col-md-6 col-xl-4">
                <ul class="property-list-details">
                    <li v-for="(item, index) in property" :key="index"><span></span>
                    </li>

                </ul>
            </div>
      
            <div class="col-md-6 col-xl-4">
                <ul class="property-list-details">
                    <li v-for="(item, index) in Details_3" :key="index"><span>{{ item.name }} :</span> {{ item.value }}
                    </li>
                </ul>
            </div>
        </div> -->

        <div class="col-md-6 col-xl-4">
            <ul class="property-list-details">
                <li> <span> Статус :</span>{{ property.propertyStatus }}
                </li>
            </ul>
        </div>
        <h4 class="content-title mt-4">Файлове</h4>
        <nuxt-link to="javascript:void(0)" class="attach-file"><i class="far fa-file-pdf"></i>Demo Property Document
        </nuxt-link>
        <h4 class="mt-4">Описание</h4>
        <div class="row">
            <div class="col-sm-10">
                <p>{{ property.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { Property } from '~/interfaces/Properties';
interface ListDetails {
    name: string,
    value: string
}

interface FetchResponse {
    data: {
        value: {
            ul1: ListDetails[];
            ul2: ListDetails[];
            ul3: ListDetails[];
        };
    }
}



const property = ref<Property | null>(null);;

const route = useRoute();
const id = route.params.id;
const fetchData = async () => {
    const { data, error, refresh } = await useFetch(`http://localhost:3030/property/properties/${id}`);
    if (error.value) {
        console.error('Error fetching properties:', error.value);
    }
    if (!data.value) {
        await refresh();
    }



    property.value = data.value as Property

    if (property.value.propertyStatus == "rent") {
        property.value.propertyStatus = "Под Наем"
    } else {
        property.value.propertyStatus == "Продава"
    }
}



onMounted(() => {
    fetchData();
})
</script>

<style scoped></style>