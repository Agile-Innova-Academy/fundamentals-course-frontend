# ¿Qué es Axios?
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