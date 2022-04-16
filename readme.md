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
