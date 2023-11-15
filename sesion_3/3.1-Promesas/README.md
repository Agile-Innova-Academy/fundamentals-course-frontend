# Promise

las promesas son un concepto para resolver el problema de asincronía de una forma mucho más elegante y práctica que, por ejemplo, utilizando funciones callbacks directamente.

Como su propio nombre indica, una promesa es algo que, en principio pensamos que se cumplirá, pero en el futuro pueden ocurrir varias cosas

![promesas](https://storage.googleapis.com/academy-agile-innova-public/courses/fundamentals/Front-end/promise.JPG)

- La promesa se cumple (promesa resuelta)
- La promesa no se cumple (promesa se rechaza)
- La promesa se queda en un estado incierto indefinidamente (promesa pendiente)

Con estas sencillas bases, podemos entender el funcionamiento de una promesa en Javascript. Antes de empezar, también debemos tener claro que existen dos partes importantes de las promesas: como consumirlas (utilizar promesas) y como crearlas (preparar una función para que use promesas y se puedan consumir).

### Promesas en Javascript

Las promesas en Javascript se representan a través de un object , y cada promesa estará en un estado concreto: pendiente, aceptada o rechazada. Además, cada promesa tiene los siguientes métodos, que podremos utilizar para utilizarla:

![resolve](https://storage.googleapis.com/academy-agile-innova-public/courses/fundamentals/Front-end/resolve%20promise.JPG)

### Consumir una promesa

La forma general de consumir una promesa es utilizando el .then() con un sólo parámetro, puesto que muchas veces lo único que nos interesa es realizar una acción cuando la promesa se cumpla:

        fetch("/robots.txt").then(function(response) {
        /* Código a realizar cuando se cumpla la promesa */
        });

Lo que vemos en el ejemplo anterior es el uso de la función fetch(), la cuál devuelve una promesa que se cumple cuando obtiene respuesta de la petición realizada. De esta forma, estaríamos preparando (de una forma legible) la forma de actuar de nuestro código a la respuesta de la petición realizada, todo ello de forma asíncrona.

Recuerda que podemos hacer uso del método .catch() para actuar cuando se rechaza una promesa:

        fetch("/robots.txt")
            .then(function(response) {
                /* Código a realizar cuando se cumpla la promesa */
            })
            .catch(function(error) {
                /* Código a realizar cuando se rechaza la promesa */
            });

Observa como hemos indentado los métodos .then() y .catch(), ya que se suele hacer así para que sea mucho más legible para el. Además, se pueden encadenar varios .then() si se siguen generando promesas y se devuelven con un return:

            fetch("/robots.txt")
            .then(response => {
                return response.text(); // Devuelve una promesa
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => { /* Código a realizar cuando se rechaza la promesa */ });

***No olvides indicar el return para poder encadenar las siguientes promesas con .then(). Tras un .catch() también es posible encadenar .then() para continuar procesando promesas***.

De hecho, usando arrow functions se puede mejorar aún más la legibilidad de este código, recordando que cuando sólo tenemos una sentencia en el cuerpo de la arrow function hay un return implícito:

            fetch("/robots.txt")
            .then(response => response.text())
            .then(data => console.log(data))
            .finally(() => console.log("Terminado."))
            .catch(error => console.error(data));

Observese además que hemos añadido el método .finally() para añadir una función callback que se ejecutará tanto si la promesa se cumple o se rechaza, lo que nos ahorrará tener que repetir la función en el .then() como en el .catch().

***En todo este apartado hemos visto como utilizar o consumir una promesa haciendo uso de .then(), que es lo que en la mayoría de los casos necesitaremos. Sin embargo, vamos a ver en el siguiente apartado como crear o implementar las promesas para su posterior consumo***

### Asincronía con promesas

¿Qué son las promesas?
Controlar cuando se ejecutaron fragmentos de código
ATRÁS javascript ¿Qué son las promesas?

Las promesas son un concepto para resolver el problema de asincronía de una forma mucho más elegante y práctica que, por ejemplo, utilizando funciones callbacks directamente.
¿Qué es una promesa?

Como su propio nombre indica, una promesa es algo que, en principio pensamos que se cumplirá, pero en el futuro pueden ocurrir varias cosas:

Promises (Promesas Javascript)

    La promesa se cumple (promesa resuelta)
    La promesa no se cumple (promesa se rechaza)
    La promesa se queda en un estado incierto indefinidamente (promesa pendiente)

Con estas sencillas bases, podemos entender el funcionamiento de una promesa en Javascript. Antes de empezar, también debemos tener claro que existen dos partes importantes de las promesas: como consumirlas (utilizar promesas) y como crearlas (preparar una función para que use promesas y se puedan consumir).
Promesas en Javascript

Las promesas en Javascript se representan a través de un , y cada promesa estará en un estado concreto: pendiente, aceptada o rechazada. Además, cada promesa tiene los siguientes métodos, que podremos utilizar para utilizarla:
Métodos 	Descripción
.then(resolve) 	Ejecuta la función callback resolve cuando la promesa se cumple.
.catch(reject) 	Ejecuta la función callback reject cuando la promesa se rechaza.
.then(resolve,reject) 	Método equivalente a las dos anteriores en el mismo .then().
.finally(end) 	Ejecuta la función callback end tanto si se cumple como si se rechaza.

Más adelante veremos, que a diferencia del apartado anterior donde se utilizaban solamente funciones callback, en este enfoque se tiende a no anidar promesas, evitando así el famoso Callback Hell, y haciendo el código mucho más legible.
Consumir una promesa

La forma general de consumir una promesa es utilizando el .then() con un sólo parámetro, puesto que muchas veces lo único que nos interesa es realizar una acción cuando la promesa se cumpla:

fetch("/robots.txt").then(function(response) {
  /* Código a realizar cuando se cumpla la promesa */
});

Lo que vemos en el ejemplo anterior es el uso de la función fetch(), la cuál devuelve una promesa que se cumple cuando obtiene respuesta de la petición realizada. De esta forma, estaríamos preparando (de una forma legible) la forma de actuar de nuestro código a la respuesta de la petición realizada, todo ello de forma asíncrona.

Recuerda que podemos hacer uso del método .catch() para actuar cuando se rechaza una promesa:

fetch("/robots.txt")
  .then(function(response) {
    /* Código a realizar cuando se cumpla la promesa */
  })
  .catch(function(error) {
    /* Código a realizar cuando se rechaza la promesa */
  });

Observa como hemos indentado los métodos .then() y .catch(), ya que se suele hacer así para que sea mucho más legible para el. Además, se pueden encadenar varios .then() si se siguen generando promesas y se devuelven con un return:

fetch("/robots.txt")
  .then(response => {
    return response.text(); // Devuelve una promesa
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => { /* Código a realizar cuando se rechaza la promesa */ });

        No olvides indicar el return para poder encadenar las siguientes promesas con .then(). Tras un .catch() también es posible encadenar .then() para continuar procesando promesas.

De hecho, usando arrow functions se puede mejorar aún más la legibilidad de este código, recordando que cuando sólo tenemos una sentencia en el cuerpo de la arrow function hay un return implícito:

fetch("/robots.txt")
  .then(response => response.text())
  .then(data => console.log(data))
  .finally(() => console.log("Terminado."))
  .catch(error => console.error(data));

Observese además que hemos añadido el método .finally() para añadir una función callback que se ejecutará tanto si la promesa se cumple o se rechaza, lo que nos ahorrará tener que repetir la función en el .then() como en el .catch().

    En todo este apartado hemos visto como utilizar o consumir una promesa haciendo uso de .then(), que es lo que en la mayoría de los casos necesitaremos. Sin embargo, vamos a ver en el siguiente apartado como crear o implementar las promesas para su posterior consumo.

Asincronía con promesas

Vamos a implementar el ejercicio base que hemos comentado en el primer capítulo de este tema utilizando promesas. Observa que lo primero que haremos es crear un nuevo objeto *promise* que «envuelve» toda la función de la tarea doTask().

Al new Promise() se le pasa por parámetro una función con dos callbacks, el primero resolve el que utilizaremos cuando se cumpla la promesa, y el segundo reject cuando se rechace:

            /* Implementación con promesas */
            const doTask = (iterations) => new Promise((resolve, reject) => {
            const numbers = [];
            for (let i = 0; i < iterations; i++) {
                const number = 1 + Math.floor(Math.random() * 6);
                numbers.push(number);
                if (number === 6) {
                reject({
                    error: true,
                    message: "Se ha sacado un 6"
                });
                }
            }
            resolve({
                error: false,
                value: numbers
            });
            });


Como ves, se trata de una implementación muy similar a los callbacks que vimos en el apartado anterior, pero utilizan una *promise* nativa para poder luego consumirla cómodamente:

        doTask(10)
        .then(result => console.log("Tiradas correctas: ", result.value))
        .catch(err => console.error("Ha ocurrido algo: ", err.message));

Imagina el caso de que cada lanzamiento del dado (la parte donde genera el número aleatorio) fuera un proceso más costoso que tardara un tiempo considerable, quizás de esa forma se vea más clara la necesidad de una tarea asíncrona, controlada con promesas.

## API de las promesas

El objeto Promise de Javascript tiene varios métodos estáticos que podemos utilizar en nuestro código. Todos devuelven una promesa y son los que veremos en la siguiente tabla:

![api](https://storage.googleapis.com/academy-agile-innova-public/courses/fundamentals/Front-end/api%20promesa.JPG)


### Promise.all()

El método Promises.all() funciona como un «todo o nada»: devuelve una promesa que se cumple cuando todas las promesas del array  se cumplen. Si alguna de ellas se rechaza, Promise.all() también lo hace.

En nuestro ejemplo, cada uno de los fetch() tendrá su propia promesa y sólo cuando se hayan descargado los tres archivos de cada petición se cumplirá la promesa del Promise.all():

            const p1 = fetch("/robots.txt");
            const p2 = fetch("/index.css");
            const p3 = fetch("/index.js");

            Promise.all([p1, p2, p3])
            .then(responses => {
                responses.forEach(response => {
                console.log(response.status, response.url);
                })
            });

A Promise.all() le pasamos un ARRAY con las promesas individuales. Cuando todas y cada una de esas promesas se cumplan favorablemente, entonces se ejecutará la función callback de su .then(). En el caso de que alguna se rechace, no se llegará a ejecutar.

### Promise.allSettled()

El método Promises.allSettled() funciona como un «todas procesadas»: devuelve una promesa que se cumple cuando todas las promesas del ARRAY se hayan procesado, independientemente de que se hayan cumplido o rechazado.

        const p1 = fetch("/robots.txt");
        const p2 = fetch("https://google.com/index.css");
        const p3 = fetch("/index.js");

        Promise.allSettled([p1, p2, p3])
        .then(responses => {
            responses.forEach(response => {
            console.log(response.status, response);
            })
        });

Esta promesa nos devuelve un campo status donde nos indica si cada promesa individual ha sido cumplida o rechazada, y un campo value con los valores devueltos por la promesa. En este caso, obtendremos que la primera y última promesa se resuelven (fulfilled), mientras que la segunda nos da un error de CORS y se rechaza (rejected).

### Promise.any()

El método Promise.any() funciona como «la primera que se cumpla»: Devuelve una promesa con el valor de la primera promesa individual del ARRAY que se cumpla. Si todas las promesas se rechazan, entonces devuelve una promesa rechazada.

        const p1 = fetch("/robots.txt");
        const p2 = fetch("/index.css");
        const p3 = fetch("/index.js");

        Promise.any([p1, p2, p3])
        .then(response => console.log(response.status, response.url));

Como vemos, Promise.any() devolverá una respuesta de la primera promesa cumplida.

### Promise.race()

El método Promise.race() funciona como una «la primera que se procese»: la primera promesa del ARRAY que sea procesada, independientemente de que se haya cumplido o rechazado, determinará la devolución de la promesa del Promise.race(). Si se cumple, devuelve una promesa cumplida, en caso negativo, devuelve una rechazada.

        const p1 = fetch("/robots.txt");
        const p2 = fetch("/index.css");
        const p3 = fetch("/index.js");

        Promise.race([p1, p2, p3])
        .then(response => console.log(response.status, response.url));

De forma muy similar a la anterior, Promise.race() devolverá la promesa que se resuelva primero, ya sea cumpliéndose o rechazándose.

### Promise.resolve() y Promise.reject()

Mediante los métodos estáticos Promise.resolve() y Promise.reject() podemos devolver una promesa cumplida o rechazada respectivamente sin necesidad de crear una promesa con new Promise(). Esto puede ser interesante en algunos casos, aunque rara vez solemos utilizarlo hoy en día.

        const doTask = () => {
        const number = 1 + Math.floor(Math.random() * 6);
        return (number % 2 === 0) ? Promise.resolve(number) : Promise.reject(number);
        }

Observa que en este caso devolvemos una promesa que se cumple cuando el número generado es par y se rechaza cuando es impar. Sin embargo, ten en cuenta que en problema en este caso es que la promesa no «envuelve» toda la función, por lo que si la tarea tardase algún tiempo en generar el número, no podríamos utilizar el .then() para consumir la promesa.

***Estas funciones estáticas se suelen utilizar en muy pocos casos, para mantener cierta compatibilidad en funciones que se espera que devuelvan una promesa***