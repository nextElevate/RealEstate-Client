<template>
    <header :class="headerClass">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="menu">
                        <div class="brand-logo">
                            <nuxt-link to="/">
                                <img src="/image/logo/6.png" alt="" class="img-fluid" />
                            </nuxt-link>
                        </div>
                        <CommonHeaderElement />
                        <CommonHeaderElementMenuright />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
const props = defineProps({
    isFrontPage: Boolean,
});

const headerClass = computed(() => {
    console.log(props.isFrontPage + "dadadadadadada");
    return props.isFrontPage ? "front-page" : "other-pages";
});
</script>

<style lang="scss" scoped>
.other-pages {
    background-color: white;

    box-shadow: 3.346px 3.716px 22.5px rgba(0, 0, 0, 0.07);

    :deep(.test2) {
        color: black;
    }

    :deep(.test) {
        color: black;
    }
}
</style>
