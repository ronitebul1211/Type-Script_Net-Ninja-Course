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
