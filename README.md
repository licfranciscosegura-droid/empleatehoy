# EmpléateHoy — Astro + Google Apps Script (preparado)

Portal internacional de empleos sin base de datos externa. Los empleos se guardan en `src/content/empleos/*.json` (Astro Content Collections).

## Instalar en StackBlitz
1. Crea un proyecto Astro y sustituye los archivos por los de este paquete (la carpeta `empleatehoy` es la raíz del proyecto).
2. Ejecuta `npm install` y `npm run dev`.
3. Para compilar: `npm run build`.

## Añadir empleos
Crea un archivo JSON único por vacante en `src/content/empleos/` con el esquema del archivo de ejemplo. **El ejemplo es ficticio** y no permite aplicar. Borra el ejemplo cuando incorpores ofertas reales.

Campos obligatorios: `titulo`, `empresa`, `pais`, `categoria`, `fecha` (YYYY-MM-DD), `descripcion`, `aplicarUrl`. Opcionales: `ciudad`, `modalidad` (Remoto, Presencial, Híbrido), `tipo`, `salario`, `vence`, `requisitos`, `fuente`, `destacado`, `idioma`.

## Automatización con Apps Script
La integración de Google Apps Script se hará en una fase posterior. Apps Script debe validar fuentes y vacantes, generar un JSON por oferta y realizar commits en GitHub mediante su API usando un token almacenado en las propiedades del script; el hosting (por ejemplo Cloudflare Pages) reconstruye Astro desde GitHub. No pongas claves en archivos del proyecto ni en el navegador.

**Limitaciones:** no hay base de datos de escritura en Astro. Las ofertas se actualizan cuando se hace un nuevo despliegue. Las vacantes vencidas se excluyen en cada compilación; para retirarlas a tiempo se necesitan despliegues periódicos o commits de limpieza. El proyecto no incluye scraping, fuentes laborales ni automatización ya conectada.
