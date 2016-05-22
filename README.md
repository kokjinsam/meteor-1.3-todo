# Todo App

## Things to do

- [x] Queries
- [x] Mutations
- [x] Reactive update
- [ ] Authorization
- [ ] Authentication

## Stack:

- Meteor 1.3.X
- Mantra
- React
- Radium
- Redux
- FlowRouter
- Apollo

## Troubleshooting

1. `Schema must be an instance of GraphQLSchema. Also ensure that there are not multiple versions of GraphQL installed in your node_modules directory.`

    **solution**: ensure that `graphql` is at `0.5.0`.

2. `Meteor code must always run within a Fiber. Try wrapping callbacks that you pass to non-Meteor libraries with Meteor.bindEnvironment.`

    **solution**: ~~if you have `gadicc:ecmascript-hot`, remove the package. Use `ecmascript` instead.~~ If you have presets such as `babel-preset-stage-0`, ... , `babel-preset-stage-3` , remove the preset. `babel-plugin-transform-async-to-generator` in `babel-preset-stage-0` is causing problem.

    Below command will install all that is included in `babel-preset-stage-0` except `babel-plugin-transform-async-to-generator`:

    ```
    npm install --save-dev babel-plugin-syntax-object-rest-spread babel-plugin-syntax-trailing-function-commas babel-plugin-syntax-do-expressions babel-plugin-syntax-function-bind babel-plugin-syntax-class-properties babel-plugin-syntax-decorators babel-plugin-syntax-export-extensions babel-plugin-syntax-exponentiation-operator babel-plugin-transform-object-rest-spread babel-plugin-transform-do-expressions babel-plugin-transform-function-bind babel-plugin-transform-class-properties babel-plugin-transform-decorators babel-plugin-transform-export-extensions babel-plugin-transform-exponentiation-operator babel-helper-explode-class babel-helper-bindify-decorators babel-helper-builder-binary-assignment-operator-visitor babel-helper-explode-assignable-expression
    ```

    In your `.babelrc`,

    ```
    {
      "plugins": [
        "syntax-object-rest-spread",
        "syntax-trailing-function-commas",
        "syntax-do-expressions",
        "syntax-function-bind",
        "syntax-class-properties",
        "syntax-decorators",
        "syntax-export-extensions",
        "syntax-exponentiation-operator",
        "transform-object-rest-spread",
        "transform-function-bind",
        "transform-export-extensions",
        "transform-exponentiation-operator",
        "transform-do-expressions",
        "transform-decorators",
        "transform-class-properties"
      ]
    }
    ```
3.
  ```
    W20160522-01:16:19.632(-5)? (STDERR) import { Mongo } from 'meteor/mongo';                                         
    W20160522-01:16:19.632(-5)? (STDERR) ^^^^^^   
    W20160522-01:16:19.847(-5)? (STDERR) SyntaxError: Unexpected reserved word
  ```

  **solution**: npm install `babel-preset-es2015` and add `"es2015"` in your `.babelrc`
