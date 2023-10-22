# TypeScript

## What is TypeScript?

- JavaScript with types
- Superset of JavaScript - all JavaScript is valid TypeScript
  - Slowly start to add types and type safety to a project
- A compliation tool/super fancy linter

  - Right now there is little choice for running TypeScript files natively, no browser suppoer
    - Bun
    - Deno
  - TypeScript files are turned into JavaScript files - if we have type errors the code won't compile

## Why do we use TypeScript?

- It prevents us making dumb mistakes
- Moves the discovery of mistakes from run time to compile/coding time
- It helps teams communicate
  - We can communicate things like component props, api responses (be careful), what DTOs look like etc etc

## What are the downsides?

- It's slower to write code, and we write more boilerplate code
- Can lead to over obstraction/complication
- There's no performance benefit (right now)
- Sometimes things get weird- we write weird/confusing code to satisfy TypeScript
