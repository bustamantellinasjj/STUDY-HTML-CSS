const app = document.getElementById("app");

// ======================
// ROUTER
// ======================
function router() {
  const hash = location.hash || "#/";

  if (hash === "#/") return renderHome();
  if (hash === "#/characters") return renderCharacters();
  if (hash === "#/about") return renderAbout();

  return renderNotFound();
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

// ======================
// VISTAS
// ======================

function renderHome() {
  app.innerHTML = `
    <h2 class="text-2xl font-bold mb-4">Home</h2>
    <p>Bienvenido a la SPA. Aquí estamos simulando navegación sin recargar la página.</p>
  `;
}

function renderAbout() {
  app.innerHTML = `
    <h2 class="text-2xl font-bold mb-4">About</h2>
    <p>Esta aplicación está construida sin frameworks para entender cómo funciona una SPA internamente.</p>
  `;
}

function renderNotFound() {
  app.innerHTML = `
    <h2 class="text-2xl font-bold text-red-400">404</h2>
    <p>Ruta no encontrada</p>
  `;
}

// ======================
// API + VISTA DINÁMICA
// ======================

async function renderCharacters() {
  app.innerHTML = `<p>Cargando...</p>`;

  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();

    app.innerHTML = `
      <h2 class="text-2xl font-bold mb-4">Characters</h2>
      <div class="grid grid-cols-2 gap-4">
        ${data.results.map(char => `
          <div class="bg-gray-800 p-4 rounded">
            <img src="${char.image}" />
            <h3 class="font-bold">${char.name}</h3>
          </div>
        `).join("")}
      </div>
    `;

  } catch (error) {
    app.innerHTML = `<p>Error cargando datos</p>`;
  }
}

// Ejercicios (nivel SPA)
// Agregar ruta #/contact
// Crear loader reutilizable
// Manejar error global
// Paginación en characters
// Crear navegación activa (link seleccionado)
// Separar vistas en archivos
// Crear mini estado global (ej: favoritos)
// Evitar re-render innecesario
// Reemplazar innerHTML por nodos
// Crear componente reutilizable de tarjeta