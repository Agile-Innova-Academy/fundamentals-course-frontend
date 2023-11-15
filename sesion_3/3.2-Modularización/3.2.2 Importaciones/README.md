# Importar módulos

En Javascript, podemos utilizar import para hacer la operación inversa a export. Si habíamos mencionado que con export ponemos datos o elementos de un fichero .js a disposición de otros, con import podemos cargarlos y utilizarlos en el código de nuestro fichero actual.

Existen varias formas de importar código utilizando la palabra clave import:

![import](https://storage.googleapis.com/academy-agile-innova-public/courses/fundamentals/Front-end/import.JPG)

Al igual que hacíamos en la exportación, también puedes renombrar elementos con import utilizando as seguido del nuevo nombre. Los import deben hacerse siempre desde las primeras líneas del fichero Javascript y no se pueden incluir dentro de bucles, funciones o determinados contextos.

### Importación con nombre

La forma más habitual de importar elementos es a través de la denominada importación nombrada, donde utilizamos la palabra clave import indicando el nombre de los elementos a importar en el interior de las llaves { }, todo ello desde el módulo de exportación del fichero file.js.

        import { nombre } from "./file.js";
        import { number, element } from "./file.js";
        import { brand as brandName } from "./file.js";

En este fragmento de código se realizan 3 importaciones:

- En la primera línea, estamos importando el elemento nombre desde el módulo del fichero file.js.
- En la segunda línea, importamos varios elementos: number y element.
- En la tercera línea, importamos el elemento brand, renombrándolo a brandName.

Todos ellos, deben haber sido exportados en el módulo de exportación del fichero file.js.

### Importación por defecto

Hasta ahora, hemos utilizado importaciones con nombre, donde indicamos en todo momento el nombre de los elementos que queremos importar. Sin embargo, si hemos visto el artículo de export en Javascript habremos comprobado que es posible exportar/importar elementos por defecto.

Una importación por defecto lo único que hace es buscar el elemento llamado default e importarlo con el nombre indicado en el import:

        import nombre from "./math.js";

Observa que en este caso, la diferencia es que no hemos indicado las llaves { } al indicar el nombre del elemento, lo que hará que importe el elemento default y lo renombre a nombre. En el caso de que no exista ninguna propiedad default en el módulo de exportación se generará un objeto vacío.

>***Las importaciones por defecto suelen estar ligeramente mal vistas por algunos desarrolladores. Una exportación nombrada suele ser más intuitiva y predecible a la hora de utilizar en nuestro código.***

### Importación masiva

Otra modalidad de importación interesante es aquella donde podemos hacer una importación masiva. Es decir, si utilizamos el símbolo * a la hora importar, estaremos indicando que se deben cargar todos los elementos del módulo de exportación del fichero indicado.

En esta modalidad, es obligatorio utilizar el as seguido del nombre del elemento, ya que debemos indicar un nombre para crear un objeto que contendrá todos los elementos importados:

        import * as module from "./file.js";

***En este caso, creamos un module que incluye todos los elementos del módulo de exportación de file.js.***

### Importación de código

Existe una última forma de importar código que no es tan frecuente encontrarla, al menos en el mundo de los frameworks Javascript. Sin embargo, si se utiliza bastante en el mundo de los Web Components.

Se trata de la importación de código sin importar elementos, simplemente ejecutando el código del fichero indicado:

        import "./math.js";

Si realizamos un import donde únicamente establecemos el fichero a importar, lo que estaremos haciendo es indicar que el navegador debe leer el código de ese fichero y procesarlo, sin importar ningún elemento como en los casos anteriores.

A efectos prácticos, esto sería exactamente lo mismo que si tuvieramos el código de ese otro fichero en el fichero actual, no obstante, de esta forma se puede organizar y separar en ficheros diferentes.


### Importaciones remotas

Aunque en los ejemplos anteriores siempre indicamos ficheros .js locales, también es posible indicar ficheros remotos, es decir, que estén en un dominio diferente al nuestro:

            import { ceil } from "https://unpkg.com/lodash-es@4.17.21/lodash.js";

Por ejemplo, en este caso, estamos descargando desde el dominio unpkg.com la librería lodash.js, desde la cuál importaremos el elemento ceil de su módulo de exportación.

Hay que tener en cuenta varias cosas de las importaciones remotas:

- **Disponibilidad:** Ten en mente que al hacer una importación remota dependemos del dominio indicado. Si dicho dominio no está disponible o no podemos conectar a él, no podremos descargar el fichero ni procesarlo, por lo que puede ser conveniente tener esos ficheros en nuestro sitio web.

- **Descarga:** Para importar el elemento del módulo indicado, primero es necesario descargar el fichero, por lo que si la velocidad de conexión es lenta y el tamaño del fichero .js es grande, puede ralentizar la carga de la página.

- **ECMAScript modules:** Ten en cuenta que para poder hacer importaciones de este tipo, es necesario que la librería utilice los módulos ESM. Existen repositorios como cdnjs.com, jsdelivr.com o skypack.dev donde puedes encontrar librerías y proyectos Javascript subidos a un CDN, listos para utilizar.

### Metadatos de módulos

Cuando nos encontramos en un fichero .js que es un módulo, podemos acceder a la propiedad import.meta, la cuál es un objeto que contiene metadatos del módulo en cuestión. Por ejemplo, una propiedad url que nos devuelve la ruta completa del módulo en cuestión:

        // main.js
        import module from "./module.js";

        // module.js
        console.log(import.meta);     // { url: "https://dominio.com/module.js" }

Esto puede ser realmente útil en ocasiones que queremos saber en que fichero nos encontramos en tiempo de ejecución.

### Bare imports

Como habrás comprobado, en todos los ejemplos de importación anteriores, hemos utilizado la palabra clave from seguida de la ubicación de un fichero Javascript. Estos ficheros siempre empezarán por . o por / si son ficheros locales, o por http si son ficheros remotos:

        "./math.js": El fichero math.js en la carpeta actual.
        "../math.js": El fichero math.js en la carpeta padre.
        "/math.js": El fichero math.js en la raíz del proyecto.
        "https://web.com/math.js": El fichero math.js está alojado en una web.

Sin embargo, existe un tipo de importación denominada bare import (imports desnudos), que son aquellos que se realizan indicando en from un que no comienza por ., / ni http, sino directamente por el nombre de una carpeta o paquete:

        import { Howler, Howl } from "howler";  // Bare import

En este ejemplo, en lugar de utilizar ./howler.js (o un nombre similar), se indica el string howler. Esta característica no es estándar y fue un invento popularizado por NodeJS a través de NPM.

Cuando usamos un bare import nos referimos a un paquete de npm, es decir, se buscará un paquete previamente instalado con npm con ese nombre en la carpeta node_modules, accediendo al fichero .js principal de dicho paquete. Si en nuestro código estamos utilizando este sistema, es muy probable que estemos utilizando algún bundler o automatizador como Webpack, Vite o similar. Tienes más información en Bare imports.

### Import Maps

Como hemos mencionado, los bare imports no son una característica estándar, sino que es algo propio de NodeJS, y es necesario para utilizarlo. Sin embargo, los bare imports son un mecanismo muy extendido y es muy probable que encontremos una gran cantidad de código que los utilice, por lo que dependemos de un alto porcentaje de código que los utiliza y que volverían inservible nuestro código si no estamos utilizando NodeJS.

Existe una estrategia denominada import maps que nos permite utilizar los bare imports sin necesidad de utilizar Node o NPM. Para ello, en nuestro archivo .html crearemos el siguiente código:

        <script type="importmap">
        {
            "imports": {
            "dayjs": "/node_modules/dayjs/esm/dayjs.js",
            "lodash": "/node_modules/lodash-es/lodash.js"
            }
        }
        </script>


# Import dinámico en Javascript

La palabra clave import que es lo que se conoce como un import estático, una forma de importar módulos de ficheros externos. Se colocan en la parte superior del fichero Javascript y son algo similar a lo siguiente:

        import { name } from "./module.js";     // Static import

Sin embargo, existe otro tipo de importación en Javascript, popularmente conocida como import dinámico (dynamic import), que tiene el siguiente aspecto, ligeramente diferente al anterior:

        import("./module.js")                   // Dynamic import
        .then(data => { /* ... */ });

En este segundo caso, el import() tiene unos paréntesis que lo diferencian del anterior, y por la existencia del .then() sabemos que nos devuelve una promesa, por lo que se trata de código asíncrono.


## Diferencias entre Import estático vs dinámico


**Los import estáticos** son muy útiles, pero tienen algunas desventajas si se presentan ciertos casos específicos. Los más frecuentes suelen ser los siguientes:

- Queremos importar un módulo si se cumple una determinada condición
- Queremos importar un módulo interpolando variables o constantes
- Queremos importar un módulo dentro de un ámbito específico
- Queremos importar un módulo desde un script normal (sin type="module")
- Queremos importar un fichero javascript (sin módulo) y ejecutarlo bajo demanda

En cada uno de estos casos, no se puede utilizar el import estático, pero si el import dinámico:

        // Opción 1: Se carga functions.js si se cumple la condición
        if (number > 42) {
        import("./functions.js")
            .then(module => module.func());
        }

        // Opción 2: Se carga functions.js interpolando la constante
        const filename = "functions";
        import(`./${filename}.js`)
        .then(module => module.func());

        // Opción 3: Se carga aditional.js sólo si el usuario hace click en el botón
        const button = document.querySelector("button.info");
        button.addEventListener("click", () => import("aditional.js"), { once: true });

**El import dinámico** nos permite indicar entre los paréntesis del import el nombre del archivo Javascript. A diferencia del import estático, este fichero no se cargará siempre y desde el principio, sino que sólo lo hará cuando se llegue a esta parte del código, siendo posible incluirla dentro de condicionales, funciones o lógica diversa.

***Si el archivo .js importado es un módulo, al trabajar con la promesa que devuelve simplemente accedemos a las propiedades o métodos que necesitemos. Por otro lado, si el archivo .js cargado no es un módulo, simplemente se ejecutará su contenido.***

Esto nos proporciona una característica muy interesante de cara a optimización y rendimiento, y es que es posible no importar (ni por lo tanto, procesar) ficheros con código Javascript hasta que ocurra una cierta condición, evento o acción, retrasando así la descarga, procesamiento y ejecución de código Javascript por parte del navegador hasta que sea necesario (o incluso nunca si no es necesario).

