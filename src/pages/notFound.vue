<template>
  <div class="page-not-found page">
    <section>
      <div class="page_404">
        <div class="page_404_info">
          <div class="subtitle">Упс, кажется такой страницы не существует!</div>
          <button class="primery-btn"><router-link class="primery-btn" to="/">На главную</router-link></button>
        </div>
        <div class="page_404_img">
          <img src="@/assets/404.png" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'notFound',
  methods: {
    scrollToTop() {
      window.scroll(0, 0)
    },
    title() {
      document.title = 'WhallesDesign Мы ничего не нашли'
    }
  },
  mounted() {
    this.scrollToTop()
  }
}
</script>