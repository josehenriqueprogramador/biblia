<script setup>
import { ref } from "vue";
import SelectVersao from "../components/SelectVersao.vue";
import LivrosList from "../components/LivrosList.vue";

const versaoSelecionada = ref("");
</script>

<template>
  <div class="container">
    <h1>Bíblia Inteligente — MVP</h1>

    <SelectVersao v-model="versaoSelecionada" />

    <div v-if="versaoSelecionada">
      <LivrosList :versao="versaoSelecionada" />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
</style>
