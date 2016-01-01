import React, {Component, PropTypes} from 'react'
import TodoActions from '../../actions/TodoActions'
import TodoTextInput from '../TodoTextInput'

const classNames = require('classnames');

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditing: false
    }
  }

  handleDoubleClick(e) {
    this.setState({isEditing: true})
  }

  handleSave(text) {
    TodoActions.update(this.props.todo.id, text)
    this.setState({isEditing: false})
  }

  handleToggleComplete(e) {
    TodoActions.toggleComplete(this.props.todo)
  }

  handleDestroy(e) {
    TodoActions.destroy(this.props.todo.id)
  }

  render() {

    const todo = this.props.todo

    const textClass = classNames({
      completed: todo.complete
    })

    let text = <span className={textClass}>{todo.text}</span>
    if (this.state.isEditing) {
      text = <TodoTextInput
        onSave={::this.handleSave}
        id={todo.id}
        text={todo.text} />
    }

    return (
      <li
        className="list-group-item"
        onDoubleClick={::this.handleDoubleClick}>
        <div className="row">
          <div className="col-xs-2 col-sm-1">
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={::this.handleToggleComplete} />
          </div>
          <div className="col-xs-8 col-sm-10">
            {text}
          </div>
          <div className="col-xs-2 col-sm-1">
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={::this.handleDestroy}>
              <span className="glyphicon glyphicon-remove"></span>
            </button>
          </div>
        </div>
      </li>
    )
  }

};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
