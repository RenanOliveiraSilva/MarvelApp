import axios from 'axios';
import md5 from 'blueimp-md5';

const PUBLIC_KEY = '3d3ffc8b19bc8f1a69484306f9aa3b9d';
const PRIVATE_KEY = '8d4cc4a0de50058ce0ddcd81180fb1f16f831cd1';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
});

function getAuthParams() {
  const ts = Date.now().toString();
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  return { ts, apikey: PUBLIC_KEY, hash };
}

export async function fetchCharacters(orderBy = 'name') {
  const params = {
    ...getAuthParams(),
    limit: 50,
    offset: 0,
    orderBy,
};

  const response = await api.get('/characters', { params });
  return response.data.data.results;
}

export async function fetchSeries(orderBy = '-startYear') {
  try {
    const params = {
      ...getAuthParams(),
      limit: 50,
      orderBy, // 👈 agora você pode ordenar por qualquer campo
    };

    const response = await api.get('/series', { params });
    return response.data.data.results;
  } catch (error) {
    console.error('Erro ao buscar séries:', error.response?.data || error.message);
    return [];
  }
}

export async function fetchComics(orderBy = '-onsaleDate') {
  try {
    const params = {
      ...getAuthParams(),
      limit: 20,
      orderBy, // pode ser 'title' ou '-onsaleDate'
    };

    const response = await api.get('/comics', { params });
    return response.data.data.results;
  } catch (error) {
    console.error('Erro ao buscar quadrinhos:', error.response?.data || error.message);
    return [];
  }
}

export async function fetchHeroByName(name) {
  try {
    const params = {
      ...getAuthParams(),
      nameStartsWith: name,
      limit: 1,
    };
    const response = await api.get('/characters', { params });
    return response.data.data.results[0] || null;
  } catch (error) {
    console.error('Erro ao buscar herói por nome:', error);
    return null;
  }
}
