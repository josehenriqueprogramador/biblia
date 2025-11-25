<script setup>
import { ref, onMounted } from "vue";
import { getVersiculoUnico } from "../services/api";

const props = defineProps({
  versao: String,
  livro: String,
  capitulo: String,
  numero: String
});

const dados = ref(null);
const loading = ref(true);
const erro = ref(null);

onMounted(async () => {
  try {
    dados.value = await getVersiculoUnico(
      props.versao,
      props.livro,
      props.capitulo,
      props.numero
    );
  } catch (e) {
    erro.value = "Erro ao carregar o versículo.";
    console.error(e);
  }
  loading.value = false;
});
</script>

<template>
  <div>
    <h2>
      {{ props.livro.toUpperCase() }} {{ props.capitulo }}:{{ props.numero }}
      ({{ props.versao }})
    </h2>

    <div v-if="loading">Carregando versículo...</div>

    <p v-else-if="erro">{{ erro }}</p>

    <p v-else class="versiculo-texto">
      {{ dados.versiculo }}
    </p>

    <p>
      <router-link
        :to="`/versao/${props.versao}/${props.livro}/${props.capitulo}`"
      >
        Voltar aos versículos
      </router-link>
    </p>
  </div>
</template>

<style scoped>
.versiculo-texto {
  font-size: 18px;
  margin-top: 15px;
  line-height: 1.6;
}
</style>
