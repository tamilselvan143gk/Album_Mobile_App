<template>
  <section
    class="bg-no-repeat h-screen relative"
    style="background: linear-gradient(rgba(2, 2, 2, 0.5), rgba(0, 0, 0, 0.5)),url(public/img/welcome.jpg) fixed center center;">
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
    <div class="text-white text-center mt-40">
      <p class="text-2xl italic leading-[50px]">
        Snapshot Stories: Explore Our Image <br />
        Album Collection
      </p>
    </div>
  </section>
</template>

<script>
export default {
  
};
</script>
