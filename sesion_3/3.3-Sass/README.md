# ¿Qué es Sass?

Sass (syntactically awesome style sheets – hojas de estilo sintácticamente impresionantes) es un lenguaje de scripting que es totalmente compatible con todas las versiones de CSS. Es un pre-procesador de CSS que permite añadir funcionalidad, eficiencia y usabilidad al CSS estándar.

## ¿Por qué debería usarlo?

Si ya estás familiarizado con CSS, Sass es fácil de aprender y te permite usar variables, funciones, mix-ins y otras características incorporadas que facilitan la creación de páginas o aplicaciones web.

Pero antes de empezar, unas pocas cosas que deberías saber:

Los navegadores no pueden leer Sass, así que los ficheros Sass deben compilarse a CSS plano. Esto se puede hacer con Node.js como compilador o con Gulp. También puedes usar la extensión Live Sass Compiler para Visual Studio Code.

Sass soporta sintaxis en dos formatos:

- Sass: a veces denominada también ‘sintaxis identada’ porque usa identación en lugar de llaves. Si estás escribiendo Sass, usa la extensión .sass. Este es el aspecto que tiene:

        @mixin button-base()
        @include typography(button)

        display: inline-flex
        position: relative
        height: $button-height
        border: none
        vertical-align: middle

        &:hover
            cursor:pointer

Scss (Sassy CSS): si estás escribiendo scss, usa la extensión .scss. Usaremos scss para esta guía. Aquí tienes el mismo código, escrito en scss:

        @mixin button-base()
        {
            @include typography(button);

            display: inline-flex;
            position: relative;
            height: $button-height;
            border: none;
            vertical-align: middle;

            &:hover { cursor:pointer }
               
        }

## Variables

Las variables en Sass se compilan al valor real, no en variables CSS. Aquí tenemos un ejemplo rápido de como usar variables para ahorrar tiempo. Esto hace que sea muy sencillo cambiar los colores en todo el sitio de una sola vez

        $primary-color: #FB10F2;
        $accent-color: #5B93FF;
        $text-color: #FDB234;
        $heading-color: #4CFF8C;

        body{
            background: $primary-color;
        }

        h1{
            color: $heading-color;
        }

        .header{
            background-color: $accent-color;
        }

        #first-paragraph{
            color: $text-color;
        }

## Maps

Los mapas en Sass contienen parejas clave-valor. Sass proporciona diferentes funcionalidades que pueden usarse conjuntamente con los mapas para acceder a valores, hacer algo con cada valor, crear una nueva pareja clave-valor, etc.

        $font-weights: (
            "light": 300,
            "regular": 400,
            "bold": 700
        )

        h1 {
            font-weight: map-get($font-weights, light)
        }

        $icons: (
            abacus: "\f640",
            address-book:  "\f2b9",
            bell: "\f0f3",
            dog: "\f6d3",
            igloo: "\f640",
        );

        @each $name, $icon in $icons {
            .fa-#{$name}:before{
                content: $icon;
            }
        }

En CSS estándar a veces puede ser poco eficiente acceder a elementos hijo. Sass lo hace más sencillo

        .container {
            width: 60%;
            margin: 2em;
       

            p{
                font-weight: map-get($font-weights: light)
            }
        }

### Funciones

Las funciones nos permiten construir operaciones complejas y reutilizarlas en el código. Para definir una función utiliza @function seguido del nombre de tu función y las variables. Una función también debe contener el valor que retornará.

        @function invert($color, $amount: 100%){
            $inverse: change-color($color, $hue: hue($color) + 180)
            @return mix($inverse, $color, $amount)
        }

        $primary-color: rgb(245, 3, 45)

        .header {
            background-color: invert($primary-color, 80%);
        }

### Mix-ins

Los mix-ins nos permiten agrupar valores CSS para mejorar su eficiencia. Aquí tenemos un ejemplo de como crear y usar un mix-in

        @mixin important {
            font-weight: bold;
            color: $accent-color;
            text-align: center;
            background-color: $secondary-color;
            text-transform: uppercase;
        }

        #info-container {
            @include important;
        }

Los mix-in pueden pasarse como argumento

Si quieres reutilizar el código escrito en tu mix-in pero pasar diferentes valores para crear diferentes estilos, puedes pasarle un argumento al mix-in.

        @mixin flex($direction){
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: $direction;
        }

        .container {
            @include flex(column)
        }


