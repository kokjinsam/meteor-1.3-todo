# Todo App

## Things to do

- [x] Queries
- [ ] Mutations
- [ ] Reactive update
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

    **solution**: ...

3.
