import Dispatcher from '../dispatcher/Dispatcher'
import {CREATE} from '../constants/TodoConstants'

const EventEmitter = require('events').EventEmitter;
const CHANGE_EVENT = 'change';

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
      complete: false,
      text: text,
    })
  }

}

let todoStore = new TodoStore();

Dispatcher.register((action) => {

  // TODO デバック用。あとでけす
  console.log(action.actionType);

  let text = action.text.trim()
  
  switch (action.actionType) {
    case CREATE:
      if (text) {
        todoStore.create(text)
        todoStore.emitChange();
      }
      break;
    default:

  }
});

export default todoStore;
