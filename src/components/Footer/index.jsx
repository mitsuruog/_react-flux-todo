import React, {Component, PropTypes} from 'react'
import TodoActions from '../../actions/TodoActions'

class Footer extends Component {

  constructor(props) {
    super(props)
  }

  handleClearCompleted(e) {
    TodoActions.destroyCompleted()
  }

  render() {

    const completedCount = this.props.todos.filter((todo) => todo.complete).length

    let clearCompletedButton
    if(completedCount >= 1) {
      clearCompletedButton =
        <button
          onClick={::this.handleClearCompleted}>Clear completed ({completedCount})</button>
    }

    return (
      <footer>
        footer {this.props.todos.length}
        {clearCompletedButton}
      </footer>
    )
  }

};

Footer.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default Footer
