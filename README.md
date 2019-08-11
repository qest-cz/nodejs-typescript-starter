# Nodejs typescript starter
If you need typescript starter pack for node.js development. You are on 
right place. Repository contains only must have (for our point of view) 
dependencies to build. The repository solves 4 main parts

- **Run in development mode** - we use `ts-node` as a typescript execution environment,
`dot-env` library for setting up environment variables
- **Run tests** there is a predefined way how to run tests with `mocha`, in future we will replace with `jest` probably
- **Build application** - for build is used clasic way of `tsc`
- **Run in production mode** - run compiled code 


### List of used libraries
- `mocha`, `chai` for testing - it will be updated with jest in 0.1.0
- `nyc` for code coverage
- `prettier`, `tslint` for code style checking
- `nodemon` 
- `pino-pretty` for nice console output  


