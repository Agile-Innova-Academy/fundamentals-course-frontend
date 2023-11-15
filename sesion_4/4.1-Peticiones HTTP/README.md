# Peticiones #

## ¿Qué es?
Protocolo de transferencia de hipertexto (HTTP) es la vida de la web. Se utiliza cada vez que se transfiere un documento o se realiza una solicitud.
![alt-text](https://vignette.wikia.nocookie.net/central/images/b/b2/Cliente-servidor-http.png/revision/latest?cb=20170829163147)


**Arquitectura cliente servidor**
Arquitectura Cliente servidor. Esta arquitectura consiste básicamente en un cliente que realiza peticiones a otro programa (el servidor) que le da respuesta

**Verbos HHTP**
Los verbos HTTP le indican al servidor qué hacer con los datos identificados por la URL.Cada solicitud especifica un cierto verbo o método HTTP, en el encabezado de la solicitud. Esta es la primera palabra de todos las mayúsculas en el encabezado de la solicitud. 

**Enpoint**
>Las URL son para identificar las cosas en las que desea operar. Decimos que cada URL identifica un recurso. Estas son exactamente las mismas URL que se asignan a las páginas web. De hecho, una página web es un tipo de recurso. Tomemos un ejemplo más exótico y consideremos nuestra aplicación de ejemplo, que gestiona la lista de clientes de una empresa:



# ¿Qué es una Petición HTTP (y Cómo Funciona)?
Piensa en una petición HTTP como si tu navegador se conectara al servidor y le pidiera un recurso específico o le enviara datos. Hay varios tipos de métodos de petición HTTP, que modifican completamente el tipo de respuesta que obtienes del servidor. Los más comunes son:

- **GET.** Es el método de petición HTTP más utilizado con diferencia. Una petición GET solicita al servidor una información o recurso concreto. Cuando te conectas a un sitio web, tu navegador suele enviar varias peticiones GET para recibir los datos que necesita para cargar la página.

- **HEAD.** Con una petición HEAD, sólo recibes la información de la cabecera de la página que quieres cargar. Puedes utilizar este tipo de petición HTTP para conocer el tamaño de un documento antes de descargarlo mediante GET.

- **POST.** Tu navegador utiliza el método de petición HTTP POST cuando necesita enviar datos al servidor. Por ejemplo, si rellenas un formulario de contacto en un sitio web y lo envías, estás utilizando una petición POST para que el servidor reciba esa información.

- **PUT.** Las peticiones PUT tienen una funcionalidad similar a la del método POST. Sin embargo, en lugar de enviar datos, utilizas las peticiones PUT para actualizar información que ya existe en el servidor final.

Hay otros tipos de peticiones HTTP que puedes utilizar, como los métodos **DELETE, PATCH y OPTIONS.** Sin embargo, son relativamente poco frecuentes en el uso cotidiano.

Presentar una solicitud HTTP implica enviar un mensaje al servidor receptor en un formato específico. El servidor devuelve una respuesta y el cliente realiza la acción correspondiente. Por ejemplo, puede cargar recursos o redirigirte a otra página.

Cuando obtienes un error HTTP, suele ser porque el servidor no puede satisfacer tu petición. El código de error que obtienes debería explicar el motivo. Algunas de las causas más comunes de los errores HTTP son la imposibilidad de conectarse al servidor y encontrar los recursos que se han solicitado.

**JavaScript tiene excelentes módulos y métodos para hacer solicitudes HTTP que pueden ser usados para enviar o recibir datos desde un recurso del lado del servidor.**

## Ajax

Ajax es la forma tradicional de hacer una solicitud HTTP asincrónica. Los datos pueden ser enviados usando el método HTTP POST y recibidos usando el método HTTP GET. Echemos un vistazo y hagamos una solicitud GET. Utilizaré JSONPlaceholder, una API REST online gratuita para desarrolladores que devuelve datos aleatorios en formato JSON.

Para hacer una llamada HTTP en Ajax, es necesario inicializar un nuevo método XMLHttpRequest(), especificar el endpoint URL y el método HTTP (en este caso GET). Finalmente, usamos el método open() para unir el método HTTP y el punto final de la URL y llamar al método send() para lanzar la solicitud.

Registraremos la respuesta HTTP en la consola utilizando la propiedad XMLHTTPRequest.onreadystatechange que contiene el manejador de eventos que se llamará cuando se dispare el evento readystatechanged.

            const Http = new XMLHttpRequest();
            const url='https://jsonplaceholder.typicode.com/posts';
            Http.open("GET", url);
            Http.send();

            Http.onreadystatechange = (e) => {
            console.log(Http.responseText)
            }

Si ves la consola de tu navegador, te devolverá una matriz de datos en formato JSON. ¿Pero cómo sabremos si la solicitud se ha hecho? En otras palabras, ¿cómo podemos manejar las respuestas con Ajax?

La propiedad de onreadystatechange tiene dos métodos, readyState y status que nos permiten comprobar el estado de nuestra solicitud.

            const Http = new XMLHttpRequest();
            const url='https://jsonplaceholder.typicode.com/posts';
            Http.open("GET", url);
            Http.send();

            Http.onreadystatechange = funtion() => {
                if(this.readState ==4 && this.status == 200){
                    console.log(Http.responseText);
                }
            }
Si readyState es igual a 4, significa que la solicitud está completada. La propiedad readyState tiene 5 respuestas. Aprenda más sobre esto aquí.

Aparte de hacer directamente una llamada Ajax con JavaScript, hay otros métodos más poderosos de hacer una llamada HTTP como $.Ajax que es un método de jQuery. Ahora hablaré de eso.



### Métodos de jQuery

jQuery tiene muchos métodos para manejar fácilmente las solicitudes HTTP. Para poder usar estos métodos, necesitarás incluir la biblioteca jQuery en tu proyecto.

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

### $.ajax
jQuery Ajax es uno de los métodos más simples para hacer una llamada HTTP.

        $(document).ready(function(){
              const Url='https://jsonplaceholder.typicode.com/posts';
              $('.btn).click(function(){
                $.ajax({
                    url: Url,
                    type: "GET",
                    success: function(result){
                        console.log(result)
                    }, 
                    error: function(error){
                        console.log(`Error ${error}`)
                    }
                })
              })
        })

El método $.ajax toma muchos parámetros, algunos de los cuales son obligatorios y otros opcionales. Contiene dos opciones de callback success y error para manejar la respuesta recibida.

### $.get
El método $.get se utiliza para ejecutar solicitudes GET. Se necesitan dos parámetros: el endpoint y una función de callback.

        const Url='https://jsonplaceholder.typicode.com/posts';
        $('.btn).click(function(){
                 $.get( Url, function(data, status){
                        console.log(`${data}`)
                })
        }
               

### $.post
El método $.post es otra forma de enviar datos al servidor. Toma tres parámetros: la url, los datos que quieres publicar y una función callback.

         const Url='https://jsonplaceholder.typicode.com/posts/';
         const data = {
            name: "Yudith",
            id: 25
         }
        $('.btn).click(function(){
                 $.post( Url, data, function(data, status){
                        console.log(`${data} y el status es: ${status}`)
                })
        }
 

### $.getJSON
El método $.getJSON sólo recupera datos que están en formato JSON. Toma dos parámetros: la url y una función callback.

             const Url='https://jsonplaceholder.typicode.com/posts';
             $('.btn).click(function(){
                 $.getJSON( Url, function(result){
                        console.log(result)
                })
        }

## fetch
fetch es una nueva y potente web API que permite hacer solicitudes asincrónicas. De hecho, fetch es una de las mejores y mi forma favorita de hacer una solicitud HTTP. Devuelve una "Promesa (Promise)", que es una de las grandes características de ES6. Si no estás familiarizado con el ES6, puedes leer sobre él en este artículo. Promesas nos permite manejar la solicitud asíncrona de una manera más inteligente. Echemos un vistazo a cómo funciona técnicamente el fetch.

         const Url='https://jsonplaceholder.typicode.com/posts';
        fetch(Url)
         .then(data => {return data.json()})
         .then(res => {console.log(rse))})

El fetch() devolverá una que será aceptada cuando reciba una respuesta y sólo será rechazada si hay un fallo de red o si por alguna razón no se pudo completar la petición. El modo más habitual de manejar las promesas es utilizando .then(). Esto se suele reescribir de la siguiente forma, que queda mucho más simple:

        fetch("/robots.txt")
        .then(function(response) {
            /** Código que procesa la respuesta **/
        });

Lo primero, y más habitual, suele ser indicar el método HTTP a realizar en la petición. Por defecto, se realizará un GET, pero podemos cambiarlos a HEAD, POST, PUT o cualquier otro tipo de método. En segundo lugar, podemos indicar objetos para enviar en el body de la petición, así como modificar las cabeceras en el campo headers:

        Opciones de la petición (valores por defecto)
        const options = {
        method: "GET"
        };

        // Petición HTTP
        fetch("/robots.txt", options)
        .then(response => response.text())
        .then(data => {
            /** Procesar los datos **/
        });


        const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
        };


### Ejemplo utilizando promesas

Lo que vemos a continuación sería un ejemplo un poco más completo de todo lo que hemos visto hasta ahora:

- Comprobamos que la petición es correcta con response.ok
- Utilizamos response.text() para procesarla
- En el caso de producirse algún error, lanzamos excepción con el código de error
- Procesamos los datos y los mostramos en la consola
- En el caso de que la sea rechazada, capturamos el error con el catch

            // Petición HTTP
            fetch("/robots.txt")
            .then(response => {
                if (response.ok)
                return response.text()
                else
                throw new Error(response.status);
            })
            .then(data => {
                console.log("Datos: " + data);
            })
            .catch(err => {
                console.error("ERROR: ", err.message)
            });

De hecho, podemos refactorizar un poco este ejemplo para hacerlo más legible. Creamos la función isResponseOk() para procesar la respuesta (invirtiendo el condicional para hacerlo más directo). Luego, los .then() y .catch() los utilizamos con una arrow function para simplificarlos:

            const isResponseOk = (response) => {
            if (!response.ok)
                throw new Error(response.status);
            return response.text()
            }

            fetch("/robots.txt")
            .then(response => isResponseOk(response))
            .then(data => console.log("Datos: ", data))
            .catch(err => console.error("ERROR: ", err.message));

Sin embargo, aunque es bastante común trabajar con promesas utilizando .then(), también podemos hacer uso de async/await para manejar promesas, de una forma un poco más directa.

### Ejemplo utilizando Async/await

Utilizar async/await no es más que lo que se denomina azúcar sintáctico, es decir, utilizar algo visualmente más agradable, pero que por debajo realiza la misma tarea. Para ello, lo que debemos tener siempre presente es que un await sólo se puede ejecutar si esta dentro de una función definida como async.

En este caso, lo que hacemos es lo siguiente:

- Creamos una función request(url) que definimos con async
- Llamamos a fetch utilizando await para esperar y resolver la promesa
- Comprobamos si todo ha ido bien usando response.ok
- Llamamos a response.text() utilizando await y devolvemos el resultado

        const request = async (url) => {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error("WARN", response.status);
        const data = await response.text();
        return data;
        }

        const resultOk = await request("/robots.txt");
        const resultError = await request("/nonExistentFile.txt");

Una vez hecho esto, podemos llamar a nuestra función request y almacenar el resultado, usando nuevamente await. Al final, utilizar .then() o async/await es una cuestión de gustos y puedes utilizar el que más te guste.


### **Status code**
>Los códigos de respuesta HTTP estandarizan una forma de informar al cliente sobre el resultado de su solicitud.
Estos son algunos códigos de respuesta HTTP, que a menudo se utilizan con REST:

**200 OK**
Este código de respuesta indica que la solicitud se ha realizado correctamente.

**201 Created**
Esto indica que la solicitud tuvo éxito y se creó un recurso. Se utiliza para confirmar el éxito de una solicitud PUT o POST.

**400 Bad Request**
La solicitud fue malformada. Esto sucede especialmente con las solicitudes POST y PUT, cuando los datos no pasan la validación o están en el formato incorrecto.

**404 Not Found**
Esta respuesta indica que no se pudo encontrar el recurso necesario. Esto generalmente se devuelve a todas las solicitudes que apuntan a una URL sin recurso correspondiente.

**401 Unauthorized**
Este error indica que debe realizar la autenticación antes de acceder al recurso.

**405 Method Not Allowed**
El método HTTP utilizado no es compatible con el de este recurso.

**409 Conflict**
Esto indica un conflicto. Por ejemplo, está utilizando una solicitud PUT para crear el mismo recurso dos veces.

**500 Internal Server Error**
Cuando todo lo demás falla; En general, se utiliza una respuesta 500 cuando el procesamiento falla debido a circunstancias imprevistas en el lado del servidor, lo que provoca el error del servidor.