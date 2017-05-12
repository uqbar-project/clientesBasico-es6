
# Clientes de un Banco

## El dominio

Ejercicio que muestra cómo se implementa varios clientes diferentes

* el ejemplo básico es un [cliente sencillo](src/clienteSencillo.js), que muestra 
 * la sintaxis de ES6 para definir una clase cliente, con constructores, atrributos y métodos
 * cómo se define un objeto similar a un JSON, solo que el comportamiento se define con objetos closure (funciones), implementado con arrow functions
* luego se implementa un cliente de un banco que tiene un strategy para calcular el monto máximo de crédito, esto se resuelve
 * con un [strategy estándar](src/clienteStrategySimple.js), casi "de libro", que modela clases para cada algoritmo
 * y luego con [bloques o arrow functions](src/clienteStrategyFuncion.js), que reemplazan a las clases anteriores. El cliente provee formas de construir un cliente con criterio común o dudoso, e internamente cambia la implementación de la función que calcula ese monto máximo.

## Cómo se evalúa

El proyecto viene con tests hechos en [Jasmine](https://jasmine.github.io/). Para facilitar la introducción al lector ya están copiados en el presente repositorio. Para correr los tests

* Clonar el proyecto (o descargarlo como zip)

```bash
# git clone https://github.com/uqbar-project/clientesStrategy-es6
```

* Abrir el archivo [SpecRunner.html](SpecRunner.html) en un navegador
* Eso corre todos los tests definidos en la carpeta spec.

