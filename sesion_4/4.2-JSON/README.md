# **JSON**
JSON (acrónimo de JavaScript Object Notation, «notación de objeto de JavaScript») es un formato de texto ligero para el intercambio de datos. JSON es un subconjunto de la notación literal de objetos de JavaScript aunque hoy, debido a su amplia adopción como alternativa a XML, se considera un formato de lenguaje independiente.

        json
        {
            "id":1,
            "nombre":"Fido",
            "raza":"Pug",
            "color":"negro
        }

## Servidor JSON (JSON SERVER)
El servidor JSON es un módulo de nodo que puede usar para crear un servicio web demo rest json en menos de un minuto. Todo lo que necesita es un archivo JSON para datos de muestra.

# Instalación del servidor JSON 

Debe tener NPM instalado en su máquina. De lo contrario, consulte esta publicación para instalar NPM. A continuación se muestra el comando de una sola línea para instalar json-server con salida en mi máquina.

        npm install -g json-server

la salida es:

        npm WARN deprecated graceful-fs@3.0.8: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
        /usr/local/bin/json-server -> /usr/local/lib/node_modules/json-server/bin/index.js
        - bytes@2.3.0 node_modules/json-server/node_modules/raw-body/node_modules/bytes
        /usr/local/lib
        └─┬ json-server@0.8.10
        ├─┬ body-parser@1.15.1
        │ └── bytes@2.3.0
        ├─┬ compression@1.6.1
        │ └── bytes@2.2.0
        ├─┬ lowdb@0.10.3
        │ └─┬ steno@0.4.4
        │   └── graceful-fs@4.1.4
        ├─┬ update-notifier@0.5.0
        │ └─┬ configstore@1.4.0
        │   ├── graceful-fs@4.1.4
        │   └─┬ write-file-atomic@1.1.4
        │     └── graceful-fs@4.1.4
        └─┬ yargs@4.7.0
            ├─┬ pkg-conf@1.1.2
            │ └─┬ load-json-file@1.1.0
            │   └── graceful-fs@4.1.4
            └─┬ read-pkg-up@1.0.1
            └─┬ read-pkg@1.1.0
                └─┬ path-type@1.1.0
                └── graceful-fs@4.1.4


### Comprobación de la versión y las opciones del servidor json
        $ json-server -v
            0.8.10

        $ json-server -help
            /usr/local/bin/json-server [options] <source>

         Options:
            --config, -c       Path to config file           [default: "json-server.json"]
            --port, -p         Set port                                    [default: 3000]
            --host, -H         Set host                               [default: "0.0.0.0"]
            --watch, -w        Watch file(s)                                     [boolean]
            --routes, -r       Path to routes file
            --static, -s       Set static files directory
            --read-only, --ro  Allow only GET requests                           [boolean]
            --no-cors, --nc    Disable Cross-Origin Resource Sharing             [boolean]
            --no-gzip, --ng    Disable GZIP Content-Encoding                     [boolean]
            --snapshots, -S    Set snapshots directory                      [default: "."]
            --delay, -d        Add delay to responses (ms)
            --id, -i           Set database id property (e.g. _id)         [default: "id"]
            --quiet, -q        Suppress log messages from output                 [boolean]

### Ejecutar servidor JSON
Ahora es el momento de iniciar nuestro servidor json. A continuación se muestra un archivo de muestra con los datos json de mis empleados. 
Crear un db.json archivo con algunos datos.

            {
            "employees": [
                {
                "id": 1,
                "name": "Pankaj",
                "salary": "10000"
                },
                {
                "name": "David",
                "salary": "5000",
                "id": 2
                }
            ]
            }

El punto importante aquí es el nombre de la matriz, es decir, los empleados. El servidor JSON creará las API REST basadas en esto. Comencemos nuestro servidor json con el archivo anterior.
            $ json-server --watch db.json

                \{^_^}/ hi!

                Loading db.json
                Done

                Resources
                https://localhost:3000/employees

                Home
                https://localhost:3000

                Type s + enter at any time to create a snapshot of the database
                Watching...

No cierre esta terminal, de lo contrario matará al servidor json. A continuación se encuentran ejemplos de solicitudes y respuestas CRUD.

Ahora, si va a   https://localhost:3000/employees/1 , obtendrá
                {
                    "id": 1,
                    "name": "Pankaj",
                    "salary": "10000"
                }

Además, al realizar solicitudes, es bueno saber que:

- Si realiza solicitudes POST, PUT, PATCH o DELETE, los cambios se guardarán de forma automática y segura endb.json lowdb.
- El JSON del cuerpo de su solicitud debe incluir un objeto, al igual que la salida GET. (por ejemplo {"name": "Foobar"})
- Los valores de identificación no son mutables. idSe ignorará cualquier valor en el cuerpo de su solicitud PUT o PATCH. Solo se respetará un valor establecido en una solicitud POST, pero solo si aún no se ha tomado.
- Una solicitud POST, PUT o PATCH debe incluir un Content-Type: application/jsonencabezado para usar el JSON en el cuerpo de la solicitud. De lo contrario, devolverá un código de estado 2XX, pero sin que se realicen cambios en los datos.

### Rutas
Basado en el db.jsonarchivo anterior, aquí están todas las rutas predeterminadas. También puede agregar otras rutas usando --routes.

### rutas plurales
___
        GET    /posts
        GET    /posts/1
        POST   /posts
        PUT    /posts/1
        PATCH  /posts/1
        DELETE /posts/1
        Rutas singulares
        GET    /profile
        POST   /profile
        PUT    /profile
        PATCH  /profile

### Filtrar
___
Úselo .para acceder a propiedades profundas

        GET /posts?title=json-server&author=typicode
        GET /posts?id=1&id=2
        GET /comments?author.name=typicode

### Paginar
___
Use _pagey opcionalmente _limit para paginar los datos devueltos.
En el Linkencabezado obtendrá first, prevy nextenlaces last.

        GET /posts?_page=7
        GET /posts?_page=7&_limit=20
        10 artículos se devuelven por defecto

### Clasificar
___

Agregar _sorty _order(orden ascendente por defecto)

        GET /posts?_sort=views&_order=asc
        GET /posts/1/comments?_sort=votes&_order=asc

Para varios campos, utilice el siguiente formato:

        GET /posts?_sort=user,views&_order=desc,asc

### Rodaja
___
Agregar _starty _endo _limit( X-Total-Countse incluye un encabezado en la respuesta)

        GET /posts?_start=20&_end=30
        GET /posts/1/comments?_start=20&_end=30
        GET /posts/1/comments?_start=20&_limit=10

Funciona exactamente como Array.slice (es decir, _startes inclusivo y _endexclusivo)

### Operadores
____

**Agregar _gteo _ltepara obtener un rango**

    GET /posts?views_gte=10&views_lte=20

**Agregar _nepara excluir un valor**

        GET /posts?id_ne=1
**Agregar _likeal filtro (compatible con RegExp)**

    GET /posts?title_like=server

### Búsqueda de texto completo
___
Agregarq

        GET /posts?q=internet

### Relaciones
___
Para incluir recursos para niños, agregue_embed

        GET /posts?_embed=comments
        GET /posts/1?_embed=comments

Para incluir el recurso principal, agregue_expand

        GET /comments?_expand=post
        GET /comments/1?_expand=post

Para obtener o crear recursos anidados (por defecto un nivel, agregue rutas personalizadas para más)

        GET  /posts/1/comments
        POST /posts/1/comments

### Base de datos
___
GET /db

### Página principal
Devuelve el archivo de índice predeterminado o sirve el ./publicdirectorio

GET /