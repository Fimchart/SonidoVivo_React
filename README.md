# 🎸 Sonido Vivo - E-commerce de Instrumentos Musicales

| Campo | Detalle |
| :--- | :--- |
| **Alumnos** | Thomas Escobar, Matias Pavez |
| **Docente** | Cristian Vega |
| **Asignatura** | Desarrollo Fullstack II — DSY1104 |
| **Stack** | React 19 · Vite · TypeScript · React Router · Bootstrap · Context API |
| **Calidad** | Vitest + React Testing Library · 17 Pruebas Unitarias · Cobertura ~62% |
| **Entrega** | Evaluación Parcial 2 (EP2) · Repositorio GitHub + Documento de Testing |

Este proyecto es una aplicación web SPA (Single Page Application) desarrollada para la asignatura **Desarrollo Fullstack II**. Consiste en la migración y evolución de un sitio web estático a una moderna aplicación en **React**, utilizando **Vite** y **TypeScript**, aplicando buenas prácticas de arquitectura, patrones de diseño y pruebas unitarias.

## 🚀 Tecnologías Utilizadas

*   **Core:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
*   **Enrutamiento:** [React Router DOM](https://reactrouter.com/)
*   **Estilos:** [Bootstrap 5](https://getbootstrap.com/) + CSS Modular
*   **Pruebas:** [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [jsdom](https://github.com/jsdom/jsdom)
*   **Cobertura:** `@vitest/coverage-v8`

## ✨ Características Principales

1.  **Catálogo Interactivo:** Listado de más de 50 productos musicales con filtros de búsqueda en tiempo real y filtrado por categoría.
2.  **Vista de Detalle:** Página individual para cada producto mediante parámetros de ruta (`/producto/:id`).
3.  **Autenticación de Usuarios:** Registro e inicio de sesión con validaciones de formato (correo, longitud de contraseña) y persistencia simulada en `localStorage`.
4.  **Carrito de Compras (Lógica de Negocio):** Los usuarios pueden agregar productos al carrito, pero **solo si han iniciado sesión** previamente.
5.  **Panel de Administración (CRUD):** Vista protegida para administradores que permite Crear, Leer, Actualizar y Eliminar productos del catálogo.
6.  **Diseño Responsivo:** Interfaz adaptada para móviles, tablets y computadoras utilizando el sistema de grid de Bootstrap.

## 🏗️ Arquitectura y Patrones de Diseño

El proyecto fue construido siguiendo estándares profesionales de React:

### Atomic Design
La interfaz está dividida en componentes reutilizables:
*   **Átomos (`/atoms`):** Elementos básicos e indivisibles (Ej: `Boton.tsx`, `Input.tsx`).
*   **Moléculas (`/molecules`):** Combinación de átomos con una función específica (Ej: `CardProducto.tsx`, `CampoFormulario.tsx`).
*   **Organismos (`/organism`):** Componentes complejos que forman secciones de la página (Ej: `Navbar.tsx`, `Footer.tsx`).
*   **Páginas (`/pages`):** Vistas completas que agrupan organismos y se conectan al enrutador.

### Patrón de Diseño: Provider Pattern (Context API)
Para manejar el estado global y evitar el *prop drilling* (pasar propiedades por múltiples niveles), se implementó el **Provider Pattern**:
*   `AuthContext`: Gestiona el estado de la sesión del usuario.
*   `CartContext`: Gestiona los productos en el carrito y las reglas de negocio.
*   `productoService`: Patrón Repositorio para centralizar la lógica del CRUD de los productos simulando una API.

## 📦 Instalación y Ejecución Local

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Fimchart/SonidoVivo_React
2. Instala las dependencias:
   ```bash
   npm install
   npm install react-boostrap
   npm install react-router-dom
   npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom @vitest/coverage-v8
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:5173`.

## 🧪 Pruebas Unitarias y Cobertura

El proyecto cuenta con 17 pruebas unitarias distribuidas en 3 archivos, abarcando el servicio CRUD, renderizado de componentes y validaciones de formularios.

Para ejecutar las pruebas en modo vigilancia (Watch):
```bash
npm run test
```

Para generar el reporte de cobertura (se creará una carpeta `/coverage` con un `index.html` interactivo):
```bash
npm run coverage
```

**Resumen de Pruebas:**
*   `producto.Service.test.ts`: 7 pruebas (CRUD completo, búsquedas y casos borde).
*   `UI.test.tsx`: 5 pruebas (Renderizado de tarjetas, formato de precios, props y enlaces).
*   `Auth.test.tsx`: 5 pruebas (Validación de campos vacíos, formato de correo, contraseñas seguras y coincidentes).

---
*Proyecto desarrollado para la Evaluación Parcial 2 (EP2) de la carrera de Ingeniería en Informática - Duoc UC.*
