<template>
  <div id="app">
    <Header />
    <div class="container ">
      <div class="page">
        <transition >
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/_header'
import Footer from '@/components/_footer'

export default {
  name: 'App',
  methods: {
    scrollToTop() {
      window.scroll(0, 0)
    }
  },
  mounted() {
    this.scrollToTop()
  },
  components: { Header, Footer,  }
}
</script>

<style>
@import url('styles/css/index.min.css');
</style>
