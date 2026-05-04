const card = document.getElementById("card");
const button = document.getElementById("btn");
const clearBtn = document.getElementById("clear-btn");
const filterSelect = document.getElementById("filter-species");

// Generar ID aleatorio
function getRandomId() {
  return Math.floor(Math.random() * 826) + 1;
}

// Consumir API (5 personajes en paralelo)
async function fetchCharacter() {
  const ids = Array.from({ length: 5 }, getRandomId);

  // Loader mientras carga
  card.innerHTML = `<p class="text-gray-400 col-span-5">Cargando...</p>`;

  try {
    const promises = ids.map(id =>
      fetch(`https://rickandmortyapi.com/api/character/${id}`).then(r => r.json())
    );
    const characters = await Promise.all(promises);

    // Filtrar por especie si hay una seleccionada
    const species = filterSelect.value;
    const filtered = species
      ? characters.filter(c => c.species === species)
      : characters;

    if (filtered.length === 0) {
      card.innerHTML = `<p class="text-gray-400 col-span-5">No hay personajes de esa especie. Intenta de nuevo.</p>`;
      return;
    }

    renderCharacters(filtered);
  } catch (error) {
    // Error visual
    card.innerHTML = `<p class="text-red-400 col-span-5">⚠️ Error al cargar personajes. Revisa tu conexión.</p>`;
    console.error(error);
  }
}

// Renderizar en DOM (tarjetas con episodios)
function renderCharacters(characters) {
  card.innerHTML = characters.map(character => `
    <div class="bg-gray-700 p-4 rounded shadow-md text-center">
      <img src="${character.image}" class="mx-auto rounded mb-4"/>
      <h3 class="text-xl font-bold">${character.name}</h3>
      <p class="text-gray-400">${character.status} - ${character.species}</p>
      <p class="text-gray-500 text-sm mt-1">Episodios: ${character.episode.length}</p>
    </div>
  `).join('');
}

// Limpiar tarjetas
function clearCards() {
  card.innerHTML = `<p class="text-gray-400">Haz clic en el botón para cargar un personaje</p>`;
}

// Eventos
button.addEventListener("click", fetchCharacter);
clearBtn.addEventListener("click", clearCards);
