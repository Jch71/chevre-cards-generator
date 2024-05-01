
<template>
  <div class="carousel-container">
  <carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
    <slide v-for="slide in 9" :key="slide">
      <div class="carousel__item"> <img :src="`images/${slide}.png`" alt=""></div>
    </slide>
  </carousel>

  <carousel
    id="thumbnails"
    :items-to-show="4"
    :wrap-around="true"
    v-model="currentSlide"
    ref="carousel"
  >
    <slide v-for="slide in 9" :key="slide">
      <div class="carousel__item" @click="slideTo(slide - 1)">
        
        <img :src="`images/${slide}.png`" alt="">
      
      </div>
    </slide>
  </carousel>
  </div>
 
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue';

const currentSlide = ref<number>(0);

function slideTo(slide : number) {
  currentSlide.value = slide;
}

</script>

<style scoped>
.carousel-container {
  max-height: 500px;
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.carousel {
  width: 30%;
}
.carousel__slide {
  aspect-ratio: 66/88;
}
.carousel__item {
  width: 100%;
  height: 100%;
  aspect-ratio: 63/88;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}


.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.85);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.85);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.90);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.90);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}

</style>
