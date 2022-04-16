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
