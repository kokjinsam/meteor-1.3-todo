import { Mongo } from 'meteor/mongo';

export const Todos = new Mongo.Collection('todos');
export const TodosCache = new Mongo.Collection(null);

Todos.allow({
  insert() {
    return true;
  },
});
