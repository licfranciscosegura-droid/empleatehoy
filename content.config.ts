import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const empleos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/empleos' }),
  schema: z.object({
    titulo:z.string().min(3), empresa:z.string().min(2), pais:z.string().min(2),
    ciudad:z.string().default('No especificada'), categoria:z.string(),
    modalidad:z.enum(['Remoto','Presencial','Híbrido']).default('Presencial'),
    tipo:z.string().default('Tiempo completo'), salario:z.string().optional(),
    fecha:z.string(), vence:z.string().optional(), descripcion:z.string().min(15),
    requisitos:z.array(z.string()).default([]), aplicarUrl:z.string().url(),
    fuente:z.string().optional(), destacado:z.boolean().default(false),
    idioma:z.string().optional(), demostracion:z.boolean().default(false)
  })
});
export const collections={empleos};
