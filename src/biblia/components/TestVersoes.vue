<script setup>
import { ref, onMounted } from "vue";
import { getVersoes } from "../services/api";
import { useRouter } from "vue-router";

const router = useRouter();
const versoes = ref(null);
const loading = ref(true);

onMounted(async () => {
  try {
    const r = await getVersoes();
    versoes.value = r;     // lista de versões
  } catch (e) {
    console.error("Erro carregando versões:", e);
  }
  loading.value = false;
});

function abrirVersao(v) {
  router.push(`/versao/${v}`);
}
</script>

<template>
  <div>
    <h2>Versões disponíveis:</h2>

    <div v-if="loading">Carregando...</div>

    <ul v-else>
      <li
        v-for="v in versoes"
        :key="v"
        @click="abrirVersao(v)"
        style="cursor:pointer; padding:10px; font-size:20px; border-bottom:1px solid #ccc"
      >
        {{ v.toUpperCase() }}
      </li>
    </ul>
  </div>
</template>
