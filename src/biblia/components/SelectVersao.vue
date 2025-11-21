<script setup>
import { ref, onMounted } from "vue";
import { getVersoes } from "../services/api";

const versoes = ref([]);
const loading = ref(true);
const selected = defineModel(); // permite v-model

onMounted(async () => {
  try {
    versoes.value = await getVersoes();
  } catch (e) {
    console.error("Erro ao carregar versoes:", e);
  }
  loading.value = false;
});
</script>

<template>
  <div>
    <label>Versão:</label>

    <select v-model="selected" class="select-box">
      <option disabled value="">Selecione...</option>

      <option v-for="v in versoes" :key="v" :value="v">
        {{ v }}
      </option>
    </select>

    <div v-if="loading">Carregando versões...</div>
  </div>
</template>

<style scoped>
.select-box {
  padding: 6px;
  border-radius: 6px;
  background: #f5f5f5;
  border: 1px solid #ccc;
}
</style>
