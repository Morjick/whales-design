<template>
  <div class="creative-page">

    <section>
      <div class="logo_services_screen alighn_inner">
        <div class="logo_screen_desc">
          <div class="mintitle">Разработка Креатива</div>
          <p>Разрабатываем креативы для соц. сетей, контекстной рекламы, а также для мобильных игр и приложений!</p>

          <div class="btn-block">
            <button class="primery-btn">Заполныть бриф</button>
            <button class="pool-btn">Цены</button>
          </div>
        </div>
        <div class="logo_screen_img">
          <img src="@/assets/WebDesign.png" alt="" />
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
      <div class="price_item price_item_block">
          <div class="price_item_inner">
            <div class="center">
              <div class="price_name">Индивидуальный</div>
              <div class="mintitle">Уникальный проект?</div>
              <p>Мы в деле! Давайте обсудим условия подходящие, именно для вас!</p>
              <button class="pool-btn ma">Заказать</button>
            </div>
          </div>
        </div>
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
        {id: 0, desc: 'Изучаем вашу Бренд Стратегию и конкурентов'},
        {id: 1, desc: 'Определяем пути коммуникации с клиентами'},
        {id: 2, desc: 'Brainstorm (делаем мудборды, собираем всю информацию)'},
        {id: 3, desc: 'Составляем подробный бриф (определяем основное стилистическое направление)'},
        {id: 4, desc: 'Визуализация концепций и прототипов (создание первых вариантов)'},
        {id: 5, desc: 'Разработка рабочего варианта и финальные правки'},
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
      ]
    }
  },
  methods: {
    title() {
      document.title = "Веб-дизайн"
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