<template>
  <section class="h-screen text-center shadow-lg">
    <div class="text-white text-center py-5 bg-[rgba(0,0,0,0.6)]">
      <div>
        <div>
          <p class="text-2xl font-semibold">GK-Album</p>
        </div>
        <div>
          <p class="py-2 px-3 border border-white mx-44 cursor-pointer mt-3 rounded-md duration-[0.5s] hover:border-sky-500 hover:bg-sky-500">Show More</p>
        </div>
        <div>
          <ul class="flex justify-center gap-3 mt-3 text-sm">
            <router-link :to="{name:'Home'}"><li>Home</li></router-link>
            <router-link :to="{name:'Slidernature'}"><li>Nature</li></router-link>
            <router-link :to="{name:'Sliderwild'}"><li>Wild</li></router-link>
            <router-link :to="{name:'Slidergalaxy'}"><li>Galaxy</li></router-link>
            <router-link :to="{name:'Sliderocean'}"><li>Oceane</li></router-link>
          </ul>
        </div>
      </div>
    </div>
    <div class="container pt-10">
      <div class="w-full flex flex-1 overflow-hidden">
        <img
          class="w-full h-[300px] mySlides"
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          alt=""
        />
      </div>
      <span
        v-for="(image, index) in images"
        :key="index"
        @click="currentSlide(index + 1)"
        class="dot h-4 w-4 cursor-pointer my-0 mx-[2px] inline-block rounded-full bg-gray-200"
      ></span>
    </div>
  </section>
</template>

<script>
import { imageMixins } from "../imageMixins";
export default {
  mixins: [imageMixins],
  data() {
    return {
      images: [
        { src: "../../public/img/SliderOcean/ocean-1.jpg" },
        { src: "../../public/img/SliderOcean/ocean-2.jpg" },
        { src: "../../public/img/SliderOcean/ocean-3.jpg" },
        { src: "../../public/img/SliderOcean/ocean-4.jpg" },
        { src: "../../public/img/SliderOcean/ocean-5.jpg" },
        { src: "../../public/img/SliderOcean/ocean-6.jpg" },
        { src: "../../public/img/SliderOcean/ocean-7.jpg" },
      ],
    };
  },
};
</script>

<style>
.active,
.dot:hover {
  background-color: yellowgreen;
}
</style>