import React, {Component, PropTypes} from 'react'
import TodoActions from '../../actions/TodoActions'
import TodoItem from '../TodoItem'

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isAllCompleted: false
    }
  }

  handleToggleAll(e) {
    const newState = !this.state.isAllCompleted
    TodoActions.toggleAll(newState)
    this.setState({isAllCompleted: newState})
  }

  render() {

    const todos = this.props.todos.map((todo) => {
      return <TodoItem key={todo.id} todo={todo} />
    })

    let toggleAll
    if (todos.length) {
      toggleAll =
        <li>
          <input type="checkbox"
            checked={this.state.isAllCompleted}
            onClick={::this.handleToggleAll} />
        </li>
    }

    return (
      <section id="main">
        <ul>
          {toggleAll}
          {todos}
        </ul>
      </section>
    )
  }

};

Main.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Main
