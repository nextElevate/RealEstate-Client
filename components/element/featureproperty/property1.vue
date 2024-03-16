<template>
  <swiper
    class="feature-1 arrow-light"
    :effect="'fade'"
    :loop="true"
    navigation
    :modules="[Navigation, EffectFade]"
    :slides-per-view="1"
    dir="ltr"
  >
    <swiper-slide v-for="item in props.data" :key="item">
      <div class="feature-wrapper">
        <div class="row">
          <div class="col-xl-4 col-lg-3">
            <div class="feature-left">
              <div class="property-details">
                <span class="font-roboto">{{item.city}}-{{ item.location }}</span>
                <nuxt-link
                  :to="'/property/single-property-8/' + item.id"
                  @click="getimg(item.img)"
                >
                  <h3 class="d-flex">
                    {{ item.propertyType }}
                    <span
                      ><span class="label label-gradient color-6"
                        >VIP</span
                      ></span
                    >
                  </h3>
                </nuxt-link>
                <h6 class="color-6">
                  {{ item.price
                  }}{{ item.currencyType === "Евро" ? "€" : "BGN" }}
                </h6>
                <p class="font-roboto">
                  {{ truncateDescription(item.description) }}
                </p>
                <ul>
                  <li v-for="(option, index) in images" :key="index">
                        <Icon :name="option.iconName" class="img-fluid vip-icon" />
                        {{ option.name }} : {{ item[option.key] }}
                  </li>

                </ul>
                <nuxt-link to="/">
                  <span class="round-half color-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-heart"
                    >
                      <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                      ></path>
                    </svg>
                  </span>
                </nuxt-link>
                <div class="property-btn">
                  <nuxt-link
                    :to="'/property/single-property-8/' + item.sku"
                    class="btn btn-dashed btn-pill color-6"
                    @click="getimg(item.image[0])"
                    tabindex="0"
                    >{{ "Подробности" }}</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8 col-lg-9 order-md">
            <div
              class="feature-image back-image"
              :style="'background-image: url(' + item.image[0] + ')'"
            >
              <img :src="item.image[0]" alt="" class="bg-img d-none" />
              <h4>{{ item.type }}</h4>
              <span class="box-color"></span>
              <span class="signature">
                <img src="/image/signature/1.png" alt="" />
              </span>
              <span class="label label-white label-lg color-6">{{
                item.imgLabel
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts" setup>
import { Navigation, EffectFade } from 'swiper';
import type {featureoption} from '~/static/data/types/fetureoption';
import type { Property} from '~/interfaces/Properties';


interface MyProps {
    data: Property[]
}
let props = defineProps<MyProps>()

const images:  featureoption[] = [
 { iconName: 'bi:building', name: "Тип", key: "construction"},
 { iconName: "carbon:construction", name: "Строителство", key: "constructionDate"},
 { iconName: "material-symbols:square-foot-sharp", name: "Кв.м.", key: "area"},
]


function getimg(value: string) {
    let img = useCookie('img')
    img.value = value
}

function truncateDescription(description: string) {
    if (description.length <= 400) {
    return description;
  } else {
    let truncatedDesc = description.slice(0, 400);
    let lastPeriodIndex = truncatedDesc.lastIndexOf('.');
    if (lastPeriodIndex !== -1) {
      return truncatedDesc.slice(0, lastPeriodIndex + 1) + '...';
    } else {
      return truncatedDesc + '...';
    }
  }
}
</script>

<style scoped>
.back-image {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.label-gold {
  background-color: rgb(120, 6, 234);
  color: white;
  letter-spacing: 1px;
}

.vip-icon {
    height: 17px;
width: 17px;
}
</style>
