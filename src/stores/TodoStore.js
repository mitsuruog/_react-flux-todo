import Dispatcher from '../dispatcher/Dispatcher'
import { CREATE, UPDATE, COMPLETE, UNDO_COMPLETE, DESTROY, DESTROY_COMPLETED } from '../constants/TodoConstants'

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

  destroy(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  destroyCompleted() {
    this.todos = this.todos.filter((todo) => !todo.complete)
  }

}

let todoStore = new TodoStore();

Dispatcher.register((action) => {

  // TODO デバック用。あとでけす
  console.log(action.actionType);

  let text

  switch (action.actionType) {
    case CREATE:
      text = action.text.trim()
      if (text) {
        todoStore.create(text)
        todoStore.emitChange()
      }
      break;
    case UPDATE:
      text = action.text.trim()
      todoStore.update(action.id, {
        text: text,
      })
      todoStore.emitChange()
      break;
    case COMPLETE:
      todoStore.update(action.id, {
        complete: true,
      })
      todoStore.emitChange()
      break;
    case UNDO_COMPLETE:
      todoStore.update(action.id, {
        complete: false,
      })
      todoStore.emitChange()
      break;
    case DESTROY:
        todoStore.destroy(action.id)
        todoStore.emitChange()
        break;
    case DESTROY_COMPLETED:
        todoStore.destroyCompleted()
        todoStore.emitChange()
        break;
    default:

  }
});

export default todoStore;
