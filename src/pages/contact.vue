<template>
  <div class="contact">
    <div class="page ">
      <section>
        <div class="relative about_relative">
          <div class="bg-title center">Hello</div>
          <img class="contact_screen_img" src="@/assets/contact-screen.png" alt="">
          <div class="contact_info">
            <p>Телефон</p>
            <div class="mintitle">+38 (097) 757 51 51</div>
            <div class="about_massage_hrefs">
              <img src="@/assets/telegram.png" alt="">
              <img src="@/assets/whatsapp.png" alt="">
              <img src="@/assets/viber.png" alt="">
            </div>
            <p>Почта</p>
            <div class="mintitle">hello@whalesagency.com</div>
            <div class="about_massage_hrefs">
              <img src="@/assets/instagram.png" alt="">
              <img src="@/assets/behance.png" alt="">
              <img src="@/assets/dribbble.png" alt="">
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  methods: {
    scrollToTop() {
      window.scroll(0, 0)
    },
    title() {
      document.title = 'Контакты'
    }
  },
  mounted() {
    this.scrollToTop()
    this.title()
  }
}
</script>