<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getLivros } from "../services/api";

const route = useRoute();
const versao = route.params.versao;

const livros = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const data = await getLivros(versao);
    livros.value = data.map((l) => ({
      abrev: l.abbrev || l.abrev || l.abbreviation,
      nome: l.name || l.nome || l.book || l.abbrev?.toUpperCase(),
    }));
  } catch (e) {
    console.error("Erro carregando livros:", e);
  }
  loading.value = false;
});
</script>

<template>
  <div class="container">
    <h2>Livros — Versão: {{ versao }}</h2>

    <div v-if="loading">Carregando...</div>

    <ul v-else>
      <li v-for="livro in livros" :key="livro.abrev">
        <router-link :to="`/versao/${versao}/${livro.abrev}`">
          {{ livro.nome }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

