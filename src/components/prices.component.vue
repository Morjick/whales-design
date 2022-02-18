<template>
  <div class="logo_price">
    <div class="logo_price_inner">
<!-- price_item_avtive -->
      <div v-for="price of prices" :key="price.id" :class="{ price_item_avtive: price.isSales }" class="price_item ">
        <div class="price_item_inner">
          <div class="center">
            <div class="price_name">{{ price.name }}</div>
            <div class="mintitle">{{price.cost}}</div>
            <button v-if="price.isSales" class="primery-btn ma">Заказать</button>
            <button v-if="!price.isSales" class="pool-btn ma">Заказать</button>

            <div class="hr"></div>

            <ul class="price_list">
              <li v-for="plus of price.desc" :key="plus.id" class="price_list_item">{{ plus.desck }}</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Prices',
  data() {
    return {
      pricesArr: []
    }
  },
  props: ['prices'],
  methods: {
    initPrices() {
      this.pricesArr = this.prices
    }
  },
  mounted() {
    this.initPrices()
  }
}
</script>