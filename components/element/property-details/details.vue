<template>
    <div class="property-details">
        <span class="font-roboto">{{ item.city }}</span>
        <nuxt-link :to="'/property/single-property-6/' + item.id">
            <h3>{{ item.location }}</h3>
        </nuxt-link>
        <h6>&euro; {{ item.price }}*</h6>
        <p class="font-roboto">{{ truncateDescription(item.description) }}</p>
        
        <ul>
            <li><img src="/image/svg/icon/double-bed.svg" class="img-fluid" alt="">{{ 'Bed' }} : {{ item.construction }}</li>
            <li><img src="/image/svg/icon/bathroom.svg" class="img-fluid" alt="">{{ 'Baths' }} : {{ item.propertyType }}</li>
            <li><img src="/image/svg/icon/square-ruler-tool.svg" class="img-fluid ruler-tool" alt="">{{ 'Sq Ft' }} : {{
                item.area }}</li>
        </ul>
        <div class="property-btn d-flex">
            <span>{{ formatDate(item.createdAt) }}</span>
            <nuxt-link :to="'/property/single-property-6/' + item.id" class="btn btn-dashed btn-pill color-2" :class="color"
                @click="getimges(item.img)">Details</nuxt-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import type {rent} from '~/static/data/types/letestforrent'
interface MyProps {
    item: rent;
    color: string;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  return date.toLocaleString('en-US', options);
}


function truncateDescription(description: string) {
    if (description.length <= 300) {
    return description;
  } else {
    let truncatedDesc = description.slice(0, 300);
    let lastPeriodIndex = truncatedDesc.lastIndexOf('.');
    if (lastPeriodIndex !== -1) {
      return truncatedDesc.slice(0, lastPeriodIndex + 1) + '...';
    } else {
      return truncatedDesc + '...';
    }
  }
}
let props = defineProps<MyProps>()
function getimges(value: string[]) {
    let images = useCookie<string[]>('images')
    images.value = value
}
</script>

<style scoped></style>