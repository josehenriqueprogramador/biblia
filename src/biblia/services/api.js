import axios from "axios";

const api = axios.create({
  baseURL: "https://biblia-desktop-fastapi.onrender.com",
  timeout: 10000
});

// -------- Versões
export async function getVersoes() {
  const r = await api.get("/api/versoes");
  return r.data.versoes;
}

// -------- Livros
export async function getLivros(versao) {
  const r = await api.get(`/api/livros/${versao}`);
  return r.data.livros;
}

// -------- Capítulos
export async function getCapitulos(versao, livro) {
  const r = await api.get(`/api/capitulos/${versao}/${livro}`);
  return r.data;
}

// -------- Versículos
export async function getVersiculos(versao, livro, capitulo) {
  const r = await api.get(`/api/versiculos/${versao}/${livro}/${capitulo}`);
  return r.data.versiculos;
}

export default api;
