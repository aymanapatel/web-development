/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router"
import EventList from "../views/EventList.vue"
import EventDetails from "../views/EventDetails.vue"
import About from "../views/About.vue"

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails,
  },
  {
    path: "/about",
    name: "About",
    component: About,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // For optimization
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
]

const router = createRouter({
  //
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
