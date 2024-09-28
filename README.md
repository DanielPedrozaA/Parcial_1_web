# Parcial_1_web

## Como correr el programa

1. Se tiene que clonar el repositorio de github para tenerlo de manera local, se puede hacer con el comando
git clone ("URL del repositorio")

2. Se tienen que instalar todas las dependencias en el programa para que funciones los import se hace con el codigo como: React, Boostrap, react-i18next y react-router-dom
npm install

3. Ya con todos los pasos hechos, el siguiente es asegurar que estas en la carpeta adecuada y abrir la terminal y usar el comando:
npm start

Con esto se puede ejectuar la aplicacion y empezar a utilizar, el programa se correra en http://localhost:3000 generalmente.

## Reporte de decisiones y proceso de desarrollo

Se desarrolló utilizando React y Bootstrap para la interfaz, con react-router-dom para la gestión de rutas y react-i18next para la internacionalización.

### Login

* Se utilizó el hook useState para manejar los inputs de correo y contraseña. Las validaciones verifican que el correo tenga el formato correcto y que la contraseña tenga al menos 8 caracteres. Si todo es válido, el usuario es redirigido a la página principal.

* Utilicé useNavigate de react-router-dom para redirigir al usuario desde el login a la página principal, después de que se hayan presionado el boton submit y se haya validado todos los datos.

### Pagina Principal

* Se muestra la información del usuario utilizando un componente llamado UserProfile la cual saca la informacion de /infomracion/userInfo. La información incluye nombre completo, mejores tiempos en ciclismo, natación y carrera.

* Esta se implementa en el componente UserImages, donde se muestran imágenes organizadas por deporte ciclismo, carrera, natación, cada uno de estos solo puede ser una columna de 2x5. Cada imagen tiene un modal que se abre al hacer clic y muestra la imagen en grande con más detalles.

### Internacionalizacion

* Para este proceso se utilizo react-i18next que permite soportar múltiples idiomas en este caso inglés y español. Los textos de la aplicación están guardados en archivos JSON para cada idioma en este caso estan en en.json y sp.json, y la librería permite cambiar dinámicamente entre los dos idiomas sin recargar la página, esta vez se uso con un boton que cambiara el idioma de la pagina.

* useTranslation es un hook que se utilizó en cada componente que tiene textos que deben ser traducidos, como los botones de la interfaz, las etiquetas de los formularios y los textos en la galería.

### Routes

* Se utilizo react-router-dom, para poder gestionar la forma de navegacion entre login y el home, en este caso como siempre quiero que cuando la pagina carge, la ruta para el componente login es "/" la cual siempre es la inicial y la de home es con /home, estas dos se definieron con routes, y adentro de estas esta el componente route es que se usa para renderizar el componente asociado.

### Diseño 

* Para esto use boostarp ya que tiene mayoria de las cosas ya hechas y es mas facil de utilizar. Se utilizaron las clases como btn, card, modal, y d-flex para crear un  responsivo. Los botones y las tarjetas de las imágenes están estilizados con estas clases.


