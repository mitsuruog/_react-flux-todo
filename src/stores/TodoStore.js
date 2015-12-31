import Dispatcher from '../dispatcher/Dispatcher'
import { CREATE, UPDATE } from '../constants/TodoConstants'

const EventEmitter = require('events').EventEmitter;
const CHANGE_EVENT = 'change';
const shortid = require('shortid');
const assign = require('object-assign');

class TodoStore extends EventEmitter {

  constructor() {
    super()
    this.todos = [];
  }

  getAll() {
    return this.todos;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  create(text) {
    this.todos.push({
      id: shortid.generate(),
      complete: false,
      text: text,
    })
  }

  update(id, updated) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo = assign({}, todo, updated)
      }
      return todo
    })
  }

}

let todoStore = new TodoStore();

Dispatcher.register((action) => {

  // TODO デバック用。あとでけす
  console.log(action.actionType);

  const text = action.text.trim()

  switch (action.actionType) {
    case CREATE:
      if (text) {
        todoStore.create(text)
        todoStore.emitChange()
      }
      break;
    case UPDATE:
      todoStore.update(action.id, {
        text: text,
      })
      todoStore.emitChange()
    default:

  }
});

export default todoStore;
