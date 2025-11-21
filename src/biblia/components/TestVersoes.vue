<script setup>
import { ref, onMounted } from "vue";
import { getVersoes } from "../services/api";

const versoes = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    versoes.value = await getVersoes();
  } catch (e) {
    console.error("Erro ao buscar versões:", e);
  }
  loading.value = false;
});
</script>

<template>
  <div>
    <h2>Versões disponíveis:</h2>

    <div v-if="loading">Carregando...</div>

    <ul v-else>
      <li v-for="v in versoes" :key="v">
        <router-link :to="`/versao/${v}`">
          {{ v }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

