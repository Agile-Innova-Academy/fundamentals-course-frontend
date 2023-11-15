# Arreglos

Los arrays, también llamados arreglos o listas, nos permiten guardar una lista ordenada de datos en JavaScript, es decir, podemos almacenar varios datos en un solo lugar. Algunos ejemplos: una lista de espera de un hospital, los objetos de una cesta de la compra, los usuarios que han dado like a nuestra foto, etc.

Array con la lista de espera de los pacientes de un hospital

                    [
                      'Manuela Eufemia',
                      'Benigna Imelda',
                      'Isaías Paquito',
                      'Ximena Adán',
                      'Nicolás Emiliana'
                    ];

## ¿En qué casos se utilizan?
Si pensamos en una web, la mayoría de los datos vienen en una lista. Algunas de las aplicaciones más típicas de los arrays son:
- los resultados de búsqueda
- la lista de coordenadas de un mapa
- los artículos de un carrito de la compra
- las tareas de una lista de tareas
- los contactos de una lista de contactos.
                
Todos estos ejemplos anteriores se suelen almacenar en arrays para poderlos modificar (por ejemplo ordenar por orden alfabético o añadir un nuevo elemento), trabajar con ellos de forma sencilla y mostrarlos en nuestra web. Un array es la estructura que utilizamos en JavaScript para almacenar listas de datos ordenados.
Un array puede contener cualquier tipo de dato (string, number, boolean, object incluso otros arrays). De hecho, un mismo array puede contener datos de distinto tipo mezclados, aunque es algo poco recomendable.

Cada elemento dentro de un array irá asociado a un índice, ese índice nos permitirá obtener el dato de una determinada posición del array o modificarlo. Un dato importante a tener en cuenta es que el índice de los arrays empieza por el número 0, por lo que el primer elemento tendrá índice 0, el segundo tendrá 1, el tercero 2 y así sucesivamente.

Array donde el orden es importante

                const weekdays = [
                  'Lunes',
                  'Martes',
                  'Miércoles',
                  'Jueves',
                  'Viernes',
                  'Sábado',
                  'Domingo'
                ];
              
En este ejemplo, 'Lunes' está en la posición 0 del array, y 'Domingo' en la posición 6. También los arrays cuentan con una longitud, que es el número de elementos que tiene. En el ejemplo anterior el array weekdays tiene 7 elementos, es decir, una longitud de 7. Para obtener la longitud de un arreglo podemos utilizar la función `array.length()`. 

NOTA: Por lo general es poco recomendable mezclar varios datos diferentes en un array, en esos casos es mejor usar un objeto.

[Documentación técnica Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Operaciones habituales con los array

### Crear un array
Para crear un array tenemos varias maneras, las cuales son:

#### Array vacío o sin elementos

Ejemplo:

    let array = [];
    //Muestra en consola 0
    console.log(array.length) 

#### Array con elementos

Ejemplo:

    let animal = ["Perro", "Gato"]
    //Muestra en consola 2
    console.log(animal.length)


#### Array como resultado de alguna función
En ocasiones tenemos funciones de Javascript que nos devuelve un array. 

Ejemplo:
    const computador = {
      marca: 'hp',
      fecha_creacion: '2022',
      procesador: 'Intel !10 10gen'
    }

const propiedades_computador = Object.keys(computador);

//Muestra en consola ['marca','fecha_creacion','procesador']
console.log(propiedades_computador) 

              

### Acceder a un elemento mediante su índice
Como se explico anteriormente los arrays cuentan con un indice el cual nos indica la posición de los elementos, empezando desde 0 hasta n-1 siendo n la longitud del arreglo. Para acceder a un elemento específico simplemente ponemos `[indice]` luego del nombre del array `array[indice]`

Ejemplo:

    let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];

    let primero = animal[0];
    // Muestra en consola 'Perro'
    console.log(primero);

    let ultimo = animal[animal.length - 1]
    // Muestra en consola 'Gato'
    console.log(ultimo);

    let tercero = animal[2]
    // Muestra en consola 'Pez'
    console.log(tercero);


### Modificar un elemento según su indice
Internamente los arrays son un conjunto de variables, es decir, que podemos modificar el valor de esas variables, incluso si el array fue declarado como const. Para realizar esto solo es acceder al valor por medio del indice y luego hacer la asignación así: `array[indice] = nuevoValor`

Ejemplo:

    const array = [50, 40, 30];
    array[0] = 15;

    //Muestra en consola [15,40,30]
    console.log(array);


              
### Añadir un elemento al final de un Array

    let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];

    animal.push('Caballo') // Añade "Caballo" al final

    // Muestra en consola ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato', 'Caballo']
    console.log(animal)

  
### Eliminar el último elemento de un Array

    let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];

    animal.pop() // Elimina "Gato" del final

    // Muestra en consola ['Perro', 'Loro', 'Pez', 'Conejo']
    console.log(animal)
    

### Añadir un elemento al principio de un Array

    let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];

    animal.unshift('Caballo') // Añade "Caballo" al inicio

    // Muestra en consola ['Caballo', 'Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];
    console.log(animal)
        
### Eliminar el primer elemento de un Array

    let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];

    animal.shift() // Elimina "Perro" del inicio

    // Muestra en consola ['Loro', 'Pez', 'Conejo', 'Gato'];
    console.log(animal)


### Encontrar el índice de un elemento del Array

    let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];

    let pos = animal.indexOf('Pez');

    //Muestra en consola 2
    console.log(pos);

              
### Eliminar un único elemento mediante su posición

    let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];

    let pos = animal.indexOf('Pez');

    let elementoEliminado = animal.splice(pos, 1)

    // Muestra en consola ['Perro', 'Loro', 'Conejo', 'Gato'];
    console.log(animal)


### Método find()
El método `find()` devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

Ejemplo:

    const array1 = [5, 12, 8, 130, 44];

    const found = array1.find(element => element > 10);

    //Muestra en consola 12
    console.log(found);


### Recorrer un Array
Cuando manejamos arrays surge la necesidad de recorrer sus elementos. Para esto lo podemos realizar de muchas maneras, algunas de estas son:

#### Con un for

    let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];

    for(let i = 0; i < animal.length; i++){
      console.log(`El elemento en la posición ${i} es ${animal[i]}`);
    }
    /*
    Muestra en consola: 
    El elemento en la posición 0 es Perro
    El elemento en la posición 1 es Loro
    El elemento en la posición 2 es Pez
    El elemento en la posición 3 es Conejo
    El elemento en la posición 4 es Gato
    */


#### Función foreach
Ejecuta la función indicada una vez por cada elemento del array.

    let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];

    animal.forEach((elemento, indice) => {
        console.log(`El elemento en la posición ${indice} es ${elemento}`);
    })

    /*
    Muestra en consola: 
    El elemento en la posición 0 es Perro
    El elemento en la posición 1 es Loro
    El elemento en la posición 2 es Pez
    El elemento en la posición 3 es Conejo
    El elemento en la posición 4 es Gato
    /*

             
#### Función map()
A diferencia de los anteriores esta función crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos, aunque también lo podemos utilizar solo para recorrerlo
   
Ejemplo recorrido

    let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];

    animal.map((elemento, indice) => {
        console.log(`El elemento en la posición ${indice} es ${elemento}`);
    })

    /*
    Muestra en consola: 
    El elemento en la posición 0 es Perro
    El elemento en la posición 1 es Loro
    El elemento en la posición 2 es Pez
    El elemento en la posición 3 es Conejo
    El elemento en la posición 4 es Gato
    /*


Ejemplo creación de nuevo array

    let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];

    let longitudes = animal.map((elemento, indice) => {
        return elemento.length;
    })

    //Muestra en consola [5,4,3,6,4]
    console.log(longitudes)

## Desestructuración

Es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables

### Arreglos

    let nombreCompleto = ['Carla','Gómez'];

    let [nombre,apellido] = nombreCompleto;

    // Muestra en consola 'Carla'
    console.log(nombre); 
    // Muestra en consola 'Gómez'
    console.log(apellido);



### Objetos 

    let producto = {
      id: '3001CF47',
      nombre: 'Café',
      precio: 8500
    };

    let { id, nombre, precio } = producto;

    //Muestra en consola '3001CF47'
    console.log(id);  
    //Muestra en consola 'Café'
    console.log(nombre); 
    //Muestra en consola 8500
    console.log(precio); 

                  
- [Documentación técnica](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## spread and Rest operators

- [spread](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [rest](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters)

Permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos o elementos son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave son esperados.

### Arreglos

    const numeros = [1,2,3,4,5,6,7];

    const masNumeros = [...numeros,8,9,10];

    //Muestra en consola [1,2,3,4,5,6,7,8,9,10]
    console.log(masNumeros);
               

### Objetos 

    const perro = {
        nombre: 'Nerón',
        edad: 7,
    }

    const duenioPerro = {...perro, duenio: 'Carlos'};

    //Muestra en consola {nombre: 'Nerón', edad: 7, duenio: 'Carlos'}
    console.log(duenioPerro);

- [Documentación técnica](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax) 

### Referencias 
- Para elaborar el conténido anterior de objetos se utilizó apoyo del curso [JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) de [freeCodeCamp](https://www.freecodecamp.org/learn) y de [MDN Web Docs](https://developer.mozilla.org/es/)
