# Cascarrias migracion web

Base inicial para migrar el sitio en una segunda fase sin tocar la web activa.

## Estructura

- `index.html`: portada con secciones principales.
- `que-es-cascarrias.html`: explicacion del proyecto.
- `noticias.html`: listado de publicaciones.
- `noticias/`: detalle de cada noticia.
- `recursos.html`: catalogo de materiales.
- `recursos/`: fichas de documental, guia y archivo.
- `contacto.html`: datos y canales de contacto.
- `licencias.html`: condiciones de uso de contenidos.
- `styles.css`: estilos globales.
- `app.js`: menu responsive.

## Publicar en un nuevo repositorio de GitHub

1. Crea un repositorio nuevo (ejemplo: `cascarrias-web-next`).
2. Copia este contenido al repo nuevo.
3. Ejecuta:

```bash
git init
git add .
git commit -m "Base inicial migracion web"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/cascarrias-web-next.git
git push -u origin main
```

## Vista previa local

Puedes abrir `index.html` directamente en navegador o usar un servidor estatico.
