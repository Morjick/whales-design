<template>
  <div class="identity-page">
    <section>
      <div class="logo_services_screen alighn_inner">
        <div class="logo_screen_desc">
          <div class="mintitle">Разработка Фирменного Стиля</div>
          <p>Создайте незабываемое первое впечатление, с помощью потрясающего визуального стиля вашего бренда!</p>

          <div class="btn-block">
            <button class="primery-btn">Заполныть бриф</button>
            <button class="pool-btn">Цены</button>
          </div>
        </div>
        <div class="logo_screen_img">
          <img src="@/assets/Identity.png" alt="">
        </div>
      </div>
    </section>

    <section>
      <div class="subtitle">Что такое Фирменный стиль и что в него входит:</div>
      <p>В конечном итоге фирменный стиль - это способ общаться с миром, выделяться среди конкурентов и создавать впечатление о бренде, которое побуждает людей взаимодействовать с вами. Некоторые бренды превращают айдентику в искусство (например, Apple, LEGO или Levi’s).</p>
    </section>

    <section class="contrast_section">
      <div class="subtitle">Что чаще всего входит в Фирменный стиль?</div>
      <p class="contrast_desc">При разработке айдентики вам необходимо создать всеобъемлющий визуальный язык, который можно применить ко всему, от вашего веб-сайта до упаковки. И зависимости от ваших целей или продукта, этот список может быть больше или меньше:</p>

      <div class="contrast_list_section">
        <ul class="custim_list">
          <li class="custom_list_item">Логотип</li>
          <li class="custom_list_item">Цветовая палитра</li>
          <li class="custom_list_item">Типография</li>
          <li class="custom_list_item">Печатная продукция</li>
          <li class="custom_list_item">Фотографии</li>
          <li class="custom_list_item">Иллюстрации</li>
        </ul>
        <ul class="custom_list">
          <li class="custom_list_item">Иконки</li>
          <li class="custom_list_item">Креативы</li>
          <li class="custom_list_item">Интерактивные элементы</li>
          <li class="custom_list_item">Веб-дизайн</li>
          <li class="custom_list_item">Брендбук</li>
        </ul>
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
  name: 'Idantity',
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
      document.title = 'Фирменный стиль'
    }
  },
  mounted() {
    this.title()
  },
  components: { Slider, Works, Prices, Plus, }
}
</script>