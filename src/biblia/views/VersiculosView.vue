<script setup>
import { ref, onMounted } from "vue";
import { getVersiculos } from "../services/api";

const props = defineProps({
  versao: String,
  livro: String,
  capitulo: String,
});

const versiculos = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    versiculos.value = await getVersiculos(
      props.versao,
      props.livro,
      props.capitulo
    );
  } catch (e) {
    console.error("Erro ao carregar versículos:", e);
  }
  loading.value = false;
});
</script>

<template>
  <div>
    <h2>{{ props.livro.toUpperCase() }} {{ props.capitulo }} — Versículos ({{ props.versao }})</h2>
    
    <div v-if="loading">Carregando...</div>

    <ol v-else>
      <ol>
         <li v-for="(texto, index) in versiculos" :key="index">
             {{ texto }}
          </li>
       </ol>

    </ol>

    <p>
      <router-link :to="`/versao/${props.versao}/${props.livro}`">Voltar</router-link>
    </p>
  </div>
</template>

