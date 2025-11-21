import { createRouter, createWebHistory } from "vue-router";

import TestVersoes from "../components/TestVersoes.vue";
import LivrosView from "../views/LivrosView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: TestVersoes,
  },
  {
    path: "/versao/:versao/:livro/:capitulo",   // mais específica
    name: "versiculos",
    component: () => import("../views/VersiculosView.vue"),
    props: true,
  },
  {
    path: "/versao/:versao/:livro",             // capítulos
    name: "capitulos",
    component: () => import("../views/CapitulosView.vue"),
    props: true,
  },
  {
    path: "/versao/:versao",                    // lista de livros
    name: "livros",
    component: LivrosView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

