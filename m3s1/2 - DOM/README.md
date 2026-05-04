# 🌐 JavaScript Fundamentals — Manipulación del DOM

## 🎯 Objetivo

Este módulo introduce la manipulación del **DOM (Document Object Model)** usando JavaScript, integrando conceptos previamente aprendidos (funciones, asincronía, eventos) en un flujo real de frontend.

El objetivo no es solo “cambiar HTML”, sino entender **cómo funciona una interfaz dinámica** desde la lógica hasta la representación visual.

---

## 🧠 Enfoque

Aquí comienza el verdadero desarrollo frontend.

En este módulo aprenderás a:

* Conectar lógica (JavaScript) con interfaz (HTML)
* Responder a eventos del usuario
* Consumir datos externos (API)
* Renderizar contenido dinámicamente en el DOM

> ⚠️ Este punto marca la transición de “aprender lenguaje” a “construir interfaces”.

---

## 📂 Estructura del módulo

```bash
/dom-manipulation
│
├── index.html     → Estructura base de la interfaz
├── script.js      → Lógica, eventos y consumo de API
└── README.md      → Documentación del módulo
```

---

## 🔗 API utilizada

Se utiliza la API pública de Rick and Morty API para obtener información de personajes.

* Endpoint base: `https://rickandmortyapi.com/api/character`
* Datos: nombre, imagen, especie, estado

---

## ⚙️ Flujo de la aplicación

El comportamiento del sistema sigue este flujo:

```text
Usuario hace click
        ↓
Evento capturado (addEventListener)
        ↓
Función asincrónica (fetch)
        ↓
Respuesta de la API
        ↓
Transformación de datos
        ↓
Actualización del DOM (render)
```

Este flujo es la base de prácticamente cualquier aplicación frontend moderna.

---

## 🧩 Conceptos clave

### 🔹 1. El DOM como estructura

El navegador convierte el HTML en un árbol de nodos manipulables desde JavaScript.

### 🔹 2. Selección de elementos

```js
const element = document.getElementById("id");
```

Permite acceder a nodos específicos del DOM.

---

### 🔹 3. Eventos

```js
button.addEventListener("click", handler);
```

Conecta la interacción del usuario con la lógica.

---

### 🔹 4. Manipulación

```js
element.innerHTML = "...";
```

Permite actualizar contenido dinámicamente.

> ⚠️ Esto reemplaza nodos existentes, no “agrega visualmente”.

---

### 🔹 5. Asincronía real

```js
const res = await fetch(url);
```

El frontend depende constantemente de datos externos.

---

## 🧪 Ejercicios guiados (modo bootcamp)

> ⚠️ No avances si no completas cada nivel. Aquí se construye criterio.

---

### 🟢 Nivel 1 — Fundamentos del DOM

**Objetivo:** Entender selección y render básico.

1. Cambia el texto inicial del contenedor con JS
2. Renderiza un personaje estático (sin API)
3. Modifica estilos desde JS (clases)

---

### 🟡 Nivel 2 — Eventos

**Objetivo:** Controlar interacción del usuario.

4. Cambia el contenido al hacer click
5. Agrega un botón “Limpiar tarjeta”
6. Desactiva el botón mientras carga

---

### 🟠 Nivel 3 — API + asincronía

**Objetivo:** Integrar datos reales.

7. Consumir un personaje aleatorio
8. Manejar errores de red
9. Mostrar mensaje de carga (“Loading…”)

---

### 🔵 Nivel 4 — Render dinámico

**Objetivo:** Escalar manipulación del DOM.

10. Mostrar 3 personajes simultáneamente
11. Renderizar lista en lugar de tarjeta
12. Crear función reutilizable `renderCharacter`

---

### 🟣 Nivel 5 — Pensamiento frontend

**Objetivo:** Separación de responsabilidades.

13. Separar lógica de fetch y render
14. Evitar duplicación de código
15. Refactorizar sin usar `innerHTML` (usar `createElement`)

---

## 🧱 Buenas prácticas

* ✅ Separar lógica (datos) de presentación (DOM)
* ✅ Manejar errores siempre
* ✅ Evitar manipulación innecesaria del DOM
* ✅ Usar funciones pequeñas y reutilizables

---

## ⚠️ Errores comunes

* ❌ Manipular el DOM dentro de múltiples funciones sin control
* ❌ No manejar estados (loading, error)
* ❌ Reescribir todo el DOM en cada interacción
* ❌ Mezclar lógica de negocio con render

---

## 🚧 Alcance

Este módulo **no cubre aún**:

* Manejo de estado complejo
* Componentización
* Routing
* Frameworks (React, Vue, etc.)

---

## 🧭 Siguiente paso

El siguiente módulo llevará esto a un nivel superior:

* Estado en frontend
* Componentes reutilizables
* Estructura tipo SPA
* Primer proyecto completo

---

## 🧠 Nota final

Manipular el DOM no es difícil.
Hacerlo bien, escalable y mantenible, sí lo es.

Este módulo no busca que “funcione”, sino que entiendas **por qué funciona**.

---
