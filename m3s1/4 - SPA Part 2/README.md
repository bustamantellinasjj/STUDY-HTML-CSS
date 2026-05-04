# 🧩 JavaScript Fundamentals — SPA Part 2 (Componentes + Storage)

## 🎯 Objetivo

Este módulo lleva la SPA a un nivel superior introduciendo:

* **Composición de UI mediante “componentes” (sin frameworks)**
* **Manejo de estado en memoria**
* **Persistencia con `localStorage` y `sessionStorage`**

El propósito es entender cómo se organizan aplicaciones frontend modernas antes de abstraer estos conceptos con librerías como React o Vue.

---

## 🧠 Enfoque

Aquí no “imitamos” frameworks; construimos los principios que los hacen posibles:

* Componentes como funciones puras (UI = f(datos))
* Flujo de datos unidireccional
* Separación entre **estado**, **render** y **eventos**
* Persistencia del lado del cliente

> ⚠️ Este módulo consolida el paso de una SPA básica a una **arquitectura mantenible**.

---

## 📂 Estructura del módulo

```bash id="7c2kqv"
/spa-part-2
│
├── index.html     → Layout persistente (header + contenedor dinámico)
├── app.js         → Router, estado, storage, componentes y vistas
└── README.md      → Documentación del módulo
```

---

## 🧩 Arquitectura

### 🔹 Layout persistente

* `header` → navegación
* `main (#app)` → zona de render dinámico

### 🔹 Router

Controla la navegación mediante `hash`:

```text id="n2t3b8"
#/              → Home
#/characters    → Listado
#/favorites     → Favoritos
```

### 🔹 Estado (in-memory)

```js id="w9m1sr"
const state = {
  characters: []
};
```

Fuente de verdad durante la ejecución.

### 🔹 Storage (persistencia)

* `localStorage` → datos persistentes (favoritos)
* `sessionStorage` → datos por sesión (última visita)

### 🔹 Componentes (funciones)

Funciones que reciben datos y retornan UI:

```js id="k3z0ha"
function CharacterCard(character) {
  return `...`;
}
```

### 🔹 Vistas

Orquestan datos + componentes para renderizar pantallas completas.

---

## ⚙️ Flujo de la aplicación

```text id="z8x4pa"
Usuario navega (click → hashchange)
        ↓
Router decide vista
        ↓
( Opcional ) Fetch API
        ↓
Datos → estado
        ↓
Estado → componentes
        ↓
Render en #app
        ↓
Usuario interactúa (eventos)
        ↓
Actualización de estado / storage
        ↓
Re-render
```

---

## 🧠 Conceptos clave

### 🔹 1. Componentes sin framework

* Reciben datos (props)
* No manejan estado interno complejo
* Retornan HTML (string)

> 🧠 Piensa: **UI = función de estado**

---

### 🔹 2. Composición

```js id="c6r2dy"
state.characters.map(CharacterCard).join("")
```

Construcción de interfaces a partir de piezas reutilizables.

---

### 🔹 3. Estado

* Vive en memoria (`state`)
* Se actualiza manualmente
* No hay reactividad automática

> ⚠️ Cada cambio requiere un nuevo render

---

### 🔹 4. Persistencia

#### 🟢 localStorage

* Persiste entre sesiones
* Uso: favoritos

#### 🔵 sessionStorage

* Se borra al cerrar la pestaña
* Uso: última visita

---

### 🔹 5. Separación de responsabilidades

* Router → navegación
* Estado → datos
* Componentes → UI
* Storage → persistencia
* Vistas → orquestación

---

## 🔗 Integración con API

Se utiliza la API pública de Rick and Morty API para poblar el estado y renderizar personajes.

Esto replica un patrón real:

* Obtener datos externos
* Persistir parcialmente
* Renderizar dinámicamente

---

## 🧪 Ejercicios guiados (modo bootcamp)

> ⚠️ Nivel progresivo. No avances sin completar cada bloque.

---

### 🟢 Nivel 1 — Componentes

1. Crear un componente `Button` reutilizable
2. Extraer `CharacterCard` a una función más limpia
3. Evitar lógica dentro del template

---

### 🟡 Nivel 2 — Eventos

4. Reemplazar `onclick` inline por `addEventListener`
5. Crear sistema de eventos centralizado
6. Mostrar feedback visual en acciones (sin `alert`)

---

### 🟠 Nivel 3 — Storage

7. Implementar eliminar favoritos
8. Evitar duplicados correctamente
9. Persistir configuración (ej: tema oscuro)

---

### 🔵 Nivel 4 — Estado

10. Crear función `setState()` manual
11. Centralizar mutaciones de estado
12. Evitar acceso directo a `state` desde múltiples puntos

---

### 🟣 Nivel 5 — Arquitectura

13. Separar `components`, `views`, `services`, `store`
14. Render parcial (no re-render total)
15. Crear un mini sistema de “component lifecycle”

---

## 🧱 Buenas prácticas

* ✅ Componentes pequeños y reutilizables
* ✅ Estado centralizado
* ✅ Separar render de lógica
* ✅ Manejar persistencia explícitamente
* ✅ Evitar efectos colaterales innecesarios

---

## ⚠️ Errores comunes

* ❌ Convertir componentes en funciones gigantes
* ❌ Mezclar estado con render
* ❌ No sincronizar UI con storage
* ❌ Abusar de `innerHTML` sin control
* ❌ No controlar duplicados en favoritos

---

## 🚧 Alcance

Este módulo **no incluye aún**:

* Reactividad automática
* Virtual DOM
* Hooks / lifecycle real
* State managers avanzados

---

## 🧭 Siguiente paso

A partir de aquí, tienes base sólida para:

### 🔹 Opción 1 — Profundizar en JS

* Estado avanzado
* Event bus
* Render optimizado
* Arquitectura modular

### 🔹 Opción 2 — Frameworks

* React (componentes reales + hooks)
* Vue (reactividad declarativa)

---

## 🧠 Nota final

Si entiendes este módulo, ya comprendes:

* Qué es un componente realmente
* Qué es estado
* Cómo fluye la información en una app

Los frameworks no eliminan estos conceptos —
**los hacen más eficientes y declarativos**.

Tu ventaja ahora es clara: sabes qué ocurre detrás.

---
