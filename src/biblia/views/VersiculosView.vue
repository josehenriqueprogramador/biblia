<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getVersiculos } from "../services/api";

const router = useRouter();

const props = defineProps({
  versao: String,
  livro: String,
  capitulo: String,
});

const dados = ref(null);
const loading = ref(true);

onMounted(async () => {
  dados.value = await getVersiculos(props.versao, props.livro, props.capitulo);
  loading.value = false;
});
</script>

<template>
  <div>
    <h2>
      {{ props.livro.toUpperCase() }} {{ props.capitulo }} — Versículos ({{ props.versao }})
    </h2>

    <div v-if="loading">Carregando...</div>

    <ul v-else>
      <li
        v-for="(_, idx) in dados.versiculos"
        :key="idx"
        class="verso-item"
        style="cursor: pointer; padding: 8px 0; font-size: 22px;"
        @click="router.push(`/versao/${props.versao}/${props.livro}/${props.capitulo}/${idx + 1}`)"
      >
        {{ idx + 1 }}
      </li>
    </ul>

    <p>
      <router-link :to="`/versao/${props.versao}/${props.livro}`">Voltar</router-link>
    </p>
  </div>
</template>
