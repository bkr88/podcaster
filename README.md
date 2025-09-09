# Podcaster

Ejercicio técnico para vacante de Frontend Developer en React.

Esta aplicación permite buscar y explorar podcasts, mostrando detalles y episodios de cada uno. El objetivo fue demostrar buenas prácticas en React moderno, manejo de estado remoto, testing y uso de componentes UI profesionales.

## Problemas

No pude conseguir la URL de cada podcast para poder asignarlo al elemento de <audio> y así poder reproducir el podcast, de resto creo que abarque todo.

## Stack y decisiones técnicas

- **React + TypeScript:** Para tipado estático y robustez.
- **Vite:** Por su rapidez en desarrollo y build.
- **MUI (Material UI):** Para construir una UI consistente y productiva. Estoy bastante familiarizado con ella y utilicé Grids, Tables, Cards, etc.
- **React Query (TanStack):** Para manejo eficiente de datos remotos y caché.
- **React Router:** Para navegación declarativa.
- **Testing Library + Vitest:** Para tests orientados al usuario y mocks de API.
- **ESLint:** Para mantener calidad y estilo de código.

## Estructura del proyecto

- `src/` — Código fuente de la aplicación.
  - `components/` — Componentes reutilizables.
  - `views/` — Vistas principales (páginas).
  - `helpers/` — Funciones auxiliares y llamadas a APIs.
  - `types/` — Tipos TypeScript.
- `public/` — Archivos estáticos.

## Buenas prácticas

- Componentes funcionales y hooks.
- Separación de lógica y presentación.
- Tipado estricto con TypeScript.
- Tests unitarios y de integración.
- Accesibilidad básica en formularios y navegación.

## Scripts principales

- `pnpm dev` — Inicia el servidor de desarrollo con HMR.
- `pnpm build` — Genera la build de producción.
- `pnpm preview` — Previsualiza la build de producción.
- `pnpm test` — Ejecuta los tests con Vitest.

## Testing

Se utiliza **Vitest** y **React Testing Library** para los tests.  
Los tests pueden mockear llamadas a la API y hooks de React Router.

```bash
npm install
npm test
```

## Cómo correr el proyecto

```bash
npm install
npm dev
```
