import React, {Component, PropTypes} from 'react'
import TodoActions from '../../actions/TodoActions'
import TodoTextInput from '../TodoTextInput'

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

  render() {

    const todo = this.props.todo
    let inputField

    if (this.state.isEditing) {
      inputField = <TodoTextInput
        onSave={::this.handleSave}
        id={todo.id}
        text={todo.text} />
    }

    return (
      <li onDoubleClick={::this.handleDoubleClick}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={::this.handleToggleComplete} />
        {this.props.todo.text}
        {inputField}
      </li>
    )
  }

};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
