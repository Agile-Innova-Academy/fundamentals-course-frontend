# Sesión 1 - Array Functions


### ¿ Qué son las Array Functions? 

Básicamente, son métodos que tiene cualquier variable que sea de tipo , y que permite realizar una operación con todos los elementos de dicho array (o parte de ellos) para conseguir un objetivo concreto, dependiendo del método. En general, a dichos métodos se les pasa por parámetro una función callback y unos parámetros opcionales
<br>

### Métodos de las array functions

 ![Array functions](https://storage.googleapis.com/academy-agile-innova-public/courses/fundamentals/Front-end/metodo-arrayFunctions.JPG)

A cada uno de estos métodos se les pasa una función callback que se ejecutará por cada uno de los elementos que contiene el array. Empecemos por forEach(), que es quizás el más sencillo de todos.

- **forEach (Cada uno):**  El método forEach() no devuelve nada y espera que se le pase por parámetro una que se ejecutará por cada elemento del array. Esa función, puede ser pasada en cualquiera de los formatos que hemos visto: como función tradicional o como función flecha

- **every (Todos):** El  método every() permite comprobar si todos y cada uno de los elementos de un array cumplen la condición que se especifique en la callback:
La condición es que la longitud de cada elemento del array sea 1. Si dicha función devuelve true, significa que cumple la condición, si devuelve false, no la cumple. Por lo tanto, si todos los elementos del array devuelven true, entonces every() devolverá true.

- **some(Al menos uno):** De la misma forma que el método anterior sirve para comprobar si todos los elementos del array cumplen una determinada condición, con some() podemos comprobar si al menos uno de los elementos del array, cumplen dicha condición definida por el callback. el método some() devuelve true porque existe al menos un elemento del array que cumple la condición.

<br>

### Transformadores y Filtros


 ![Array functions](https://storage.googleapis.com/academy-agile-innova-public/courses/fundamentals/Front-end/array-funtions-.JPG)

- **map(Transformaciones):** El método map() es un método muy potente y útil para trabajar con arrays, puesto que su objetivo es devolver un nuevo array donde cada uno de sus elementos será lo que devuelva la función callback por cada uno de los elementos del array original.

Observa que el array devuelto por map() es nuevoArr, y cada uno de los elementos que lo componente, es el número devuelto por el callback (e.length), que no es otra cosa sino el tamaño de cada .

Este método nos permite hacer multitud de operaciones, ya que donde devolvemos e.length podriamos devolver el propio modificado o cualquier otra cosa.

-**filter (Filtrado):** El método filter() nos permite filtrar los elementos de un array y devolver un nuevo array con sólo los elementos que queramos. Para ello, utilizaremos la función callback para establecer una condición que devuelve true sólo en los elementos que nos interesen:

    const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
    const nuevoArr = arr.filter((e) => e[0] == "P");
    nuevoArr; // Devuelve ['Pablo', 'Pedro', 'Pancracio']

En este ejemplo, filtramos sólo los elementos en los que su primera letra sea P. Por lo tanto, la variable nuevoArr será un array con sólo esos elementos. Ten en cuenta que si ningún elemento cumple la condición, filter() devuelve un vacío.

 -**flat (aplanar):**  Un método que puede resultar interesante es .flat(level). Se trata de un método que revisa todos los elementos del array en busca de arrays anidados, y los aplana hasta el nivel level indicado por parámetro.

Por ejemplo, considera el siguiente array:
  ~~~
    const values = [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];

        values.flat(0);         // [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];
        values.flat(1);         // [10, 15, 20, 25, 30, 35, 40, 45, [50, 55], 60];
        values.flat(2);         // [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
        values.flat(Infinity);  // Idem al anterior, pero si hubieran más niveles los aplanaría todos
  ~~~
Observa que el array values tiene 6 elementos, donde el cuarto elemento y el sexto elemento son arrays anidados. En el array del cuarto elemento hay dos números, pero en el array del sexto elemento hay a su vez un array con cuatro elementos donde su tercer elemento es nuevamente otro array. Estaríamos hablando de que el array values tiene arrays hasta un nivel 3.

Con .flat() podemos indicar hasta que nivel queremos aplanarlo.

También tenemos un método llamado .flatMap(ƒ) que funciona de forma muy parecida al método .map(ƒ), aplanando un nivel y transformando cada elemento del array, según la función pasada por parámetro. Es decir, el método .flatMap(ƒ) es el equivalente a realizar la operación .flat(1).map(ƒ).

 <br>

 ### Búsquedas

  ![Array functions](https://storage.googleapis.com/academy-agile-innova-public/courses/fundamentals/Front-end/b%C3%BAsquedas.JPG)

  - **find (Búsqueda):**  Se introducen dos nuevos métodos dentro de las Array functions: find() y findIndex(). Ambos se utilizan para buscar elementos de un array mediante una condición, la diferencia es que el primero devuelve el elemento mientras que el segundo devuelve su posición en el array original. Veamos como funcionan:
  ~~~
    const names = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
    names.find((e) => e.length == 5); // 'Pablo'
    names.findIndex((e) => e.length == 5); // 1
  ~~~
La condición que hemos utilizado en este ejemplo es buscar el elemento que tiene 5 carácteres de longitud. Al buscarlo en el array original, el primero que encontramos es Pablo, puesto que find() devolverá 'Pablo' y findIndex() devolverá 1, que es la segunda posición del array donde se encuentra.

En el caso de no encontrar ningún elemento que cumpla la condición, find() devolverá , mientras que findIndex(), que debe devolver un , devolverá -1.

De la misma forma, tenemos findLastIndex() y findLast(), que son las funciones equivalentes a findIndex() y find(), pero buscando elementos desde derecha a izquierda, en lugar de izquierda a derecha:
  ~~~
    const names = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
    names.findLast((e) => e.length == 5); // 'Pedro'
    names.findLastIndex((e) => e.length == 5); // 2
  ~~~
En este caso, en lugar de encontrarnos a Pablo (posición 1), el primer elemento que tiene 5 carácteres, como va buscando de derecha a izquierda, el primero que encuentra es Pedro (posición 2).

#### Acumuladores

  ![Array functions](https://storage.googleapis.com/academy-agile-innova-public/courses/fundamentals/Front-end/acumuladores.JPG)

- **reduce (Acumuladores):**  Los métodos denominados reduce() y reduceRight(). Ambos métodos se encargan de recorrer todos los elementos del array, e ir acumulando sus valores (o alguna operación diferente) y sumarlo todo, para devolver su resultado final.

En este par de métodos, encontraremos una primera diferencia en su función callback, puesto que en lugar de tener los clásicos parámetros opcionales (e, i, a) que hemos utilizado hasta ahora, tiene (p, e, i, a), donde vemos que aparece un primer parámetro extra inicial: p.

En la primera iteración, p contiene el valor del primer elemento del array y e del segundo. En siguientes iteraciones, p es el acumulador que contiene lo que devolvió el callback en la iteración anterior, mientras que e es el siguiente elemento del array, y así sucesivamente. Veamos un ejemplo para entenderlo:
  ~~~
        const arr = [95, 5, 25, 10, 25];
        arr.reduce((p, e) => {
        console.log(`P=${p} e=${e}`);
        return p + e;
        });

        // P=95 e=5     (1ª iteración: elemento 1: 95 + elemento 2: 5) = 100
        // P=100 e=25   (2ª iteración: 100 + elemento 3: 25) = 125
        // P=125 e=10   (3ª iteración: 125 + elemento 4: 10) = 135
        // P=135 e=25   (4ª iteración: 135 + elemento 5: 25) = 160
        // Finalmente, devuelve 160
  ~~~
Gracias a esto, podemos utilizar el método reduce() como acumulador de elementos de izquierda a derecha y reduceRight() como acumulador de elementos de derecha a izquierda. Veamos un ejemplo de cada uno, realizando una resta en lugar de una suma:
  ~~~
    const arr = [95, 5, 25, 10, 25];
    arr.reduce((p, e) => p - e); // 95 - 5 - 25 - 10 - 25. Devuelve 30
    arr.reduceRight((p, e) => p - e); // 25 - 10 - 25 - 5 - 95. Devuelve -110
  ~~~
**Parámetro inicial**

Es posible indicar un segundo parámetro opcional en el .reduce(). Este parámetro es el valor inicial que quieres tomar en el reduce, lo que puede facilitar bastante la implementación. Observa que en el ejemplo anterior, se realizan 4 iteraciones. Sin embargo, al indicar este valor inicial de cero se realizan 5 iteraciones:
  ~~~
        const arr = [95, 5, 25, 10, 25];
        arr.reduce((p, e) => {
        console.log(`P=${p} e=${e}`);
        return p + e;
        }, 0);

        // P=0 e=95     (iteración inicial): 0 + elemento 1: 95) = 95
        // P=95 e=5     (1ª iteración: elemento 1: 95 + elemento 2: 5) = 100
        // P=100 e=25   (2ª iteración: 100 + elemento 3: 25) = 125
        // P=125 e=10   (3ª iteración: 125 + elemento 4: 10) = 135
        // P=135 e=25   (4ª iteración: 135 + elemento 5: 25) = 160
        // Finalmente, devuelve 160
  ~~~
Como se puede ver, hay una iteración 0 extra que es la que toma el valor inicial indicado, junto al primer elemento del array. Luego, sigue iterando con el resto de elementos.

#### Iteradores

Unos métodos muy útiles para utilizar como iteradores (objetos preparados para recorrer los elementos de un array y devolver información). Hablamos de los métodos keys(), values() y entries(). El primero de ellos permite avanzar en un array, mientras va devolviendo las posiciones, el segundo los valores (el elemento en sí) y el tercero devuelve un array con la posición en el primer elemento y el valor en el segundo elemento.

  ![Array functions](https://storage.googleapis.com/academy-agile-innova-public/courses/fundamentals/Front-end/iteradores.JPG)

  Estos métodos, combinados con un for...of por ejemplo, permiten recorrer los arrays y obtener diferente información del array rápidamente. En el siguiente ejemplo utilizamos una característica avanzada que veremos más adelante llamada desestructuración:
  
  ![Array functions](https://storage.googleapis.com/academy-agile-innova-public/courses/fundamentals/Front-end/iteradores-ejemplo.JPG)
<br>
