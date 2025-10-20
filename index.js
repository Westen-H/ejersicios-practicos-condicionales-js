    // #region tarea 1: verificar numero + / - / 0
    
        console.log("========================= tarea 1: verificar numero + / - / 0 =========================")    
        // Almacenar en una variable el numero dado, solicitado con prompt o introducirlo al llamar la función
        // let recivido = prompt("Por favor: ingresa un numero");

        // Dlacarar la función verificarNumero para verificarlo
        function verificarNumero(recivido) {

            // convertir la caden de texto recivida a numero
            let numero = parseFloat(recivido);
            // Comprar que el valor recivido es un numero: si lo es proceder, sino lo es: mesaje de Error.
             if (typeof numero === "number" && Number.isFinite(numero)) {
                //comprobar si el numero es 0, si no lo es comprobar si es negativo, si tampoco lo es; será positivo.
                if (numero === 0){
                console.log(`El numero introducido0 es cero.`)
                } else if (numero < 0) {
                    console.log(`El numero ${numero} es negativo.`)
                } else {
                    console.log(`El numero ${numero} es positivo.`)
                }
            } else {
                console.log("Error: Por favor ingresar un numero valido") 
            }
        }
        verificarNumero(-8)// Llamar a la función
        verificarNumero(0)// Llamar a la función
        verificarNumero(3)// Llamar a la función
    // #endregion



    // #region tarea 2: Edad legal para votar
        console.log("========================== tarea 2: Edad legal para votar =============================")
        // Almacenar en una variable la edad dada, solicitada con prompt o introducirla al llamar la función
        // let edadDada = prompt("Por favor: ingresa su edad");
        // Declarar la función para comprobar la edad
        function puedeVotar(edadDada) {
            // convertir la caden de texto recivida a numero
            let edad = parseFloat(edadDada);
            // Comprar que el valor recivido es un numero: si lo es proceder, sino lo es: mesaje de Error.
             if (typeof edad === "number" && Number.isFinite(edad)) {
                if (edad >= 18) { // compara que la edad sea mayor o igual de 18 o no, y mostrar mensajes
                    console.log("Puede votar")
                } else {
                    console.log("No puede votar")
                }
            } else {
                console.log("Error: Por favor ingresar un valor numerico valido") 
            }
        }
        //Comprbamos que funcione la función
        puedeVotar(18);
        puedeVotar(16);
        puedeVotar("Carlos");
    // #endregion



    // #region tarea 3: mayorDeDos
        console.log("================================= tarea 3: mayorDeDos =================================")
        // si se desea pedir los numero por prompt o al llamar la funcion introducirlo

        // Declarar la función para compara 2 numeros
        function mayorDeDos(num1, num2) {

            // Comprar que el valor recivido es un numero: si lo es proceder, sino lo es: mesaje de Error.
             if (typeof num1 === "number" && Number.isFinite(num1) && typeof num2 === "number" && Number.isFinite(num2)) {
                if (num1 > num2) { //comprobar que num1 sea mayor que num2, si lo es mostrar el mensaje, si no...
                    console.log(`El numero ${num1} es mayor`)
                } else if (num1 < num2) { // comprobar que num2, sea el mayor,si tampoco lo es... 
                    console.log(`El numero ${num2} es mayor`)
                } else { // los numeros son iguales
                    console.log("Los numero dados son iguales")
                }
            } else {
                console.log("Error: Por favor ingresar un valor numerico valido") 
            }
        }

       //Comprbamos que funcione la función
        mayorDeDos(18, 45);
        mayorDeDos(16, 8);
        mayorDeDos(5, 5);
        mayorDeDos(10, "a");
        // #endregion 



    // #region tarea 4: Determinar si un número es divisible entre 5
        console.log("================ tarea 4: Determinar si un número es divisible entre 5 ================")

        function esDivisibleEntreCinco(numero) {
            if (typeof numero === "number" && Number.isFinite(numero)) { // comprbar que sea un numero valido
                if (numero % 5 === 0) { //utilizar el operador % para comprobar si hay resto
                    console.log(`El numero ${numero} es divisible entre 5`) // si el resto es cero es diisible entre 5, sino
                } else {  
                    console.log(`El numero ${numero} no es divisible entre 5`) // No es divisible entre 5
                }
            } else {
                console.log("Error: Por favor ingresar un valor numerico valido") 
            }
        }

        esDivisibleEntreCinco(8);
        esDivisibleEntreCinco(70);
        esDivisibleEntreCinco(35);
        esDivisibleEntreCinco(4);
        esDivisibleEntreCinco("quince");

        // #endregion 



    // #region tarea 5: Clasificar nota de examen
        console.log("============================= Clasificar nota de examen ==============================")

        function clasificarNota(nota) {
            // combrobar que el numero introducido sea valido
            if (typeof nota === "number" && Number.isFinite(nota)) {
                // comprobar que la nota este entre 0 y 100
                if (nota >= 0 || nota <=100) {
                    if (nota >= 90 ) { // usar los operadores para determinar la calificación en base a la nota
                        console.log("La nota es: Excelente")
                    }else if (nota >= 70 && nota < 90 ) {
                        console.log("La nota es: Buena")
                    } else if (nota >= 50 && nota < 70 ) {
                        console.log("La nota es: Regular")
                    } else if (nota < 50) {
                        console.log("La nota es: Insuficiente")
                    }
                } else {
                    console.log("Error: Por favor, ingrese una nota entre 0 y 100")
                }
            } else {
                console.log("Error: Por favor ingresar un valor numerico valido")
            }           
        }

        clasificarNota(56);
        clasificarNota(78);
        clasificarNota(99);
        clasificarNota(44);
        clasificarNota("treinta");
        // #endregion