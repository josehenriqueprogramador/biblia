<script setup>
import { ref, onMounted } from "vue";
import { getCapitulos } from "../services/api";

const props = defineProps({
  versao: String,
  livro: String
});

const capitulos = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const r = await getCapitulos(props.versao, props.livro);
    capitulos.value = r.capitulos ?? r;
  } catch (e) {
    console.error("Erro ao carregar capítulos:", e);
  }
  loading.value = false;
});
</script>

<template>
  <div>
    <h2>{{ props.livro.toUpperCase() }} — Capítulos ({{ props.versao }})</h2>

    <div v-if="loading">Carregando...</div>

    <ul v-else>
      <li 
        v-for="cap in capitulos" 
        :key="cap"
      >
        <router-link :to="`/versao/${props.versao}/${props.livro}/${cap}`">
          Capítulo {{ cap }}
        </router-link>
      </li>
    </ul>

    <p><router-link to="/">Voltar</router-link></p>
  </div>
</template>
