<template>
  <div class="logo-services">
    <section>
      <div class="logo_services_screen">
        <div class="logo_screen_desc">
          <div class="mintitle">Разработка Логотипа</div>
          <p>Вы хорошо знаете свой бизнес, а мы знаем как сделать хороший дизайн! И будем рады сделать лого для вашей: Компании, Приложения или Сайта.</p>

          <div class="btn-block">
            <button class="primery-btn">Заполныть бриф</button>
            <button class="pool-btn">Цены</button>
          </div>
        </div>
        <div class="logo_screen_img">
          <img src="@/assets/logo-screen.png" alt="">
        </div>
      </div>
    </section>

    <section>
      <div class="subtitle">Как выглядит Процесс разработки лого:</div>
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
  name: 'Logotype',
  data() {
    return {
      sliderArr: [
        { id: 0, desc: 'Изучение продукта или ниши деятельности компании', },
        { id: 1, desc: 'Формирование технического задания', },
        { id: 2, desc: 'Анализ основных конкурентов', },
        { id: 3, desc: 'Визуализация концепций и прототипов (создание первых вариантов)', },
        { id: 4,desc:'Составляем подробный бриф (определяем основное стилистическое направление)',},
        { id: 5, desc: 'Финалбные правки ', },
        { id: 6, desc: 'Выдача рабочего варинта логотипа', },
        { id: 7, desc: 'Изучение продукта или ниши деятельности компании', },
        { id: 8, desc: 'Формирование технического задания', },
        { id: 9, desc: 'Анализ основных конкурентов', },
        { id: 10, desc: 'Визуализация концепций и прототипов (создание первых вариантов)', },
        { id:11,desc:'Составляем подробный бриф (определяем основное стилистическое направление)',},
        { id: 12, desc: 'Финалбные правки ', },
        { id: 13, desc: 'Выдача рабочего варинта логотипа', },
      ],

      works: [
        {id: 0, imgSrc: 'https://via.placeholder.com/1100x560'},
        {id: 1, imgSrc: 'https://via.placeholder.com/613x500'},
        {id: 2, imgSrc: 'https://via.placeholder.com/473x500'},
      ],

      prices: [
        {id: 0, name: 'Обычный' ,desc: [
          {id: 0, desck: '2 концепции, 3 правки 3 дня'}, 
          {id: 1, desck: 'Исходные файлы (*ai)'},
          {id: 2, desck: 'Логотип в черном, белом и цветном варианте'}, 
          {id: 3, desck: 'Логотип в цветовом пространстве CMYK'}, 
        ], cost: '₴0 000', isSales: false},
        {id: 1, name: 'Стандартный' ,desc: [
          {id: 0, desck: '3 концепции, 5 правок'}, 
          {id: 1, desck: '2 дня'},
          {id: 2, desck: 'Услуги пакета "Обычный"'}, 
          {id: 3, desck: 'Презентация логотипа на мокапах (Вывески, Печатные медиа, Продукция)'}, 
          {id: 4, desck: 'Право на внесение правок после утверждения макета)'}, 
        ], cost: '₴0 000', isSales: true},
        {id: 2, name: 'Максимальный' ,desc: [
          {id: 0, desck: '5 концепции, 7 правок'}, 
          {id: 1, desck: '3 дня'},
          {id: 2, desck: 'Услуги пакета "Стандарт"'}, 
          {id: 3, desck: 'Подбор фирменных шрифтов'}, 
          {id: 4, desck: 'Подбор цветовой палитры '}, 
          {id: 5, desck: 'Арт-дирекшн и контроль со стороны CEO Артура Михова'}, 
        ], cost: '₴0 000', isSales: false},
      ]
    }
  },
  methods: {
    title() {
      document.title = 'Логотипы'
    }
  },
  mounted() {
    this.title()
  },
  components: { Slider, Works, Prices, Plus, },
}
</script>