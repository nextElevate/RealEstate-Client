<template>
    <section class="single-property mt-8 pt-0">
        <div class="container">
            <div class="row ratio_55">
                <div class="col-xl-9 col-lg-8">
                    <div class="description-section tab-description">
                        <div class="description-detailS">
                            <PropertySingle10ModelForm />
                            <div class="desc-box">
                                <ElementSinglepropertytabs />
                            </div>
                            <PropertySingle10Singlereview />
                        </div>
                        <PropertySingle10RelatedProperty />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <vue-easy-lightbox scrollDisabled escDisabled moveDisabled :visible="visible" :imgs="imgs" :index="index"
        @hide="handleHide"></vue-easy-lightbox>
</template>

<script setup lang="ts">
let visible = ref<boolean>(false)
let index = ref<number>(0)
let imgs = ref<string[]>([])

function handleHide() {
    visible.value = false
}
</script>

<style scoped>
.mt-0 {
    margin-top: 100px
}
</style>