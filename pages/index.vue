<template>
  <Head>
    <Title>Nextelevate search with Slider home page</Title>
  </Head>
  <HomeHeroslider />
  <HomeHerosliderSale />
  <HomeHerosliderFeatureproperty />
  <HomeHerosliderRent />
  <HomeHerosliderFindproperty />
  <HomeHerosliderAgent />
  <HomeHerosliderHappyclient />
</template>

<script lang="ts" setup>
import { usecustomizerStore } from "~/store/costomizer";
let themes = ref({
  theme1: "--theme-default8",
  theme2: "--theme-default9",
});
usecustomizerStore().getproperty(themes.value);
</script>

<style lang="scss" scoped></style>
