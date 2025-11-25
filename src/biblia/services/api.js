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
  return r.data;  // <-- AQUI ESTÁ A CORREÇÃO
}

// -------- Versículo unico
export async function getVersiculoUnico(versao, livro, cap, numero) {
  const url = `https://biblia-desktop-fastapi.onrender.com/api/versiculo/${versao}/${livro}/${cap}/${numero}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error("Erro API versículo único");
  return await r.json();
}

export default api;
