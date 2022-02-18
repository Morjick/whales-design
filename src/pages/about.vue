<template>
  <div class="about">
    <section>
      <div class="bg-title about-title">wha <br> les </div>
      <img class="about-screen" src="@/assets/about-screen.png" alt="">
    </section>
    <section>
      <div class="flex_beetween about_flexer">
        <div class="subtitle">О нас</div>
        <div>
          <p>Мы помогаем упаковывать бизнес по всему миру, и создаем дизайн, который, остается актуальным и вызывает эмоции даже в нашу эпоху фаст-фуд информации!</p>
          <p>Сотрудничая с веб-студиями, креативными агентствами, издателями, а также разработчиками мобильных игр и арбитражными командами со всего земного шара, мы всегда помним о репутации, следим за качеством, и предоставляем услуги высшего качества.</p>
        </div>
      </div>
    </section>
    <section>
      <div class="about_plus">
        <div class="about_plus_inner">

          <div class="plus">
            <div class="plus_step">01</div>
            <div class="mintitle">Экономия</div>
            <p>Отсутствие офиса, помогает нам оказывать услуги премиального качества, за более низкую цену</p>
          </div>

          <div class="plus">
            <div class="plus_step">02</div>
            <div class="mintitle">Скорость</div>
            <p>У нас небольшая команда, а значит принятие решений занимает гораздо меньшее количество времени</p>
          </div>

          <div class="plus">
            <div class="plus_step">03</div>
            <div class="mintitle">Прозрачность</div>
            <p>Сразу после начала работы, вы будете подключены к нашему удаленному офису, где напрямую сможете общаться с Дизайнером, Менеджером или же Руководителем агентства</p>
          </div>

          <div class="plus">
            <div class="plus_step">04</div>
            <div class="mintitle">Удобство</div>
            <p>Мы будем предоставлять вам регулярные отчеты о стадии на которой, находится ваш дизайн</p>
          </div>

        </div>
      </div>
    </section>

    <section>
      <div class="subtitle center">География наших клиентов</div>
      <div class="about_map">
        <div class="about_map_statistik">
          <div class="mintitle">55+</div>
          <p>стран по всему миру</p>
          <div class="mintitle">235+</div>
          <p>довольных клиентов</p>
          <div class="mintitle">10 000+</div>
          <p>часов работы</p>
        </div>
        <img src="@/assets/Map.png" alt="">
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'about',
  methods: {
    scrollToTop() {
      window.scroll(0, 0)
    },
    title() {
      document.title = 'О нас'
    }
  },
  mounted() {
    this.scrollToTop()
    this.title()
  }
}
</script>