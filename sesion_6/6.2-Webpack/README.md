# Webpack

Webpack es un paquete de módulos estáticos para aplicaciones JavaScript modernas. Cuando webpack procesa su aplicación, crea internamente un gráfico de dependencia a partir de uno o más puntos de entrada y luego combina todos los módulos que necesita su proyecto en uno o más paquetes, que son activos estáticos desde los que servir su contenido.

Desde la versión 4.0.0, webpack no requiere un archivo de configuración para agrupar su proyecto. Sin embargo, es increíblemente configurable para adaptarse mejor a sus necesidades.

Para comenzar, solo necesita comprender sus conceptos básicos :

- Entrada
- Producción
- Cargadores
- Complementos
- Modo

Para comprender mejor las ideas detrás de los paquetes de módulos y cómo funcionan bajo el capó, consulte estos recursos:

- [Empaquetar manualmente una aplicación](https://www.youtube.com/watch?v=UNMkLHzofQI)
- [Codificación en vivo de un paquete de módulos simple](https://youtu.be/Gc9-7PBqOC8)
- [Explicación detallada de un paquete de módulos simple](https://github.com/ronami/minipack.git)

### Entrada
Un punto de entrada indica qué módulo debe usar el paquete web para comenzar a construir su gráfico de dependencia interna. Webpack descubrirá de qué otros módulos y bibliotecas depende ese punto de entrada (directa e indirectamente).

De forma predeterminada, su valor es ./src/index.js, pero puede especificar puntos de entrada diferentes (o múltiples) configurando una entrypropiedad en la configuración del paquete web . Por ejemplo:

webpack.config.js

        module.exports = {
        entry: './path/to/my/entry/file.js',
        };

### Producción
La propiedad de salida le dice al paquete web dónde emitir los paquetes que crea y cómo nombrar estos archivos. El valor predeterminado es ./dist/main.jspara el archivo de salida principal y la ./dist carpeta para cualquier otro archivo generado.

Puede configurar esta parte del proceso especificando un output campo en su configuración:

webpack.config.js

            const path = require('path');

            module.exports = {
            entry: './path/to/my/entry/file.js',
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: 'my-first-webpack.bundle.js',
            },
            };

En el ejemplo anterior, usamos output.filenamelas output.path propiedades y para decirle a webpack el nombre de nuestro paquete y dónde queremos que se emita. En caso de que se pregunte si el módulo de ruta se importa en la parte superior, es un módulo central de Node.js que se usa para manipular rutas de archivos.

### Cargadores
Fuera de la caja, el paquete web solo comprende archivos JavaScript y JSON. Los cargadores permiten que el paquete web procese otros tipos de archivos y los convierta en módulos válidos que su aplicación puede consumir y agregar al gráfico de dependencia.

En un nivel alto, los cargadores tienen dos propiedades en la configuración de su paquete web:

- La test propiedad identifica qué archivo o archivos deben transformarse.
- La use propiedad indica qué cargador debe usarse para realizar la transformación.

webpack.config.js

            const path = require('path');

            module.exports = {
            output: {
                filename: 'my-first-webpack.bundle.js',
            },
            module: {
                rules: [{ test: /\.txt$/, use: 'raw-loader' }],
            },
            };

La configuración anterior ha definido una rules propiedad para un solo módulo con dos propiedades requeridas: testy use. Esto le dice al compilador de webpack lo siguiente:

***"Hola, compilador de paquetes web, cuando encuentre una ruta que se resuelva en un archivo '.txt' dentro de una declaración require()/ , use para transformarlo antes de agregarlo al paquete".importraw-loader***

## Advertencia
Es importante recordar que al definir reglas en la configuración de su paquete web, las está definiendo bajo module.rules y no rules. Para su beneficio, webpack le avisará si esto se hace incorrectamente.

Tenga en cuenta que cuando use expresiones regulares para hacer coincidir archivos, es posible que no lo cite. es decir /\.txt$/, no es lo mismo que '/\.txt$/'o "/\.txt$/". El primero le indica a webpack que haga coincidir cualquier archivo que termine con .txt y el segundo le indica a webpack que haga coincidir un solo archivo con una ruta absoluta '.txt'; Es probable que esta no sea tu intención.

### Complementos
Si bien los cargadores se utilizan para transformar ciertos tipos de módulos, los complementos se pueden aprovechar para realizar una gama más amplia de tareas, como la optimización de paquetes, la gestión de activos y la inyección de variables de entorno.

Para usar un complemento, debe require() hacerlo y agregarlo a la plugins matriz. La mayoría de los complementos se pueden personalizar a través de opciones. Dado que puede usar un complemento varias veces en una configuración para diferentes propósitos, debe crear una instancia de él llamándolo con el newoperador.

webpack.config.js

            const HtmlWebpackPlugin = require('html-webpack-plugin');
            const webpack = require('webpack'); //to access built-in plugins

            module.exports = {
            module: {
                rules: [{ test: /\.txt$/, use: 'raw-loader' }],
            },
            plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
            };

En el ejemplo anterior, html-webpack-plugin genera un archivo HTML para su aplicación e inyecta automáticamente todos los paquetes generados en este archivo.

El uso de complementos en la configuración de su paquete web es sencillo. Sin embargo, hay muchos casos de uso que vale la pena explorar más a fondo. Obtenga más información sobre ellos aquí .

### Modo
Al establecer el mode parámetro en development, productiono none, puede habilitar las optimizaciones integradas de webpack que corresponden a cada entorno. El valor predeterminado es production.

            module.exports = {
            mode: 'production',
            };

Obtenga más información sobre la configuración del modo aquí y qué optimizaciones se realizan en cada valor.

### Compatibilidad del navegador

Webpack es compatible con todos los navegadores compatibles con ES5 (IE8 y anteriores no son compatibles). Webpack necesita Promisepara import() y require.ensure() . Si desea admitir navegadores más antiguos, deberá cargar un polyfill antes de usar estas expresiones.


**webpack.congif.js**

            const path = require("path");

            const html_webpack_plugin = require("html-webpack-plugin");
            const mini_css_extract_plugin = require("mini-css-extract-plugin");

            module.exports = {
                target: "web",
                entry: {
                    index: ["@babel/polyfill", "./src/app/index.js"],
                    home: ["@babel/polyfill", "./src/app/scripts/home.js"]
                },
                output: {
                    path: path.resolve( __dirname, "build" ),
                    filename: "js/[name].js"
                },
                devServer: {
                    port: 5500
                },
                module: {
                    rules: [
                        {
                            test: /\.css$/i,
                            use: [ mini_css_extract_plugin.loader, "css-loader" ]
                        },
                        {
                            test: /\.js$/i,
                            use: {
                                loader: 'babel-loader',
                                options: {
                                presets: ['@babel/preset-env']
                                }
                            },
                        }
                    ]
                },
                plugins: [
                    new html_webpack_plugin({
                        template: "./src/index.html",
                        chunks: [ "index" ],
                        minify: {
                            removeComments: true,
                            useShortDoctype: true
                        }
                    }),
                    new html_webpack_plugin({
                        template: "./src/pages/home.html",
                        filename: "pages/home.html",
                        chunks: [ "home" ],
                        minify: {
                            removeComments: true,
                            useShortDoctype: true
                        }
                    }),
                    new mini_css_extract_plugin({
                        filename: "css/index.css"
                    })
                ]
            }