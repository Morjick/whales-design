<template>
  <div class="min_works">
    <div class="subtitle min_works_title">Наши работы</div>
    <div class="flex_beetween subnav_home">
      <ul class="min_portfolio">
        <li class="min_portfolio_item">
          <label class="min_portfolio_item_label">
            <input 
              v-model="portfolioType"
              value="logotypes"
              name="portfolioType"
              type="radio"
            >
            <p>Логотипы</p>
          </label>
        </li>
        <li class="min_portfolio_item">
          <label class="min_portfolio_item_label">
            <input 
              v-model="portfolioType"
              value="websites" 
              name="portfolioType" 
              type="radio"
            >
            <p>Веб-сайты</p>
          </label>
        </li>
        <li class="min_portfolio_item">
          <label class="min_portfolio_item_label">
            <input 
              v-model="portfolioType"
              value="styles"
              name="portfolioType"
              type="radio">
            <p>Фирменный стиль</p>
          </label>
        </li>
        <li class="min_portfolio_item">
          <label class="min_portfolio_item_label">
            <input 
              v-model="portfolioType"
              value="images"
              name="portfolioType" 
              type="radio"
            >
            <p>Иллюстрации</p>
          </label>
        </li>
      </ul>
      <div class="all_projects">
        <router-link to="portfolio">
          <button class="none-btn m0">Все работы</button>
          <img src="@/assets/contrast-arr.png" alt="">
        </router-link>
      </div>
    </div>

    <div class="min_works_wrapper">
      <div class="min_works_wrapper_inner">

        <div class="works_types" v-if="this.portfolioType == 'logotypes' ">
          <div 
            class="works_types_item"
            v-for="logotype in logotypes" 
            :key="logotype.id"
          >
            <img :src=logotype.src alt="">
          </div>
        </div>

        <div class="works_types" v-if="this.portfolioType == 'websites' ">
          <div 
            class="works_types_item"
            v-for="website in websites" 
            :key="website.id"
          >
            <img :src=website.src alt="">
          </div>
        </div>

        <div class="works_types" v-if="this.portfolioType == 'styles' ">
          <div 
            class="works_types_item"
            v-for="style in styles" 
            :key="style.id"
          >
            <img :src=style.src alt="">
          </div>
        </div>

        <div class="works_types" v-if="this.portfolioType == 'images' ">
          <div 
            class="works_types_item"
            v-for="image in images" 
            :key="image.id"
          >
            <img :src=image.src alt="">
          </div>
        </div>

      </div>
    </div>

    <div class="min_works_wrapper_btn">
      <button class="primery-btn">
        <router-link to="/portfolio">Все работы</router-link>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolioType: 'logotypes',

      logotypes: [
        { id: 0, src: 'https://via.placeholder.com/1100x560' },
        { id: 1, src: 'https://via.placeholder.com/610x500' },
        { id: 2, src: 'https://via.placeholder.com/450x500' },
        { id: 3, src: 'https://via.placeholder.com/450x500' },
        { id: 4, src: 'https://via.placeholder.com/610x500' },
        { id: 5, src: 'https://via.placeholder.com/1100x560' },
        { id: 6, src: 'https://via.placeholder.com/590x500' },
        { id: 7, src: 'https://via.placeholder.com/500x500' },
      ],

      websites: [
        { id: 0, src: 'https://via.placeholder.com/400x560' },
        { id: 1, src: 'https://via.placeholder.com/610x500' },
        { id: 2, src: 'https://via.placeholder.com/450x500' },
        { id: 3, src: 'https://via.placeholder.com/450x500' },
        { id: 4, src: 'https://via.placeholder.com/610x500' },
        { id: 5, src: 'https://via.placeholder.com/1100x560' },
        { id: 6, src: 'https://via.placeholder.com/590x500' },
        { id: 7, src: 'https://via.placeholder.com/500x500' },
      ],

      styles: [
        { id: 0, src: 'https://via.placeholder.com/1100x560' },
        { id: 1, src: 'https://via.placeholder.com/610x500' },
        { id: 2, src: 'https://via.placeholder.com/450x500' },
        { id: 3, src: 'https://via.placeholder.com/450x500' },
        { id: 4, src: 'https://via.placeholder.com/610x500' },
        { id: 5, src: 'https://via.placeholder.com/1100x560' },
        { id: 6, src: 'https://via.placeholder.com/590x500' },
        { id: 7, src: 'https://via.placeholder.com/500x500' },
      ],

      images: [
        { id: 0, src: 'https://via.placeholder.com/400x560' },
        { id: 1, src: 'https://via.placeholder.com/610x500' },
        { id: 2, src: 'https://via.placeholder.com/450x500' },
        { id: 3, src: 'https://via.placeholder.com/450x500' },
        { id: 4, src: 'https://via.placeholder.com/610x500' },
        { id: 5, src: 'https://via.placeholder.com/1100x560' },
        { id: 6, src: 'https://via.placeholder.com/590x500' },
        { id: 7, src: 'https://via.placeholder.com/500x500' },
      ],
    }
  }
}
</script>