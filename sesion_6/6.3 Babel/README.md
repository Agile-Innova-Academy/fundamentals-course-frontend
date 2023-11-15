# Babel

## ¿Qué es Babel?
Babel es un "compilador" (o transpilador) para JavaScript. Básicamente permite transformar código escrito con las últimas y novedosas características de JavaScript y transformarlo en un código que sea entendido por navegadores más antiguos.

### ¿Por qué es necesario transformar el código JavaScript?
JavaScript es un lenguaje que no para de evolucionar y que cada año agrega nuevas características a su estándar. El estándar de JavaScript, conocido como ECMAScript.

ECMAScript (o abreviado ES) es la especificación en la que se basa JavaScript. ES nace de la organización ECMA International, cuyo objetivo es desarrollar estándares y reportes técnicos para facilitar el uso de tecnologías de la información.

Esta organización se constituye de varios equipos siendo el TC39 el equipo encargado de revisar, proponer y definir las características que el estándar tendrá cada año.

Lamentablemente la velocidad de actualización del estándar no es la misma que la velocidad de adopción de los navegadores, es decir, los navegadores no siempre pueden implementar las nuevas características en sus engine, ni tampoco hacerlo retrocompatible con versiones más antiguas. Además, tampoco es posible asegurar que todos los usuarios estén utilizando navegadores modernos o de última generación lo que imposibilita tener la seguridad de que podamos hacer uso de las nuevas características del lenguaje en todas partes.

### ¿Qué ventajas tiene el utilizar las nuevas características propuestas por ECMA?

Las nuevas características y "habilidades" que JavaScript provee cada año son sobre todo ventajas para ti como desarrollador, ya que te proporciona de herramientas más poderosas y expresivas para implementar soluciones a problemas complejos. Algunas de las características se han ido agregando con los años son:

- Funciones flechas (arrow functions)
- Plantillas Literales (Template Literals)
- Map y Set
- Let y Const
- Clases
- Encadenamiento Opcional (Optional Chaining)
- Operador Fusión Nula (Nullish Coalescing)
- Métodos Privados (ES2021)
- Operador de Asignación Local (ES2021)
- [Puedes ver más en la especificación actual de ECMA en:](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) 

## ¿Cómo funciona Babel?

Revisaremos de forma breve como babel funciona convirtiendo tu código de una versión a otra.

Considera este pequeño trozo de código JavaScript

        const sum = (a, b) => a + b
Ahora considera que por alguna razón necesitas que este se ejecute en un navegador antiguo, entonces deberás transformarlo a

            'use strict';
            function sum(a,b) {
                return a + b;
            }

**¿Cómo se logra esto?**

Es un proceso que se ejecuta en al menos 3 procesos

**Parsing:** Babel toma el código fuente, lo lee y lo convierte en una representación abstracta conocida como AST (Abstract Syntax Tree). Esta es una representación donde cada nodo del árbol representa una estructura del código fuente. Babel utiliza Babylon para este trabajo.

Puedes ver el AST de nuestro ejemplo visitando astexplorer.net

**Transformación:** En esta etapa Babel trabaja sobre el AST generado en el proceso anterior y lo manipula para generar un nuevo AST que represente el código necesario para el soporte seleccionado.

Este paso es realizado por una serie de "plugins" que permiten ejecutar varias transformaciones de forma sencilla y atómica. Aquí cada plugin toma el AST generado por el previo para aplicar una pequeña transformación.

Puedes revisar como funciona el plugin [babel-plugin-transform-arrow-function](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-arrow-functions) o leer el "libro de mano de los plugin de babel" (en inglés) para saber como funcionan o como implementar tu propio plugin

**Generación de código:** En esta etapa, babel toma el AST generado y crea/escribe el código compatible, es decir, crea ese trozo de código soportado por navegadores más antiguos.
            'use strict';
            function sum(a,b) {
                return a + b;
            }



# Instalar y configurar Babel
Ya sabemos que hace y hasta cierto punto como funciona babel, es hora de hacer uso de su poder, para eso lo primero es instalarlo en nuestro equipo. Para eso necesitamos utilizar el manejador de dependencias de node npm

            npm install --save-dev @babel/core @babel/cli

Si no tienes el archivo package.json creado, crea uno antes de instalar dependencias. npm init te ayudará.
Una vez instalado esto, verás las nuevas dependencias de desarrollo en tu archivo package.json

Ahora para ejecutar babel puedes intentarlo directamente en la consola accediendo al binario dentro de la carpeta de instalación o utilizar las bondades de npm y su archivo de configuración al crear algunos scripts que te permitan ejecutarlo fácilmente.

Simplemente agrega la sección scripts y define el comando build.

        "scripts": {
            "build": "babel src -d lib"
        }
Este comando le indica a babel que lea todo el contenido del directorio src y que genere la salida en el directorio lib.

Ahora para ejecutar solo basta utilizar npm.

            npm run build

Si ejecutas esto utilizando el breve código de ejemplo de este artículo verás que babel hizo absolutamente nada, esto es porque la configuración por defecto de babel no define qué se debe hacer. Como comenté más arriba, Babel utiliza un sistema de plugins para definir las transformaciones que necesitas realizar.

## Configurando Babel
La configuración de babel se realiza utilizando un archivo de configuración, nada nuevo bajo el sol, llamado ***babel.config.js*** Un archivo JavaScript que retornará un objeto con la configuración deseada.
 El hecho de ser un archivo JavaScript te permite "calcular" ciertos parámetros como por ejemplo, utilizando variables de entorno.

Babel distribuye un "set" de configuraciones pre-definidas llamadas presets. Estos son básicamente un conjunto de plugins comúnmente utilizados que te permiten iniciar rápidamente.

Primer instalamos el paquete

            npm install @babel/preset-env --save-dev

Y luego definimos su uso en el archivo de configuración

            {
            "presets": ["@babel/preset-env"]
            }

Este preset es "inteligente" y decide qué plugins se usarán (y por ende que transformaciones se aplicaran) en base a la configuración de ambientes que quieres soportar. Dado que no especificamos ningún ambiente objetivo, babel asumirá que queremos transformar todo el código de versiones ES2015 en adelante en código compatible con ES5. No se recomienda utilizar babel de esta manera ya que estarás transformando código que probablemente los navegadores de tus usuarios ya soportan.

En nuestro particular y sencillo ejemplo, la transformación para soportar ES5 es convertir la función flecha en una función normal, puedes ver el resultado aquí pero, las funciones flechas ya son soportadas por la gran mayoría de navegadores actuales por lo que no tiene sentido hacer la transformación

Para decirle a babel que queremos soportar navegadores un poco más modernos podemos pasar un nuevo parámetro de configuración.

Babel se integra con browserlist que no es más que una nomenclatura de configuración para definir qué navegadores o ambientes de node deben ser soportados por distintas herramientas. Para su uso se recomienda crear un nuevo archivo llamado .browserlistrc en donde pues escribir la lista de navegadores soportados.

Creemos el archivo de configuración y digamos que queremos soportar una lista de navegadores bastante nuevos, por ejemplo, que considere las estadísticas de uso y soporte todos los navegadores que tengan una porción de uso superior al 2%.

        > 2%

Ahora al ejecutar npm run build nuevamente veremos que el resultado es que nuestra función flecha no fue modificada 