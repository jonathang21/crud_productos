# crud_productos
Prueba técnica

Para que funcione la aplicacion se debe instalar lo siguiente:
> npm install -g json server

> npm install create-react-app -g

> create-react-app prueba_konecta //esta es la carpeta donde esta app de react

ejecutar los siguientes comandos dentro de la carpeta de la app de react
> npm run

> npm start

> npm install axios --save //para instalar el cliente para conectar con php

no es necesario ejecutar los comandos de creat-react, ya que la carpeta fue subida completamente a git.
en el caso de no funcionar hacer una copia de la carpeta prueba_conecta y ejecutar los comandos 
para instalar la app de react y crear la carpeta, la caperta que se elimino solo copiar la informacion de las carpetas public y src
y copiarlas en la app de react (en la carpeta nueva que se creo cuando se volvio a instalar la app)

Ademas de lo anterior se debe tener instalado xampp para activar el apache y el mysql

en el archivo src/Actions/Actions.js estan las conexiones para los archivos de php, ahi modificar las rutas de localhost, en 
caso de que apache no corra por el puerto 8585 (tenia los otros puertos ocupados)

en el archivo base_datos_insertar.txt que se encuentra en la raiz esta el insert de base de datos para guardar la informacion
los productos
