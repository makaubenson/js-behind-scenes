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
