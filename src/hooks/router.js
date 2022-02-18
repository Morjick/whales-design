import VueRouter from 'vue-router'

import home from '@/pages/home'
import portfolio from '@/pages/portfolio'
import services from '@/pages/services'
import about from '@/pages/about'
import contact from '@/pages/contact'
import notFound from '@/pages/notFound'
import logo from '@/pages/logo.services'
import identity from '@/pages/Identity.services'
import creative from '@/pages/Ceative.services'
import presentation from '@/pages/Presentation.services'
import webdesign from '@/pages/Webdesign.services'
import ilustration from '@/pages/Ilustration.service'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/portfolio',
      component: portfolio
    },
    {
      path: '/services',
      component: services
    },
    {
      path: '/services/logo',
      component: logo
    },
    {
      path: '/services/identity',
      component: identity
    },
    {
      path: '/services/creative',
      component: creative
    },
    {
      path: '/services/presentation',
      component: presentation
    },
    {
      path: '/services/web-design',
      component: webdesign
    },
    {
      path: '/services/ilustration',
      component: ilustration
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/contact',
      component: contact
    },
    {
      path: '/*',
      component: notFound
    },
  ]
})