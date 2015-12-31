import Dispatcher from '../dispatcher/Dispatcher'
import { CREATE, UPDATE } from '../constants/TodoConstants'

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

}

export default new TodoActions()
