import Dispatcher from '../dispatcher/Dispatcher'
import { CREATE, UPDATE, COMPLETE, UNDO_COMPLETE } from '../constants/TodoConstants'

class TodoActions {

  create(text) {
    Dispatcher.dispatch({
      actionType: CREATE,
      text: text,
    })
  }

  update(id, text) {
    Dispatcher.dispatch({
      actionType: UPDATE,
      id: id,
      text: text,
    })
  }

  toggleComplete(todo) {
    const actionType = todo.complete ? UNDO_COMPLETE: COMPLETE
    Dispatcher.dispatch({
      actionType: actionType,
      id: todo.id
    })
  }

}

export default new TodoActions()
