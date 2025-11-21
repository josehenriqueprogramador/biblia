<script setup>
import { ref, watch } from "vue";
import { getLivros } from "../services/api";

const props = defineProps({
  versao: { type: String, required: true }
});

const livros = ref([]);
const loading = ref(false);

watch(
  () => props.versao,
  async (novaVersao) => {
    if (!novaVersao) return;

    loading.value = true;
    try {
      livros.value = await getLivros(novaVersao);
    } catch (e) {
      console.error("Erro ao carregar livros:", e);
    }
    loading.value = false;
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <h3>Livros da versão: {{ props.versao }}</h3>

    <div v-if="loading">Carregando livros...</div>

    <ul v-else>
      <li v-for="livro in livros" :key="livro.sigla">
        {{ livro.nome }} ({{ livro.sigla }})
      </li>
    </ul>
  </div>
</template>
