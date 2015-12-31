import React, {Component, PropTypes} from 'react'
import TodoItem from '../TodoItem'

class Main extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const todos = this.props.todos.map((todo) => {
      return <TodoItem key={todo.id} todo={todo} />
    })

    return (
      <section id="main">
        <ul>
          {todos}
        </ul>
      </section>
    )
  }

};

Main.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default Main
