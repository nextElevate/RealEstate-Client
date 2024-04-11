<template>
  <section
    v-if="property"
    class="without-top property-main small-section marginpb"
  >
    <div class="single-property-section mt-5">
      <div class="container">
        <div class="single-title">
          <div class="left-single">
            <div class="d-flex">
              <h2 class="mb-0">
                {{ property.propertyType }} в {{ property.city }}
              </h2>
              <span
                ><span
                  class="label label-shadow ms-2"
                  v-for="(item, index) in property.label"
                  :key="index"
                  >{{ item.name }}</span
                ></span
              >
            </div>
            <p class="mt-1">{{ property.location }} , {{ property.city }}</p>
            <div class="share-buttons">
              <div class="d-inline-block">
                <nuxt-link
                  to="javascript:void(0)"
                  class="btn btn-gradient btn-pill color-2"
                  ><i class="far fa-share-square"></i>
                  Сподели
                </nuxt-link>
                <div class="share-hover social-icons">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" class="icon-facebook">
                        <Icon name="icon-park:facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" class="icon-twitter">
                        <Icon name="icon-park:twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        class="icon-instagram"
                      >
                        <Icon name="skill-icons:instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="javascript:void(0)"
                class="btn btn-dashed btn-pill color-2 ms-md-2 ms-1 save-btn"
                ><i class="far fa-heart"></i> Запази</a
              >
              <a
                href="javascript:void(0)"
                class="btn btn-dashed btn-pill color-2 ms-md-2 ms-1"
                @click="getprint()"
              >
                <Icon name="mdi:printer" />
                Принтирай
              </a>
            </div>
          </div>
          <div class="right-single">
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <h2 class="price">
              {{ property.currencyType === "Евро" ? "€" : "BGN"
              }}{{ property.price }}
            </h2>
            <div class="feature-label">
              <span class="btn btn-dashed color-2 btn-pill">Wi-fi</span>
              <span class="btn btn-dashed color-2 ms-1 btn-pill"
                >Swimming Pool</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Property } from "~/interfaces/Properties";

function getprint() {
  window.print();
}

const property = ref<Property | null>(null);

const route = useRoute();
const id = route.params.id;
console.log(id + "111111");
const fetchData = async () => {
  const { data, error, refresh } = await useFetch(
    `http://localhost:3030/property/properties/${id}`
  );
  if (error.value) {
    console.error("Error fetching properties:", error.value);
  }
  if (!data.value) {
    await refresh();
  }
  property.value = data.value as Property;
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped></style>
