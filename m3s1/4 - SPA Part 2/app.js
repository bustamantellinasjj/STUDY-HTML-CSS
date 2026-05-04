const app = document.getElementById("app");

// =====================
// STORAGE
// =====================
const storage = {
  getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  },

  saveFavorites(favs) {
    localStorage.setItem("favorites", JSON.stringify(favs));
  },

  setLastVisit() {
    sessionStorage.setItem("lastVisit", new Date().toLocaleString());
  },

  getLastVisit() {
    return sessionStorage.getItem("lastVisit");
  }
};

// =====================
// STATE
// =====================
const state = {
  characters: [],
};

// =====================
// COMPONENTS
// =====================

function CharacterCard(character) {
  return `
    <div class="bg-gray-800 p-4 rounded">
      <img src="${character.image}" class="mb-2"/>
      <h3 class="font-bold">${character.name}</h3>
      <button onclick="addToFavorites(${character.id})"
        class="mt-2 bg-indigo-500 px-2 py-1 rounded">
        ⭐ Favorito
      </button>
    </div>
  `;
}

function FavoritesList() {
  const favs = storage.getFavorites();

  if (!favs.length) {
    return `<p>No hay favoritos</p>`;
  }

  return favs.map(f => `
    <div class="bg-gray-800 p-2 rounded">
      ${f.name}
    </div>
  `).join("");
}

function Layout(title, content) {
  return `
    <h2 class="text-2xl font-bold mb-4">${title}</h2>
    ${content}
  `;
}

// =====================
// VIEWS
// =====================

function renderHome() {
  storage.setLastVisit();

  const lastVisit = storage.getLastVisit();

  app.innerHTML = Layout("Home", `
    <p>Bienvenido</p>
    <p class="text-gray-400">Última visita: ${lastVisit || "Primera vez"}</p>
  `);
}

async function renderCharacters() {
  app.innerHTML = "Cargando...";

  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  state.characters = data.results;

  app.innerHTML = Layout("Characters", `
    <div class="grid grid-cols-3 gap-4">
      ${state.characters.map(CharacterCard).join("")}
    </div>
  `);
}

function renderFavorites() {
  app.innerHTML = Layout("Favoritos", FavoritesList());
}

// =====================
// ACTIONS
// =====================

window.addToFavorites = function(id) {
  const favs = storage.getFavorites();
  const character = state.characters.find(c => c.id === id);

  if (!favs.some(f => f.id === id)) {
    favs.push(character);
    storage.saveFavorites(favs);
    alert("Agregado a favoritos");
  }
};

// =====================
// ROUTER
// =====================

function router() {
  const hash = location.hash || "#/";

  if (hash === "#/") return renderHome();
  if (hash === "#/characters") return renderCharacters();
  if (hash === "#/favorites") return renderFavorites();

  app.innerHTML = "404";
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);

// Ejercicios (nivel serio)
// Eliminar favoritos
// Evitar alert, usar UI feedback
// Persistir más datos (ej: tema oscuro)
// Crear componente botón reutilizable
// Separar components en archivo
// Evitar onclick inline (usar addEventListener)
// Sincronizar favoritos en tiempo real
// Crear “estado global” más robusto
// Render parcial (no todo el app)
// Crear sistema de eventos propio