import Dispatcher from '../dispatcher/Dispatcher'
import {CREATE} from '../constants/TodoConstants'

class TodoActions {

  create(text) {
    Dispatcher.dispatch({
      actionType: CREATE,
      text: text,
    })
  }

}

export default new TodoActions()
