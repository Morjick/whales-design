<template>
  <div class="works_types div-img">
    <img v-for="workI in propsWorks" :key="workI.id" :src="workI.imgSrc" alt="">

    <div class="center">
      <button class="primery-btn">
        <router-link to="/portfolio">Все работы</router-link>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Works',
  data() {
    return {
      propsWorks: []
    }
  },
  props: ['works'],
  methods: {
    initWorks() {
      this.propsWorks = this.works 
    }
  },
  mounted() {
    this.initWorks()
  }
}
</script>