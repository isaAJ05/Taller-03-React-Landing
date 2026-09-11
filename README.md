# 🚀 ReactAcademy Landing

Landing page de "ReactAcademy" recreada con **React + Vite**, como parte del **Taller 03** del curso de Desarrollo de Aplicaciones Web Frontend.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)

## 📋 Sobre el taller

El ejercicio consistía en recrear una landing a partir de una imagen de referencia, decidiendo por cuenta propia cómo dividirla en componentes de React. No tenía que quedar idéntica al píxel, pero sí conservar los mismos elementos, el mismo orden y una jerarquía visual equivalente.

## 🧩 Qué construí

Dividí la landing en 6 componentes independientes, cada uno con su propio archivo `.jsx` y `.css`:

| Componente | Qué hace |
|---|---|
| `Header` | Marca "ReactAcademy" y menú de navegación |
| `Hero` | Título principal, descripción y botón que lleva a la sección de cursos |
| `Section` | Título de la sección y la grilla de cursos, generada con `.map()` |
| `Card` | Tarjeta individual de curso — recibe `icon`, `title`, `description` y `level` por **props**, se reutiliza 4 veces |
| `Counter` | Contador de estudiantes interesados, con `useState` |
| `Footer` | Pie de página |

Los datos de los cursos viven en `src/data/courses.js` como un array; `Section` los recorre con `.map()` y le pasa cada objeto a `Card` como props, usando el `id` de cada curso como `key`.

## 🎨 Estilo

Reutilicé la paleta de colores de un proyecto anterior mío (un formulario de login), adaptándola a tonos morados para esta landing, usando variables CSS (`:root`) para mantener todo consistente entre componentes.

## 🛠️ Cómo correrlo

```bash
git clone <url-de-este-repo>
cd react-academy-landing
npm install
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

## Resultado
<img width="1763" height="1273" alt="captura ok" src="https://github.com/user-attachments/assets/b5c9ebe4-268a-4325-b67a-c504f39f88b1" />

