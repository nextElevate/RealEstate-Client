<template>
    <swiper :breakpoints="breakpoints" :loop="true" :slidesPerView="2" :spaceBetween="50" navigation :modules="setting"
        class="about-1 about-wrap color-6">
        <swiper-slide style="width:100%; display:inline-block" v-for="item in AgentData" :key="item">
            <div class="about-content row">
                <div class="col-xl-6">
                    <div class="about-image">
                        <img :src="item.img" class="img-fluid" alt="">
                        <div class="about-overlay"></div>
                        <div class="overlay-content">
                            <ul>
                                <li v-for="(icon , index) in AllIcons" :key="index">
                                    <nuxt-link :to="icon.link">
                                        <img :src="icon.src" alt="">
                                    </nuxt-link>
                                </li>
                            </ul>
                            <span>{{ 'Connect' }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="our-details">
                        <nuxt-link to="/agent/agent-profile">
                            <h6 class="d-flex">{{ item.name }}<span class="label-heart color-6 ms-2">
                                    <Icon name="mdi:cards-heart-outline" />
                                </span></h6>
                        </nuxt-link>
                        <h3>{{ item.work }}</h3>
                        <span class="font-roboto">
                            <Icon name="mdi:cards-heart-outline" class="me-1" />
                            {{ item.email }}
                        </span>
                        <p class="font-robot">{{ item.detail }}</p>
                        <nuxt-link to="/agent/agent-profile" class="btn btn-gradient btn-pill color-6 mt-2">
                            <Icon name="mdi:eye" />
                            {{ 'view Portfolio' }}
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script lang="ts" setup>
import { Navigation } from 'swiper'
interface agent {
    name: string;
    img: string
    work: string
    email: string
    detail: string
}
interface Icons {
    src: string;
    link: string;
}
interface FetchResponse {
    data: {
        value: {
            MeetOurAgent: agent[];
            icons: Icons[];
        }
    }
}
declare function useFetch(url: string): Promise<FetchResponse>;
let setting = [Navigation]
let { data } = await useFetch("https://sheltos-vue.vercel.app" + '/data/clientAgent.json')
let AgentData: agent[] = data.value.MeetOurAgent
let { data: icons } = await useFetch("https://sheltos-vue.vercel.app" + '/data/about.json')
let AllIcons: Icons[] = icons.value.icons
let breakpoints = {
    320: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
}
</script>

<style lang="scss" scoped></style>