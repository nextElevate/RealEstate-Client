<template>
    <section class="feature-section banner-4">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title-1 text-white">
                        <span class="label label-gradient color-6">{{ 'Нашите' }}</span>
                        <h2>{{ 'Специални предложения' }}</h2>
                        <hr />
                    </div>
                    <ElementFeaturepropertyProperty1 :data="featureproduct" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import type {product1} from '~/static/data/types/featureproperty'
import type { Property} from '~/interfaces/Properties';

// interface FetchResponse {
//     data: {
//         value: {
//             FeaturedProperty: product1[]
//         }
//     }
// }
// declare function useFetch(url: string): Promise<FetchResponse>
// let { data } = await useFetch("https://sheltos-vue.vercel.app" + '/data/property.json')
// let featureproduct = <product1[]>data.value.FeaturedProperty
const featureproduct = ref<Property | []>([])

const useFetchData = async (url: string) => {
    const { data, error, refresh } = await useFetch(url);
    if (error.value) {
        console.error('Error fetching properties:', error.value)
    } 
    if(!data.value){
       await refresh()
    }   
    return data.value as Property
}

featureproduct.value = await useFetchData('http://localhost:3030/property/vip-properties')
console.log('feature product', featureproduct.value)

onBeforeMount (async () => {
})

</script>

<style lang="scss" scoped></style>