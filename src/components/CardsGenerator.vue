
<template>
  <div class="input-title-container">
    <label for="input-title">Titre</label>
    <input type="text" name="title" id="input-title" v-model="title">
  </div>
  <div class="carousel-container">
    <carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
      <slide v-for="slide in 9" :key="slide">
        <div class="carousel__item">
          <div class="card-title">
            {{ title }}
          </div>
          <img :src="`images/${slide}.png`" alt="">
          <span class="card-capacity">
            {{ content }}
          </span>
          <div class="card-type">
            {{ type }}
          </div>
        </div>
      </slide>
    </carousel>
    
    <carousel
    id="thumbnails"
    :items-to-show="2.5"
    :wrap-around="false"
    v-model="currentSlide"
    ref="carousel"
    >
    <slide v-for="slide in 3" :key="slide">
      <div class="carousel__item" @click="slideTo(slide - 1)">
        
        <img :src="`images/${slide}.png`" alt="">
        
      </div>
    </slide>
  </carousel>
</div>
<div class="input-content-container">
  <label for="input-content">Contenu</label>
  <input type="text" name="content" id="input-content" v-model="content">
</div>

<div class="input-content-container">
  <label for="input-type">Type</label>
  <input type="text" name="type" id="input-type" v-model="type">
</div>  
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue';

const currentSlide = ref<number>(0);
const title = ref<string>('');
const content = ref<string>('');
const type = ref<string>('');

function slideTo(slide : number) {
  currentSlide.value = slide;
}

</script>

<style scoped>
.input-title-container{
  text-align: center;
  margin: 10px 0;
  input {
    height: 30px;
    border-radius: 5px;
  }
}

.input-content-container{
  text-align: center;
  margin: 10px 0;
  input {
    height: 30px;
    border-radius: 5px;
  }
}
.carousel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.carousel {
  width: 30%;
  min-width: 300px;
}
.carousel__slide {
  aspect-ratio: 66/88;
}

#thumbnails {
  img {
    cursor: pointer;
  }
  
}

label {
  display: block;
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
    height: 100%;
  }

  .card-title {
    position: absolute;
    top : 70%;
    font-family: 'georgia bold';
    font-weight: bold;
    color: #3e3a30;
  }

  .card-capacity {
    position: absolute;
    top: 78%;
    height: 14%;
    color: #423d30;
    font-family: 'Georgia Regular font';
    font-size: smaller;
    max-width: 60%;
  }

  .card-type {
    position: absolute;
    bottom: 4%;
    color: #d15555;
    font-family: 'Georgia Regular font';
    font-size: smaller;
    text-transform: uppercase;
    font-size: x-small;
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
