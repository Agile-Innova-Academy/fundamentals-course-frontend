# ¿Qué es Axios?

Imagina que estás enviando mensajes a tus amigos con una paloma mensajera, pero un día quieres algo más rápido y confiable. Ahí es donde entra Axios, ¡tu nuevo y rápido mensajero mágico en el mundo de la programación!

Axios es como un ayudante que lleva y trae mensajes entre tu aplicación web y otros lugares, como servidores en internet. ¿Recuerdas cuando quieres pedirle a tu mamá un vaso de leche y ella te lo trae? Axios hace algo similar, pero con datos para tu aplicación. Puedes pedirle a Axios que traiga información de un lugar lejano (como un servidor) y te la entrega para que puedas usarla en tu aplicación.

Es como si le dijeras a Axios: "¡Oye, quiero saber cuántos juguetes tiene mi amigo en su casa!", y Axios va rápidamente, pregunta a la casa de tu amigo y te trae la respuesta para que puedas usarla en tu juego.

En resumen, Axios es como tu mensajero mágico en el mundo de la programación que te ayuda a obtener y enviar información entre tu aplicación y otros lugares en internet. ¡Así puedes tener todos los datos que necesitas para que tu aplicación sea genial! 🚀✉️

## Axios a nivel Técnico 

Axios es un cliente HTTP basado en promesas node.js para el navegador. Es isomorfo (= puede ejecutarse en el navegador y nodejs con la misma base de código). En el lado del servidor usa el httpmódulo nativo node.js, mientras que en el cliente (navegador) usa XMLHttpRequests.

### Características

- Hacer XMLHttpRequests desde el navegador
- Hacer solicitudes http desde node.js
- Admite la API de Promise
 Interceptar solicitud y respuesta
- Transformar datos de solicitud y respuesta
- Cancelar solicitudes
- Transformaciones automáticas para datos JSON
- Soporte del lado del cliente para proteger contra XSRF

### Instalando
Usando npm:

            $ npm install axios
Usando glorieta:

            $ bower install axios
Usando hilo:

            $ yarn add axios
Usando jsDelivr CDN:

        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
Usando unpkg CDN:

        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

# API de Axios
Referencia de la API de Axios

Las solicitudes se pueden realizar pasando la configuración correspondiente a axios.

            axios(config)
            // Send a POST request
            axios({
            method: 'post',
            url: '/user/12345',
            data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
            }
            });

            // GET request for remote image in node.js
            axios({
            method: 'get',
            url: 'http://bit.ly/2mTM3nY',
            responseType: 'stream'
            })
            .then(function (response) {
                response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            });

            axios(url[, configuración])
            // Send a GET request (default method)
            axios('/user/12345');


## Solicitar alias de método
Para mayor comodidad, se han proporcionado alias para todos los métodos de solicitud admitidos.

- axios.request(config)
- axios.get(url[, configuración])
- axios.delete(url[, config])
- axios.head(url[, config])
- axios.options(url[, config])
- axios.post(url[, datos[, configuración]])
- axios.put(url[, datos[, configuración]])
- axios.patch(url[, datos[, configuración]])

- [Axios Promise](https://github.com/axios/axios#axiosputurl-data-config)
- [Axios](https://axios-http.com/docs/intro)
