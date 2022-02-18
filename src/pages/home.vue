<template>
  <div class="home">
    <section>
      <MainScreen />
    </section>
    <section>
      <ShortAbout />
    </section>
    <section>
      <MinWorks />
    </section>
    <section>
      <Clients />
    </section>
  </div>
</template>

<script>
import MainScreen from '@/components/mainscreen'
import ShortAbout from '@/components/shortabout'
import MinWorks from '@/components/minWorks'
import Clients from '@/components/clients'

export default {
  name: 'Home Page',
  components: { MainScreen, ShortAbout, MinWorks, Clients, },
  methods: {
    title() {
      document.title = 'WhalesDesign Главная'
    },
    scrollToTop() {
      window.scroll(0, 0)
    }
  },
  mounted() {
    this.title() 
    this.scrollToTop()
  }
}
</script>