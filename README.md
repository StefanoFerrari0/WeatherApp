# TP2 - Aplicación de Pronóstico del Tiempo

Seguí las instrucciones para configurar el entorno de desarrollo y comenzar a utilizar la aplicación.

## Configuración del Entorno

1. Crea un archivo en la carpeta raíz llamado `.env.local`.
2. Completa las siguientes variables de entorno en el archivo `.env.local` con los valores correspondientes:

```
VITE_WEATHER_API_KEY=
VITE_PORT_FRONTEND=3000
VITE_PORT_BACKEND=5000
VITE_MONGODB_URL=
VITE_LIMIT_HISTORY=5
```

En el aula de Google Classroom en el TPN2 se encuentra un archivo para rellenar las variables que estén vacías.

## Instalación y Ejecución del Proyecto

1. Abrí una terminal en la carpeta raíz del proyecto.
2. Ejecuta el comando `npm install` para instalar las dependencias necesarias.
3. Una vez completada la instalación, ejecuta el comando `npm run dev` para levantar el frontend.

4. Abrí una nueva terminal.
5. Navega hasta la carpeta `server` con el comando `cd ./server`.
6. Ejecuta el comando `npm install` para instalar las dependencias del backend.
7. Después de completar la instalación, levanta el backend con el comando `npm run start`.

## Acceso a la Aplicación

Ahora está todo configurado y podes acceder a la aplicación ingresando a `localhost:3000` en tu navegador web.