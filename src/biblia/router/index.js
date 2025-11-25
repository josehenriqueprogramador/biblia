import { createRouter, createWebHistory } from "vue-router";
import TestVersoes from "../components/TestVersoes.vue";
import LivrosView from "../views/LivrosView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: TestVersoes,
  },

  // 🔥 MAIS ESPECÍFICA PRIMEIRO (versículo único)
  {
    path: "/versao/:versao/:livro/:capitulo/:numero",
    name: "versiculo_unico",
    component: () => import("../views/VersiculoUnicoView.vue"),
    props: true,
  },

  // versículos do capítulo
  {
    path: "/versao/:versao/:livro/:capitulo",
    name: "versiculos",
    component: () => import("../views/VersiculosView.vue"),
    props: true,
  },

  // capítulos
  {
    path: "/versao/:versao/:livro",
    name: "capitulos",
    component: () => import("../views/CapitulosView.vue"),
    props: true,
  },

  // livros
  {
    path: "/versao/:versao",
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
