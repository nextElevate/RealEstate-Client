<template>
    <div class="tab-pane fade show active about page-section" id="about">
        <h4 class="content-title">Property Detailssss
            <nuxt-link
                to="https://www.google.com/maps/place/New+York,+NY,+USA/@40.697488,-73.979681,8z/data=!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en"
                target="_blank">
                <i class="fa fa-map-marker-alt"></i> view on map</nuxt-link>
        </h4>
        <div class="row">
            <div class="col-md-6 col-xl-4">
                <ul class="property-list-details">
                    <li v-for="(item, index) in property" :key="index"><span>{{ item.createdAt }} :</span> {{
                        item.value }}
                    </li>


                </ul>
            </div>
            {{ property.description }}
            <div class="col-md-6 col-xl-4">
                <ul class="property-list-details">
                    <li v-for="(item, index) in Details_2" :key="index"><span>{{ item.name }} :</span> {{ item.value }}
                    </li>
                </ul>
            </div>
            <div class="col-md-6 col-xl-4">
                <ul class="property-list-details">
                    <li v-for="(item, index) in Details_3" :key="index"><span>{{ item.name }} :</span> {{ item.value }}
                    </li>
                </ul>
            </div>
        </div>
        <h4 class="content-title mt-4">Attachments</h4>
        <nuxt-link to="javascript:void(0)" class="attach-file"><i class="far fa-file-pdf"></i>Demo Property Document
        </nuxt-link>
        <h4 class="mt-4">Property Brief</h4>
        <div class="row">
            <div class="col-sm-4">
                <p>Residences can be classified by and how they are connected to neighbouring residences and land.
                    Different types of housing tenure can be used for the same physical type.</p>
            </div>
            <div class="col-sm-4">
                <p>connected residences might be owned by a single entity and leased out, or owned separately
                    with an agreement covering the relationship between units and common.</p>
            </div>
            <div class="col-sm-4">
                <p>they are connected to neighbouring residences and land.
                    Different types of housing tenure can be used for the same physical type.</p>
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



const property = ref<any>(null);;

const route = useRoute();
const id = route.params.id;
console.log(id + '111111')
const fetchData = async () => {
    const { data, error, refresh } = await useFetch(`http://localhost:3030/property/properties/${id}`);
    if (error.value) {
        console.error('Error fetching properties:', error.value);
    }
    if (!data.value) {
        await refresh();
    }
    property.value = data.value
    console.log(property.value)
    console.log('Received properties data:', data.value);
    console.log(property.value, "dadsadasdasdas")


}

onMounted(() => {
    fetchData();
})
</script>

<style scoped></style>