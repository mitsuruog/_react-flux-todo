import Dispatcher from '../dispatcher/Dispatcher'
import { CREATE, UPDATE, COMPLETE, UNDO_COMPLETE, ALL_COMPLETE, ALL_UNDO_COMPLETE, DESTROY, DESTROY_COMPLETED } from '../constants/TodoConstants'

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

  toggleAll(complate) {
    const actionType = complate ? ALL_COMPLETE: ALL_UNDO_COMPLETE
    Dispatcher.dispatch({
      actionType: actionType,
    })
  }

  destroy(id) {
    Dispatcher.dispatch({
      actionType: DESTROY,
      id: id
    })
  }

  destroyCompleted() {
    Dispatcher.dispatch({
      actionType: DESTROY_COMPLETED
    })
  }

}

export default new TodoActions()
