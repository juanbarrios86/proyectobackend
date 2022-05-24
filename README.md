# Curso Backend Coderhouse- MERN Stack: Proyecto Final 

## E-commerce project - Desarrollo de backend de una aplicación de e-commerce para poder vender productos de un rubro a elección.

## Features

 - **Express** : Framework utilizado.
 - **MongoDB** :  Base de datos utilizada.
 - **Mongoose** Biblioteca para crear las conexiones con las base de datos con Express.
 - **Bcrypt** : Utilizado para encriptar las contraseñas.
 - **JWT** : Generador de Token para los inicio de sesión
 - **EJS**: Utilizado para las vistas que tiene el sistema.
 - **Nodemailer**: Utilizado para enviar correos
 - **Socket.io**: Utilizado para el chat.



## Features

 - **Express** : web application framework
 - **MongoDB** :  NOSql Database
 - **Mongoose** library that creates a connection between MongoDB and Express
 - **Nodemailer**: Mail manager
 - **EJS**: templating language for the sing up, login and chat views
 - **JWT** : Authorization token generator
 - **Bcrypt** : password encryptor
 - **Socket.io**: library for real-time web applications. Used for the chat
### Pasos de instalación del proyecto


- Descargar versión de [Visual Studio Code compatible con su computadora](https://code.visualstudio.com/download).

- Descargar versión de [Node compatible con su computadora](https://nodejs.org/en/download/).

- Descargar el repositorio o clonarlo

- Desde un terminal desde la ruta raíz del repositorio ejecutar el siguiente comando:
```bash
npm install
```

- Crear un archivo en la raíz llamado .env con los siguientes datos:


**MONGO_DB_URI**=Dirección de la base de datos Mongo Atlas
**CORS=***
**PORT=**Definición del puerto. Puede ser 8080 por ejemplo
**JWT_PRIVATE_KEY=**Definición de la clave privada. Puede ser "miclaveprivada"
**COOKIE_MAX_AGE=**Tiempo de duración de la cookie en milisegundos. Puede ser 10 minutos por ejemplo "600000"

**MAIL_ETH_HOST=**"smtp.ethereal.email"
**MAIL_ETH_PORT=**587
**MAIL_ETH_USER=**'benny.hintz69@ethereal.email'
**MAIL_ETH_PASS=**'contraseña'

Se pueden craer una cuenta para obterner los datos de servidor de correo (MAIL_ETH_) en [Ethereal](https://ethereal.email/create).

- Luego de instalar todas sus dependencias y tener el archivo env. Ejecutar el comando:
```bash
npm start
```

- Al acceder a través del explorador a http://localhost:8080/ nos va a redirección a http://localhost:8080/login permitir iniciar sesión o crear un nuevo usuario. Una vez que iniciamos sesión nos va a mostrar el token que nos generó. La proxima vez que ingresemos a la misma ruta, nos va a redireccionar a http://localhost:8080/products

- Para acceder al chat primero vamos tener que iniciar sesión como en el paso anterior y luego vamos a escribir la siguiente ruta http://localhost:8080/chat Desde aquí vamos a poder ver los mensajes generales y en el caso de ser el usuario administrador, vamos a poder responder los mensajes también.

El usuario administrador es administrador@coder y su contraseña es password.01


to sign up. Then login to get the token. You can try the chat in the web, going to localhost:8080/chat. To try the products, carts and orders endpoints, read the  _[Endpoints Documentation](https://documenter.getpostman.com/view/17950634/UVyvutr4)_ 
5. If you login with user admin@admin, password "admin", yo can answer the chat messages as if you were the administrator


