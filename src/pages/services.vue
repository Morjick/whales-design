<template>
  <div class="services">
    <div class="page">
      <section>
        <div class="bg-title center">Услуги</div>
      </section>

      <section>
        <div class="progects">
          <div class="progects_inner">

            <div class="project">
              <div class="project_inner">
                <div class="subtitle">Айдентика</div>
                <p>Мы занимаемся дизайном логотипов, элементов фирменного стиля</p>
                <button class="empty-btn"><router-link to="/services/identity">Подробнее</router-link></button>
              </div>
            </div>

            <div class="project">
              <div class="project_inner">
                <div class="subtitle">Иллюстрации</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <button class="empty-btn">
                  <router-link to="/services/ilustration">Подробнее</router-link>
                </button>
              </div>
            </div>

            <div class="project">
              <div class="project_inner">
                <div class="subtitle">Логотипы</div>
                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <button class="empty-btn">
                  <router-link to="/services/logo">Подробнее</router-link>
                </button>
              </div>
            </div>

            <div class="project">
              <div class="project_inner">
                <div class="subtitle">Веб сайты</div>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa deserunt </p>
                <button class="empty-btn"><router-link to="/services/web-design">Подробнее</router-link></button>
              </div>
            </div>

            <div class="project">
              <div class="project_inner">
                <div class="subtitle">Креативы</div>
                <p>Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                <button class="empty-btn">
                  <router-link to="/services/creative">Подробнее</router-link>
                </button>
              </div>
            </div>

            <div class="project">
              <div class="project_inner">
                <div class="subtitle">Презентации</div>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p>
                <button class="empty-btn"> 
                  <router-link to="/services/presentation">Подробнее</router-link>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'services',
  methods: {
    title() {
      document.title = 'Услуги и цены'
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