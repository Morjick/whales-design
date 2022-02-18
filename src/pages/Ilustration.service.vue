<template>
  <div class="creative-page">

    <section>
      <div class="logo_services_screen alighn_inner">
        <div class="logo_screen_desc">
          <div class="mintitle">Создание Илюстраций</div>
          <p>Разрабатываем креативы для соц. сетей, контекстной рекламы, а также для мобильных игр и приложений!</p>

          <div class="btn-block">
            <button class="primery-btn">Заполныть бриф</button>
            <button class="pool-btn">Цены</button>
          </div>
        </div>
        <div class="logo_screen_img">
          <img src="@/assets/Ilustration.png" alt="" />
        </div>
      </div>
    </section>

  <section>
    <Slider v-bind:sliderArr="sliderArr" />
  </section>

  <section>
    <div class="subtitle">Примеры работ</div>
    <Works :works="works" />
  </section>

  <section>
    <div class="subtitle center">Цены</div>
    <Prices :prices="prices" />
  </section>

  <Plus />

  </div>
</template>

<script>
import Slider from '@/components/step.slider'
import Works from '@/components/works.component'
import Prices from '@/components/prices.component'
import Plus from '@/components/plus.component'

export default {
  name: "Presentation",
  data() {
    return {
      sliderArr: [
        {id: 0, desc: 'Обсуждаем вашу кампанию '},
        {id: 1, desc: 'Анализируем рынок и делаем бриф'},
        {id: 2, desc: 'Формируем ТЗ (контент и содержание каждого поста)'},
        {id: 3, desc: 'Начинаем работу над дизайном!'},
      ],

      works: [
        {id: 0, imgSrc: 'https://via.placeholder.com/1100x560'},
        {id: 1, imgSrc: 'https://via.placeholder.com/613x500'},
        {id: 2, imgSrc: 'https://via.placeholder.com/473x500'},
      ],

      prices: [
        {id: 0, name: 'Стартап' ,desc: [
          {id: 0, desck: 'Логотип'}, 
          {id: 1, desck: 'Цветовая схема'},
          {id: 2, desck: 'Типография'}, 
          {id: 3, desck: 'Визитка'}, 
          {id: 4, desck: 'Фирменный бланк'}, 
          {id: 5, desck: 'Папка'}, 
          {id: 5, desck: 'Конверт'}, 
        ], cost: 'от ₴0 000', isSales: false},
        {id: 1, name: 'Компания' ,desc: [
          {id: 0, desck: 'Услуги пакета "Стартап"'}, 
          {id: 1, desck: 'Паттерн/формы'},
          {id: 2, desck: 'Иконки'}, 
          {id: 3, desck: 'Иллюстрация'}, 
          {id: 4, desck: 'Оформление соц. сетей'}, 
        ], cost: 'от ₴0 000', isSales: true},
        {id: 2, name: 'Корпорация' ,desc: [
          {id: 0, desck: 'Услуги пакета "Компания"'}, 
          {id: 1, desck: 'Маскот/Персонаж'},
          {id: 2, desck: 'Изображения (подбор стиля)'}, 
          {id: 3, desck: 'Брендбук'}, 
        ], cost: 'от ₴0 000', isSales: false},
        {id: 3, name: 'Ресторан' ,desc: [
          {id: 0, desck: 'Услуги пакета "Стартап"'}, 
          {id: 1, desck: 'Меню'},
          {id: 2, desck: 'Винная карта'}, 
          {id: 3, desck: 'Коктейльная карта'}, 
          {id: 4, desck: 'Бирдекель/Костер'}, 
          {id: 5, desck: 'Счетница'}, 
          {id: 6, desck: 'Форма персонала'}, 
          {id: 7, desck: 'Плейсмат'}, 
          {id: 8, desck: 'Резерв'}, 
          {id: 9, desck: 'Оформление соц. сетей'}, 
        ], cost: 'от ₴0 000', isSales: false},
      ]
    }
  },
  methods: {
    title() {
      document.title = "Иллюстрации"
    },
    scrollToTop() {
      window.scroll(0, 0)
    }
  },
  mounted() {
    this.title();
    this.scrollToTop()
  },
  components: { Slider, Works, Prices, Plus, }
}
</script>