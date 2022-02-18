<template>
  <div class="header_list">
      <header class="header">
        <div class="header_inner">
          <div class="logo_header">
            <router-link to="/">
              <img src="@/assets/logo.png" alt="Whales Design" class="logo_header_img">
            </router-link>
          </div>

          <div @click="closeBurger" class="logo_header_dark">
            <router-link to="/">
              <img src="@/assets/logo-light.png" alt="Whales Design" class="logo_header_img">
            </router-link>
          </div>

          <nav class="header--desctop">
            <ul class="menu_header">
              <li class="menu_item"> <router-link to="/portfolio">Портфолио</router-link> </li>
              <li class="menu_item"> <router-link to="/services">Услуги и цены</router-link> </li>
              <li class="menu_item"><router-link to="/about">Мы</router-link></li>
              <li class="menu_item"> <router-link to="/contact">Контакты</router-link> </li>
            </ul>
          </nav>

          <div class="contact_header header--desctop">
            <p><a href="callto+38 (097) 757 51 51">+38 (097) 757 51 51</a></p>
            <button class="primery-btn"><a href="#mailFooter">Обсудить проект</a></button>
          </div>

          <div @click="burgerActive" class="burger_menu ">
            <span></span>
          </div>
        </div>
      </header>

    <div class="burger_list_menu">
      <ul class="menu_burger">
        <li @click="closeBurger" class="menu_item"> <router-link to="/portfolio">Портфолио</router-link> </li>
        <li @click="closeBurger" class="menu_item"> <router-link to="/services">Услуги и цены</router-link> </li>
        <li @click="closeBurger" class="menu_item"><router-link to="/about">О нас</router-link></li>
        <li @click="closeBurger" class="menu_item"> <router-link to="/contact">Контакты</router-link> </li>
      </ul>
      <button class="burger-btn">Обсудить проект</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    burgerActive() {
      const burgerACtive = document.querySelector('.burger_menu')
      const burgerMenu = document.querySelector('.burger_list_menu')
      const header = document.querySelector('.header')

      burgerACtive.classList.toggle('burgerActive')
      burgerMenu.classList.toggle('burgerList')
      header.classList.toggle('headerBurger')
    },
    closeBurger() {
      const burgerACtive = document.querySelector('.burger_menu')
      const burgerMenu = document.querySelector('.burger_list_menu')
      const header = document.querySelector('.header')

      burgerACtive.classList.remove('burgerActive')
      burgerMenu.classList.remove('burgerList')
      header.classList.remove('headerBurger')
    }
  },
}
</script>