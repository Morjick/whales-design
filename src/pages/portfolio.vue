<template>
  <div class="portfolio">
    <div class="page">
      <div class="center">
        <div class="subtitle">Наши работы</div>
        <div class="hr"></div>
      </div>

      <div class="flex_beetween subnav_home">
        <ul class="min_portfolio">
          <li class="min_portfolio_item">
            <label class="min_portfolio_item_label">
              <input
                v-model="portfolioType"
                value="all"
                name="portfolioType"
                type="radio"
              />
              <p>Все работы</p>
            </label>
          </li>
          <li class="min_portfolio_item">
            <label class="min_portfolio_item_label">
              <input
                v-model="portfolioType"
                value="logotypes"
                name="portfolioType"
                type="radio"
              />
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
              />
              <p>Веб-сайты</p>
            </label>
          </li>
          <li class="min_portfolio_item">
            <label class="min_portfolio_item_label">
              <input
                v-model="portfolioType"
                value="styles"
                name="portfolioType"
                type="radio"
              />
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
              />
              <p>Иллюстрации</p>
            </label>
          </li>
          <li class="min_portfolio_item">
            <label class="min_portfolio_item_label">
              <input
                v-model="portfolioType"
                value="presentations"
                name="portfolioType"
                type="radio"
              />
              <p>Призентации</p>
            </label>
          </li>
          <li class="min_portfolio_item">
            <label class="min_portfolio_item_label">
              <input
                v-model="portfolioType"
                value="creatives"
                name="portfolioType"
                type="radio"
              />
              <p>Креативы</p>
            </label>
          </li>
        </ul>
      </div>

      <div class="min_works_wrapper">
        <div class="min_works_wrapper_inner">
          <div class="works_types" v-if="this.portfolioType == 'all'">
            <div
              class="works_types_item"
              v-for="logotype in logotypes"
              :key="logotype.id"
            >
              <img :src="logotype.src" alt="" />
            </div>
            <div
              class="works_types_item"
              v-for="website in websites"
              :key="website.id"
            >
              <img :src="website.src" alt="" />
            </div>
            <div
              class="works_types_item"
              v-for="style in styles"
              :key="style.id"
            >
              <img :src="style.src" alt="" />
            </div>
            <div
              class="works_types_item"
              v-for="image in images"
              :key="image.id"
            >
              <img :src="image.src" alt="" />
            </div>
            <div
              class="works_types_item"
              v-for="presentation in presentations"
              :key="presentation.id"
            >
              <img :src="presentation.src" alt="" />
            </div>
            <div
              class="works_types_item"
              v-for="creative in creatives"
              :key="creative.id"
            >
              <img :src="creative.src" alt="" />
            </div>
          </div>

          <div class="works_types" v-if="this.portfolioType == 'logotypes'">
            <div
              class="works_types_item"
              v-for="logotype in logotypes"
              :key="logotype.id"
            >
              <img :src="logotype.src" alt="" />
            </div>
          </div>

          <div class="works_types" v-if="this.portfolioType == 'websites'">
            <div
              class="works_types_item"
              v-for="website in websites"
              :key="website.id"
            >
              <img :src="website.src" alt="" />
            </div>
          </div>

          <div class="works_types" v-if="this.portfolioType == 'styles'">
            <div
              class="works_types_item"
              v-for="style in styles"
              :key="style.id"
            >
              <img :src="style.src" alt="" />
            </div>
          </div>

          <div class="works_types" v-if="this.portfolioType == 'images'">
            <div
              class="works_types_item"
              v-for="image in images"
              :key="image.id"
            >
              <img :src="image.src" alt="" />
            </div>
          </div>

          <div class="works_types" v-if="this.portfolioType == 'presentations'">
            <div
              class="works_types_item"
              v-for="presentation in presentations"
              :key="presentation.id"
            >
              <img :src="presentation.src" alt="" />
            </div>
          </div>

          <div class="works_types" v-if="this.portfolioType == 'creatives'">
            <div
              class="works_types_item"
              v-for="creative in creatives"
              :key="creative.id"
            >
              <img :src="creative.src" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      portfolioType: "all",

      logotypes: [
        { id: 0, src: "https://via.placeholder.com/1100x560" },
        { id: 1, src: "https://via.placeholder.com/610x500" },
        { id: 2, src: "https://via.placeholder.com/450x500" },
        { id: 3, src: "https://via.placeholder.com/450x500" },
        { id: 4, src: "https://via.placeholder.com/610x500" },
        { id: 5, src: "https://via.placeholder.com/1100x560" },
        { id: 6, src: "https://via.placeholder.com/590x500" },
        { id: 7, src: "https://via.placeholder.com/500x500" }
      ],

      websites: [
        { id: 0, src: "https://via.placeholder.com/400x560" },
        { id: 1, src: "https://via.placeholder.com/610x500" },
        { id: 2, src: "https://via.placeholder.com/450x500" },
        { id: 3, src: "https://via.placeholder.com/450x500" },
        { id: 4, src: "https://via.placeholder.com/610x500" },
        { id: 5, src: "https://via.placeholder.com/1100x560" },
        { id: 6, src: "https://via.placeholder.com/590x500" },
        { id: 7, src: "https://via.placeholder.com/500x500" }
      ],

      styles: [
        { id: 0, src: "https://via.placeholder.com/1100x560" },
        { id: 1, src: "https://via.placeholder.com/610x500" },
        { id: 2, src: "https://via.placeholder.com/450x500" },
        { id: 3, src: "https://via.placeholder.com/450x500" },
        { id: 4, src: "https://via.placeholder.com/610x500" },
        { id: 5, src: "https://via.placeholder.com/1100x560" },
        { id: 6, src: "https://via.placeholder.com/590x500" },
        { id: 7, src: "https://via.placeholder.com/500x500" }
      ],

      images: [
        { id: 0, src: "https://via.placeholder.com/400x560" },
        { id: 1, src: "https://via.placeholder.com/610x500" },
        { id: 2, src: "https://via.placeholder.com/450x500" },
        { id: 3, src: "https://via.placeholder.com/450x500" },
        { id: 4, src: "https://via.placeholder.com/610x500" },
        { id: 5, src: "https://via.placeholder.com/1100x560" },
        { id: 6, src: "https://via.placeholder.com/590x500" },
        { id: 7, src: "https://via.placeholder.com/500x500" }
      ],

      presentations: [
        { id: 0, src: "https://via.placeholder.com/1100x560" },
        { id: 1, src: "https://via.placeholder.com/610x500" },
        { id: 2, src: "https://via.placeholder.com/450x500" },
        { id: 3, src: "https://via.placeholder.com/450x500" },
        { id: 4, src: "https://via.placeholder.com/610x500" },
        { id: 5, src: "https://via.placeholder.com/1100x560" },
        { id: 6, src: "https://via.placeholder.com/590x500" },
        { id: 7, src: "https://via.placeholder.com/500x500" }
      ],

      creatives: [
        { id: 0, src: "https://via.placeholder.com/400x560" },
        { id: 1, src: "https://via.placeholder.com/610x500" },
        { id: 2, src: "https://via.placeholder.com/450x500" },
        { id: 3, src: "https://via.placeholder.com/450x500" },
        { id: 4, src: "https://via.placeholder.com/610x500" },
        { id: 5, src: "https://via.placeholder.com/1100x560" },
        { id: 6, src: "https://via.placeholder.com/590x500" },
        { id: 7, src: "https://via.placeholder.com/500x500" }
      ]
    }
  },
  methods: {
    title() {
      document.title = "Наши работы"
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