# Summery

## Introduction

-  alternative to JS extends it with new feature and syntax
-  browsers don't understand TYPE SCRIPT, so it compiled to JS
-  use strict type VS dynamic type in JS

## Type Script Compiler

-  install globally -> npm install -g typescript
-  compile command:
   -  tsc \<input-file.ts> \<output-file.js> \<flag>
   -  when it has same name use input-file only
-  files changes re-compile or use watch flag -w

## Types Basics

-  strict types mean value types can't change during runtime.
-  type determined by value assignment (inference)
-  arg type definition -> function (arg: type) {...}  
   type check happen before the compilation to JS, file won't compile with errors

## Arrays & Objects

### Arrays

-  variable hold array can't assign to other type
-  array can have more than 1 type values by assigning mixed types
-  when an array declare and assign to an empty array, it will accept any type of value

### Object

-  variable hold object can be assigned to another object with the same types, properties
-  properties can re-assign with a value from the same type
-  properties can't be added to an object after assignment

## Explicit Type

-  The opposite from inference value type (value type determined explicitly and not by literal value)

### Primitive

-  primitiveVar: type
-  **union type** -> primitiveVar : type1 | type2

### Arrays

-  arrayVar: type [ ]
-  **union type** -> arrayVar : (type1|type2) [ ]
-  **explicit + init** -> arrayVar : type[] = [ ]

### Objects

-  objectVar : object  
   mean -> can assign any object type includes array
-  objectVar : { name : string, age : number }  
   determine explicitly object structure and properties types
