# ⚡ JavaScript Fundamentals — Single Page Application (SPA)

## 🎯 Objetivo

Este módulo tiene como objetivo construir una **Single Page Application (SPA)** desde cero, utilizando únicamente JavaScript vanilla.

Aquí se integran todos los conceptos aprendidos previamente:

* Fundamentos del lenguaje
* Manipulación del DOM
* Asincronía (fetch, async/await)
* Eventos

El enfoque es entender **cómo funciona internamente una SPA**, sin depender de frameworks.

---

## 🧠 Enfoque

Este no es un proyecto “para que funcione”, es un proyecto para entender:

* Cómo se controla la navegación sin recargar la página
* Cómo se renderiza contenido dinámicamente
* Cómo se estructura una aplicación frontend básica
* Qué problemas resuelven frameworks como React o Vue

> ⚠️ Este módulo marca la transición de scripts aislados a aplicaciones completas.

---

## 📂 Estructura del módulo

```bash id="2r9wq1"
/spa-base
│
├── index.html     → Estructura base (layout persistente)
├── app.js         → Router, vistas y lógica principal
└── README.md      → Documentación del módulo
```

---

## 🧩 Arquitectura básica

La aplicación se compone de:

### 🔹 Layout persistente

* `header` → navegación
* `main (#app)` → contenedor dinámico

### 🔹 Router

Controla qué vista se renderiza según la URL (hash)

### 🔹 Vistas

Funciones que generan el contenido dinámico

### 🔹 Lógica

Consumo de API y transformación de datos

---

## 🔗 Navegación (Hash Routing)

Se utiliza el `hash` de la URL para simular rutas:

```text id="4lbv0n"
#/              → Home
#/characters    → Lista de personajes
#/about         → Información
```

Esto permite cambiar el contenido **sin recargar la página**.

---

## ⚙️ Flujo de la aplicación

```text id="k7l1pz"
Usuario hace click en navegación
        ↓
Cambia el hash (#/ruta)
        ↓
Evento "hashchange"
        ↓
Se ejecuta el router
        ↓
Se renderiza la vista correspondiente
        ↓
( Opcional ) Se consumen datos de una API
        ↓
Se actualiza el DOM
```

---

## 🧠 Conceptos clave

### 🔹 1. SPA (Single Page Application)

Aplicación web que:

* No recarga la página
* Renderiza contenido dinámicamente
* Controla navegación desde JavaScript

---

### 🔹 2. Router

```js id="m2q8px"
function router() {
  const hash = location.hash;
}
```

Determina qué vista mostrar.

---

### 🔹 3. Eventos del navegador

```js id="8g9lrm"
window.addEventListener("hashchange", router);
```

Permiten reaccionar a cambios en la URL.

---

### 🔹 4. Render dinámico

```js id="c0l2hy"
app.innerHTML = "...";
```

Actualiza la “pantalla” sin recargar.

---

### 🔹 5. Separación de responsabilidades

* Router → navegación
* Vistas → UI
* Lógica → datos

---

## 🔗 Consumo de API

Se integra la API pública de Rick and Morty API para obtener datos dinámicos en la vista de personajes.

Esto introduce un patrón real de aplicaciones frontend:

* Solicitar datos
* Procesarlos
* Renderizarlos

---

## 🧪 Ejercicios guiados (modo bootcamp)

> ⚠️ Este módulo requiere práctica activa. No avances sin completar cada nivel.

---

### 🟢 Nivel 1 — Routing básico

1. Crear una nueva ruta `#/contact`
2. Implementar vista 404 personalizada
3. Mostrar en consola la ruta actual

---

### 🟡 Nivel 2 — Render dinámico

4. Separar cada vista en funciones independientes
5. Evitar duplicación de HTML
6. Crear un layout reutilizable

---

### 🟠 Nivel 3 — API + asincronía

7. Mostrar loader antes de cargar datos
8. Manejar errores de red
9. Limitar la cantidad de personajes mostrados

---

### 🔵 Nivel 4 — Mejora de UX

10. Resaltar link activo en navegación
11. Agregar botón de recarga de datos
12. Implementar paginación básica

---

### 🟣 Nivel 5 — Arquitectura

13. Separar router en otro archivo
14. Crear funciones reutilizables (componentes)
15. Eliminar uso excesivo de `innerHTML`

---

## 🧱 Buenas prácticas

* ✅ Mantener funciones pequeñas y claras
* ✅ Separar lógica, vistas y navegación
* ✅ Manejar estados (loading, error, vacío)
* ✅ Evitar re-render innecesario

---

## ⚠️ Errores comunes

* ❌ Mezclar lógica y render en una sola función
* ❌ No manejar rutas inexistentes
* ❌ No controlar estados de carga
* ❌ Reescribir todo el DOM innecesariamente

---

## 🚧 Alcance

Este módulo **no cubre aún**:

* Estado global complejo
* Componentización avanzada
* Virtual DOM
* Frameworks

---

## 🧭 Siguiente paso

A partir de este punto, tienes dos caminos:

### 🔹 Profundizar en JavaScript

* Estado global
* Arquitectura modular
* Optimización del DOM

### 🔹 Migrar a frameworks

* React (componentes + estado)
* Vue (reactividad)
* Router avanzado

---

## 🧠 Nota final

Si entiendes este módulo, ya entiendes la base de cualquier framework moderno.

React, Vue o Angular no eliminan estos conceptos —
**los abstraen**.

Tu ventaja ahora es que sabes qué ocurre detrás.

---
