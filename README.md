# Curso Backend Coderhouse- MERN Stack: Proyecto Final 

## E-commerce project - Desarrollo de backend de una aplicación de e-commerce para poder vender productos de un rubro a elección.

## Dependencias utilizadas

 - **Express** : Framework utilizado.
 - **Mongoose** Biblioteca para crear las conexiones con las base de datos con Express.
 - **Bcrypt** : Utilizado para encriptar las contraseñas.
 - **JWT** : Generador de Token para los inicio de sesión
 - **EJS**: Utilizado para las vistas que tiene el sistema.
 - **Nodemailer**: Utilizado para enviar correos
 - **Socket.io**: Utilizado para el chat.


### Pasos de instalación del proyecto


- Descargar versión de [Visual Studio Code compatible con su computadora](https://code.visualstudio.com/download).

- Descargar versión de [Node compatible con su computadora](https://nodejs.org/en/download/).

- Descargar el repositorio o clonarlo

- Desde un terminal desde la ruta raíz del repositorio ejecutar el siguiente comando:
```bash
npm install
```

- Crear un archivo en la raíz llamado .env con los siguientes datos:


  - **MONGO_DB_URI**=Dirección de la base de datos Mongo Atlas.

  - **PORT**=Definición del puerto. Puede ser 8080 por ejemplo.

  - **JWT_PRIVATE_KEY**=Definición de la clave privada. Puede ser "miclaveprivada".

  - **COOKIE_MAX_AGE**=Tiempo de duración de la cookie en milisegundos. Puede ser 10 minutos por ejemplo "600000"

  - **MAIL_ETH_HOST=**"smtp.ethereal.email"

  - **MAIL_ETH_PORT=** 587

  - **MAIL_ETH_USER=**'benny.hintz69@ethereal.email'

  - **MAIL_ETH_PASS=**'contraseña'

Se pueden craer una cuenta para obterner los datos de servidor de correo (MAIL_ETH_) en [Ethereal](https://ethereal.email/create).

- Luego de instalar todas sus dependencias y tener el archivo env. Ejecutar el comando:
```bash
npm start
```

### Uso del sistema a través de explorador

- Al acceder a través del explorador a http://localhost:8080/ nos va a redirección a http://localhost:8080/login permitir iniciar sesión o crear un nuevo usuario. Una vez que iniciamos sesión nos va a mostrar el token que nos generó. La proxima vez que ingresemos a la misma ruta, nos va a redireccionar a http://localhost:8080/products

  - ![alt text](https://raw.githubusercontent.com/juanbarrios86/proyectobackend/main/Readme/frontlogin.JPG)

**El usuario administrador es administrador@coder y su contraseña es password.01**

- Para acceder al chat primero vamos tener que iniciar sesión como en el paso anterior y luego vamos a escribir la siguiente ruta http://localhost:8080/chat Desde aquí vamos a poder ver los mensajes generales y en el caso de ser el usuario administrador, vamos a poder responder los mensajes también.

  - ![alt text](https://raw.githubusercontent.com/juanbarrios86/proyectobackend/main/Readme/frontchat.JPG)


### Uso del sistema a través de POSTMAN

Para acceder por POSTMAN también es importante iniciar sesión como explicamos en el punto anterior, ya que vamos a necesitar el token para acceder a las rutas.

En el siguiente ejemplo vamos a ver cómo iniciamos sesión a través de POSTMAN:
- ![alt text](https://raw.githubusercontent.com/juanbarrios86/proyectobackend/main/Readme/iniciosesionpostman.JPG)

Aquí podemos observar como resultado el token esperado.

Una vez que tenemos el token lo vamos a poder utilizar para acceder a las rutas. Tendríamos que definir el Header la Key "Authorization" y en Value la palabra "bearer" un espacio y el token que obtuvimos anteriormente. En este casa vamos a trabajar con un GET la ruta **products**, de un producto especifico:

- ![alt text](https://raw.githubusercontent.com/juanbarrios86/proyectobackend/main/Readme/autorization.JPG)

De esta forma accedimos a la información. Sin el token no nos hubiera mostrado nada, nos daría un error de clave inválida. Esta es una forma de poder acceder a las rutas para probar el sistema, pero existen muchas formas. Lo importante es tener en cuenta el tema del token.

A continuación se detallan todas las rutas disponibles:

**USUARIOS**
- ![alt text](https://raw.githubusercontent.com/juanbarrios86/proyectobackend/main/Readme/login.JPG)

**PRODUCTOS**
- ![alt text](https://raw.githubusercontent.com/juanbarrios86/proyectobackend/main/Readme/products.JPG)

**CARRITO**
- ![alt text](https://raw.githubusercontent.com/juanbarrios86/proyectobackend/main/Readme/cart.JPG)

**ORDENES**
- ![alt text](https://raw.githubusercontent.com/juanbarrios86/proyectobackend/main/Readme/order.JPG)

**CHAT**
- ![alt text](https://raw.githubusercontent.com/juanbarrios86/proyectobackend/main/Readme/chat.JPG)


### Creador

Creado por Juan Barrios
2021-2022 - [Ver Linkedin](https://www.linkedin.com/in/juancarlosbarrios/) .
