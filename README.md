
# Clientes de un Banco

[![Build Status](https://travis-ci.org/uqbar-project/clientesStrategy-es6.svg?branch=master)](https://travis-ci.org/uqbar-project/clientesStrategy-es6)

<img src="img/customer.png" height="100" width="100"/>

## El dominio

Ejercicio que muestra cómo se implementa varios clientes diferentes

* el ejemplo básico es un [cliente sencillo](src/clienteSencillo.js), que muestra 
 * la sintaxis de ES6 para definir una clase cliente, con constructores, atrributos y métodos
 * cómo se define un objeto similar a un JSON, solo que el comportamiento se define con objetos closure (funciones), implementado con arrow functions
* luego se implementa un cliente de un banco que tiene un strategy para calcular el monto máximo de crédito, esto se resuelve
 * con un [strategy estándar](src/clienteStrategySimple.js), casi "de libro", que modela clases para cada algoritmo
 * y luego con [bloques o arrow functions](src/clienteStrategyFuncion.js), que reemplazan a las clases anteriores. El cliente provee formas de construir un cliente con criterio común o dudoso, e internamente cambia la implementación de la función que calcula ese monto máximo.

# Cómo se evalúa

## En un navegador

El proyecto viene con tests hechos en [Jasmine](https://jasmine.github.io/). Para facilitar la introducción al lector ya están copiados en el presente repositorio. Para correr los tests

* Clonar el proyecto (o descargarlo como zip)

```bash
# git clone https://github.com/uqbar-project/clientesStrategy-es6
```

* Abrir el archivo [SpecRunner.html](SpecRunner.html) en un navegador
* Eso corre todos los tests definidos en la carpeta spec.

## Mediante un script npm

Otra opción consiste en correr los tests mediante el script de npm desde la consola o el Git Bash

```bash
$ npm install
$ npm test
```

Los archivos de configuración que pueden mirar son:

- package.json: que contiene el script para instalar dependencias y ejecutar los tests de **Karma**
- karma.conf.js: la configuración de Karma para correr los tests contra un browser oculto llamado PhantomJS, que requiere transpilar los archivos fuente en ECMAScript6 a Javascript 5.


