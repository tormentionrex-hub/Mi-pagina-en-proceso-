# Guía para subir tu proyecto a GitHub

Sigue estos pasos para subir los cambios al repositorio: [Mi-pagina-en-proceso-](https://github.com/tormentionrex-hub/Mi-pagina-en-proceso-.git).

## 1. Preparar Git (solo la primera vez)
Si aún no has inicializado Git en esta carpeta, abre una terminal en la raíz del proyecto y ejecuta:
```bash
git init
git remote add origin https://github.com/tormentionrex-hub/Mi-pagina-en-proceso-.git
```

## 2. Guardar tus cambios
Para preparar y guardar los archivos que hemos modificado:
```bash
# Añade todos los archivos al área de preparación
git add .

# Crea un "punto de guardado" (commit) con un mensaje descriptivo
git commit -m "Corrección de errores en app.js y organización de traducciones"
```

## 3. Subir a GitHub
Para enviar tus cambios al servidor:
```bash
# Asegúrate de estar en la rama principal (normalmente 'main' o 'master')
git branch -M main

# Sube los cambios
git push -u origin main
```

> [!TIP]
> Si GitHub te pide autenticación, puedes usar el navegador o un Token de Acceso Personal (PAT).

## ¿Cómo verificar que funcionó?
Una vez ejecutados los comandos, visita [tu repositorio en GitHub](https://github.com/tormentionrex-hub/Mi-pagina-en-proceso-) para ver los archivos actualizados.
