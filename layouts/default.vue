<template>
    <div v-if="loader" class="loader-wrapper">
        <div class="row loader-text">
            <div class="col-12">
                <img src="/image/loader/loader.gif" class="img-fluid" alt="" />
            </div>
            <div class="col-12">
                <div>
                    <h3 class="mb-0">Please wait Real estate Template loading...</h3>
                </div>
            </div>
        </div>
    </div>
    <div>
        <CommonHeader :isFrontPage="isFrontPage" />
        <slot />
        <CommonFooter />

        <!-- <LayoutCommonFootersFooter1 /> -->
    </div>
</template>

<script lang="ts" setup>
let loader = ref<boolean>(true);
const route = useRoute()
let isFrontPage = ref<boolean>(false)
onMounted(() => {
    setTimeout(() => {
        loader.value = false;
    }, 100);
})

watchEffect(() => {
    isFrontPage.value = route.path === '/';
});
</script>

<style lang="scss" scoped></style>