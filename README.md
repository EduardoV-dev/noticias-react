# Noticias React

## Esta es una aplicación creada usando ReactJS.

La aplicación se encarga de consumir la API de [NewsAPI](https://newsapi.org), esta aplicación no está desplegada en algún hosting debido a que la naturaleza de la API de forma gratuita, no permite peticiones que no sean desde el Localhost.

## Características

Mostrar las noticias con respecto al país y categoría seleccionadas, se muestra una imagen de la noticia, si no posee una, se pone una por defecto, se muestra la información de la noticia; Titulo, descripción, Fuente y autor, este último se sustituye por anónimo en el caso de no existir autor. Cada noticia se puede ver en la pagina fuente de donde se extrajo toda la información.

Se implementó un modo "Luz" y "Oscuro" para la interfaz de usuario, la cuál se puede configurar con un solo click, esta configuración del modo, perdura aunque se salga de la página donde la aplicación pueda estar alojada.

## Pasos para configurar y correr el proyecto

* Clonar el repositorio donde este se encuentra alojado
* Entrar a la terminal e instalar las dependencias necesarias usando el comando npm install o npm i
* Ejecutar el comando npm start para lanzar la aplicación.