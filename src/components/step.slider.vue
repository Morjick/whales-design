<template>
  <div class="step-slider">
    <div class="step-slider-inner">

      <div v-for="slide of sliders" :key="slide.id" class="step">
        <div class="step-inner">
          <div class="step-inner-count"> 
            {{ isCount(slide.id) }}  
          </div>
          <span></span>
          <p> {{ slide.desc }} </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'stepSlider',
  data() {
    return {
      sliders: []
    }
  },
  props: ['sliderArr'],
  methods: {
    slidesrs() {
      this.sliders = this.sliderArr
    },
    isCount(isId) {
      isId += 1
      if(isId < 10) return '0' + isId
      return isId
    },
  },
  mounted() {
    this.slidesrs()
  }
}
</script>