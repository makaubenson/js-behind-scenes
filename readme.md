# Javascript Behind Scenes

## High Level

- Developer does not need to worry, everything happens automatically.

## Garbage Collection

- Removes old and unsued garbage from the comp memory.

## Interpretation / Compiling

- Happens inside the js engine.

## Multi-paradigm

- A paradigm is an approach and mindset of structuring code which will direct your coding style and technique.

#### Procedural

- Organizing code very lineraly and using functions.

#### Object Oriented Programming (OOP)

#### Functional Programming(FP)

## prototype based object oriented

- A prototype based object oriented programming is a programming paradigm in which objects are created by a prototype.

## First Class Functions

- Functions are treated as regular variables. Allows for functional programming.
- Parsing functions inside other functions.

## Dynamic

- Dynamic programming is a programming paradigm in which the program is written in a dynamic language. eg we dont declare data types.

## Single Threaded and Non-blocking event loop

### Concurrency model

- It is how the js engine handles multiples tasks happening at the same time.

#### Why Do we need concurrency model

- Js runs on a single thread so it can only do one thing at a time.
- Thread is where code is executed in a machine processor.

#### What about a long running task?

- Sounds like it would block the single thread. However we want non blocking behavior.

#### How do we achieve that?

- By using an event loop. It takes long running tasks, executes them in the background and puts them in the main thread one they are finished.

## The Javascript Engine and Runtime

- `Js engine` is a comp program that executes js code.
- Each browser has its own js engine, however Google's V8 engine is the most popular.
- V8 engine powers chrome and also node.js.
- Each js engine has a callstack and a heap.
- `Callstack` is where our code is executed using an execution context.
- `Heap` is an unstructured memory pool that stores all the objects that applications needs.

### How code is complied to machine code

- Comps understand 0s and 1s.

- Compilation - Entire code is converted into machine code at once and written to a binary file that can be executed by a comp.
- Interpretation: Interpreter runs through the source code and executes it line by line.
- Modern Js is not any longer interpreted, it now uses both interpretation and compilation. It is called Just In Time Compilation.
- It converts entire code into machine code at once, then executed immediately.

## Js Code Processing

- `As js code enters the js engine, it is first`:
- Parsed / Read The code: - The code is parse to an abstract data structure called `abstract syntax tree` (AST).
- Compiled / Translated The code: - The AST is translated into machine code.
- Executed / Executed The code: - The machine code is executed in the callstack.

## The Javascript Runtime

- The most common javascript runtime is the browser.
- Its a container including all the things that we need to use javascript(in this case in the browser).
- In the heart of every js runtime is is the `js engine`.
- Without engine there is no js runtime although js engine is not enough since we need access to web apis. WEB APIs are functionalities provided to the engine.
- Functionalities provided to the engine are accessible through the window object.
- A typical js runtime also containes a `callback queue` -contains all the callback functions that are waiting to be executed.

## Execution Contexts and The Call Stack

- After compiling:
- Global execution context is created for top level code. Top level code is one not inside any function.
- Code inside functions will be written however code inside the will be executed once the functions are called.
- Execution of top level code happens inside global execution context
- Execution of functions takes place. For every function call, new execution context containing all the info necessary to run that exactly function.

### Whats inside execution context?

#### Variable Environment.

- All variables and function declarations are stored here.

#### Scope Chain

- consists of references to variables located outside of the current function.
- Stored in each execution context.

#### This Keyword

- The value of this is the object that is currently being executed.

## Note: `Executions contexts belonging to arrow functions do not get their own arguments keyword nor do they get their own this keyword.`

- They can only access the arguments and this of the parent execution context.

## The Scope and The Scope Chain

- Scoping means how variables are organized and accessed. Where do variables live or where can we access variables?

### Lexical Scoping

- Scoping is controlled by the placement of functions and blocks in the code. `e.g a function written inside another function is called a nested function and it has access to variables of the parent function.`
- `Scope` is the space or environment in which certain variable is declared. There is: global scope, function scope, and block scope.
- `scope of a variable`:- Region of our code where certain varible can be accessed.

## Types of Scopes

### Global Scope

- For top level code
- Code outside any function or block
- Variables declared in global scope are accessible everywhere.

### Function Scope

- Varibles declared are only accessible inside function.
- Also called local scope.

### Block Scope

- Variables declared inside a block are only accessible inside that block.
- This only applies to `let` and `const` keywords.
- Functions are also block scoped.(Only in strict mode)
- e.g `if` statement is a block scope.
- Functions declared inside block are only accessible inside that block.
- SCOPE CHAIN uses variable lookup to find variables needed.
- Scope cannot look down.
- Variables declared with `var` are NOT `block scoped` rather they are `function scoped`.
- When a variable is not in the current scope,, the engine looks up the scope chain to until it finds the variable it is looking for. This is called variable lookup.

### Hoisting

- JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
- Hoisting makes some types of variables accessible and usable in the code before they are actually declared. `Variables lifted to the top of their scope`

#### What Happens

- The code is ussualy scanned for variable declarations and for each variable, a new property is created in the variable environment object.

### How Hoisting Works.

- Function declarations are capable of being hoisted and their initial value is ussualy set to the actualfunction.`functions are ussualy blocked scoped in strict mode`. This implies `we can use function declarations before they are actually declared in the code`. Because they are stored in the variable environment object before code is executed.
- var variables are hoisted.Their initial value is `undefined`. Var variables rea function scoped.
- Let and const variables are not hoisted.Initial value is uninitialized. `The fact is they are atually hoisted however, their initial value is set to uninitialized which implies that they cant be used.` They are actually placed in a `Temporal Dead Zone (TDZ). This means that, we can access the variables between beggining of the scope and where the variables are declared.Let and const are block scoped.
- The hoisting of Function expressions and arrow functions depends on if they were created using var, let or const. They behave as variables in regard to hoisting.

## Temporal Dead Zone

- Lets look at the variable `job`
- const myName = 'Benson';
- if(myName === 'Benson'){
  - console.log(`Benson is a ${job}`)//Cant access job before it is initialized
  - const age = 2037 -1989;
  - console.log(age);
    // Above job declaration is a temporal dead zone thus it cant be accessed.
  - const job = 'teacher'; // Scoped to the if block.
  - console.log(x);// x is not defined.
  - }

### Why have a Temporal Dead Zone

- Helps minimize the chances of getting bugs in code.
- To make const variables work the way they are supposed to. eg we cant reassign const variables thus we cannot have a value as first `undefined` then define it later which is how hoisting really works.
- The only function that works before declaring is `function declaration`.
- NOTE: To avoid hoisting issues by not declaring variables with `var` instead use `const` and `let`.
- Always declare functions before using them.

### This Keyword

- Its a special variable created for every execution context.(every function). It takes the value of(points to) the owners of the function in which the this keyword is used.
- It points to the owner of that function.
- Value of this keyword is not static.Its value is only assigned when the function is actually called.

#### ways of calling a function

##### As a `method`.

- i.e is, as a function attached to an object. `this` points to the object that is calling the method.(points to the object in which the method is called).

- e.g
- const benson = {
  name : 'Benson',
  year:1989,
  calcAge: function(){
  return 2037 - this.year;
  }
  };
  benson.calcAge();

##### As normal functions (simple function call)

- This keyword will be undefined in strcit mode.

##### As arrow functions

- They dont get their own this keyword. If you use `this` variable it will be `this keyword` of the parent function. This is called lexical keyword because of its behavior of picking up from lexical scope of the arrow functions.
- An object IS NOT a block scope

##### As an event listener

- This keyword will always point to the DOM element the handler is attached to.

##### variables declared using var ususally add them to the global object

##### Never use arrow function as a method

- Regular functions have their own this keyword.
- The value of `this keyword` inside a regular function is usually `undefined`.
- The problem of `this` keyword turning out undefined in regular functions is solved using a `special variable` called `self`. This was a pre ES6 solution. Is very old

- `arguments` keyword is only available in regular functions.

## Javascript Objects (REFERENCE TYPES)

- Object Literal -A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces
- Array
- Functions
- ...etc

## Javascript Primitive Datatypes (PRIMITIVE TYPES)

- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- Bigint

- Primitive Types are stored in the call stack. `Stored in execution contexts in which they are declared.`
- Reference Types are stored in the Heap of the js engine

## Copying Objects

-To copy objects we should use a function called `Object.assign()`. This function merges 2 objects and returns a new one. e.g `const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log(jessica2);
console.log(jessicaCopy);`

- Using `Object.assign()` only works on the first level. That is, if we have an object inside another object, inner object will still be the same.
